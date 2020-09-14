// v1.4.0
// publish 2.x 也是用这个文件，需要做兼容
let isPublish2 = process.argv[2].includes("publish_qqgame.js") && process.argv[3].includes("--evn=publish2");
// 获取Node插件和工作路径
let ideModuleDir, workSpaceDir;
if (isPublish2) {
	//是否使用IDE自带的node环境和插件，设置false后，则使用自己环境(使用命令行方式执行)
	const useIDENode = process.argv[0].indexOf("LayaAir") > -1 ? true : false;
	ideModuleDir = useIDENode ? process.argv[1].replace("gulp\\bin\\gulp.js", "").replace("gulp/bin/gulp.js", "") : "";
	workSpaceDir = useIDENode ? process.argv[2].replace("--gulpfile=", "").replace("\\.laya\\publish_qqgame.js", "").replace("/.laya/publish_qqgame.js", "") + "/" : "./../";
} else {
	ideModuleDir = global.ideModuleDir;
	workSpaceDir = global.workSpaceDir;
}

//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const del = require(ideModuleDir + "del");
const revCollector = require(ideModuleDir + 'gulp-rev-collector');
let commandSuffix = ".cmd";
const provider = "1109625052";
const fullRemoteEngineList = ["laya.core.js", "laya.webgl.js", "laya.filter.js", "laya.ani.js", "laya.d3.js", "laya.html.js", "laya.particle.js", "laya.ui.js", "bytebuffer.js"];

let copyLibsTask = ["copyLibsJsFile"];
let packfiletask = ["packfile"];
if (isPublish2) {
	copyLibsTask = "";
	packfiletask = ["copyPlatformFile_QQ"];
}

let 
    config,
	platform,
    releaseDir;
let versionCon; // 版本管理version.json
// 应该在publish中的，但是为了方便发布2.0及IDE 1.x，放在这里修改
let layarepublicPath = path.join(ideModuleDir, "../", "code", "layarepublic");
if (!fs.existsSync(layarepublicPath)) {
	layarepublicPath = path.join(ideModuleDir, "../", "out", "layarepublic");
}
gulp.task("preCreate_QQ", copyLibsTask, function() {
	if (isPublish2) {
		let pubsetPath = path.join(workSpaceDir, ".laya", "pubset.json");
		let content = fs.readFileSync(pubsetPath, "utf8");
		let pubsetJson = JSON.parse(content);
		platform = "qqgame";
		releaseDir = path.join(workSpaceDir, "release", platform).replace(/\\/g, "/");
		config = pubsetJson[2];
	} else {
		platform = global.platform;
		releaseDir = global.releaseDir;
		config = global.config;
	}
	// 如果不是QQ小游戏
	if (platform !== "qqgame") {
		return;
	}
	if (process.platform === "darwin") {
		commandSuffix = "";
	}
	let copyLibsList = [`${workSpaceDir}/bin/libs/laya.qqmini.js`];
	var stream = gulp.src(copyLibsList, { base: `${workSpaceDir}/bin` });
	return stream.pipe(gulp.dest(releaseDir));
});

gulp.task("copyPlatformFile_QQ", ["preCreate_QQ"], function() {
	// 如果不是QQ小游戏
	if (platform !== "qqgame") {
		return;
	}
	let isHasPublish = 
		fs.existsSync(path.join(releaseDir, "game.js")) &&
		fs.existsSync(path.join(releaseDir, "game.json")) &&
		fs.existsSync(path.join(releaseDir, "project.config.json")) &&
		fs.existsSync(path.join(releaseDir, "weapp-adapter.js"));
	if (isHasPublish) {
		return;
	}
	let adapterPath = path.join(layarepublicPath, "LayaAirProjectPack", "lib", "data", "qqfiles");
	let stream = gulp.src(adapterPath + "/*.*");
	return stream.pipe(gulp.dest(releaseDir));
});

gulp.task("version_QQ", packfiletask, function() {
	// 如果不是QQ小游戏
	if (platform !== "qqgame") {
		return;
	}
	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		let gameJSPath = releaseDir + "/game.js";
		let srcList = [versionPath, gameJSPath];
		return gulp.src(srcList)
			.pipe(revCollector())
			.pipe(gulp.dest(releaseDir));
	}
});

gulp.task("pluginEngin_QQ", ["version_QQ"], function(cb) {
	// 如果不是微信小游戏
	if (platform !== "qqgame") {
		return cb();
	}
	if (!config.uesEnginePlugin) { // 没有使用微信引擎插件，还是像以前一样发布
		return cb();
	}
	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
	}
	let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
	
	// 获取version等信息
	let coreLibPath = path.join(workSpaceDir, "bin", "libs", "laya.core.js");
	let isHasCoreLib = fs.existsSync(coreLibPath);
	let isOldAsProj = fs.existsSync(`${workSpaceDir}/asconfig.json`) && !isHasCoreLib;
	let isNewTsProj = fs.existsSync(`${workSpaceDir}/src/tsconfig.json`) && !isHasCoreLib;
	let EngineVersion = getEngineVersion();
	if (!EngineVersion) {
		throw new Error(`读取引擎版本号失败，请于服务提供商联系!`);
	}
	if (!EngineVersion || EngineVersion.includes("beta") || !canUsePluginEngine(EngineVersion)) {
		throw new Error(`该版本引擎无法使用引擎插件功能(engineVersion: ${EngineVersion})`);
	}
	console.log(`通过版本号检查:  ${EngineVersion}`);
	// 使用引擎插件
	let localUseEngineList = [];
	let copyEnginePathList;
	new Promise(function(resolve, reject) {
		console.log(`修改game.js和game.json`);
		// 1) 修改game.js和game.json
		// 修改game.js
		let gameJsPath = path.join(releaseDir, "game.js");
		let gameJscontent = `require("weapp-adapter.js");\nrequire("./libs/laya.qqmini.js");\nrequirePlugin('layaPlugin');\nwindow.loadLib = require;\nrequire("./${indexJsStr}");`;
		fs.writeFileSync(gameJsPath, gameJscontent, "utf8");
		// 修改game.json，使其支持引擎插件
		let gameJsonPath = path.join(releaseDir, "game.json");
		let gameJsonContent = fs.readFileSync(gameJsonPath, "utf8");
		let conJson = JSON.parse(gameJsonContent);
		conJson.plugins = {
			"layaPlugin": {
				"version": EngineVersion,
				"provider": provider,
				"path": "laya-libs"
			}
		}
		gameJsonContent = JSON.stringify(conJson, null, 4);
		fs.writeFileSync(gameJsonPath, gameJsonContent, "utf8");
		// 修改project.config.json
		let projConfigPath = path.join(releaseDir, "project.config.json");
		let projConfigcontent = fs.readFileSync(projConfigPath, "utf8");
		let projConfigConJson = JSON.parse(projConfigcontent);
		projConfigConJson.compileType = "gamePlugin";
		projConfigConJson.pluginRoot = "laya-libs";
		projConfigcontent = JSON.stringify(projConfigConJson, null, 4);
		fs.writeFileSync(projConfigPath, projConfigcontent, "utf8");
		resolve();
	}).then(function() {
		return new Promise(function(resolve, reject) {
			console.log(`确定用到的插件引擎`);
			// 2) 确定用到了那些插件引擎，并将插件引擎从index.js的引用中去掉
			let indexJsPath = path.join(releaseDir, indexJsStr);
			let indexJsCon = fs.readFileSync(indexJsPath, "utf8");
			let item, fullRequireItem;
			for (let i = 0, len = fullRemoteEngineList.length; i < len; i++) {
				item = fullRemoteEngineList[i];
				fullRequireItem = `loadLib("libs/${item}")`;
				if (indexJsCon.includes(fullRequireItem)) {
					localUseEngineList.push(item);
					indexJsCon = indexJsCon.replace(fullRequireItem, "");
				}
			}
			if (isOldAsProj || isNewTsProj) { // 如果as||ts_new语言，开发者将laya.js也写入index.js中了，将其删掉
				fullRequireItem = `loadLib("laya.js")`;
				if (indexJsCon.includes(fullRequireItem)) {
					indexJsCon = indexJsCon.replace(fullRequireItem, "");
				}
			}
			fs.writeFileSync(indexJsPath, indexJsCon, "utf8");
			// ts/js再次修改game.js，仅引用使用到的类库
			// as||ts_new因为本地只有laya.js，无法仅引用使用到的类库
			if (!isOldAsProj && !isNewTsProj) {
				let pluginCon = "";
				localUseEngineList.forEach(function(item) {
					pluginCon += `requirePlugin("layaPlugin/${item}");\n`;
				});
				let gameJsPath = path.join(releaseDir, "game.js");
				let gameJsCon = fs.readFileSync(gameJsPath, "utf8");
				gameJsCon = gameJsCon.replace(`requirePlugin('layaPlugin');`, pluginCon);
				fs.writeFileSync(gameJsPath, gameJsCon, "utf8");
			}
			resolve();
		});
	}).then(function() {
		return new Promise(function(resolve, reject) {
			console.log(`将本地的引擎插件移动到laya-libs中`);
			// 3) 将本地的引擎插件移动到laya-libs中
			copyEnginePathList = [`${releaseDir}/libs/{${localUseEngineList.join(",")}}`];
			if (isOldAsProj || isNewTsProj) { // 单独拷贝laya.js
				copyEnginePathList = [`${releaseDir}/laya.js`];
			}
			gulp.src(copyEnginePathList).pipe(gulp.dest(`${releaseDir}/laya-libs`));
			setTimeout(resolve, 500);
		});
	}).then(function() {
		return new Promise(function(resolve, reject) {
			console.log(`将libs中的本地引擎插件删掉`);
			// 4) 将libs中的本地引擎插件删掉
			del(copyEnginePathList, { force: true }).then(resolve);
		});
	}).then(function() {
		return new Promise(async function(resolve, reject) {
			console.log(`完善引擎插件目录`);
			// 5) 引擎插件目录laya-libs中还需要新建几个文件，使该目录能够使用
			if (isOldAsProj || isNewTsProj) { // 单独拷贝laya.js
				localUseEngineList.push("laya.js");
			}
			let 
				layalibsPath = path.join(releaseDir, "laya-libs"),
				engineIndex = path.join(layalibsPath, "index.js"),
				engineplugin = path.join(layalibsPath, "plugin.json"),
				enginesignature = path.join(layalibsPath, "signature.json");
			// index.js
			if (!fs.existsSync(layalibsPath)) {
				throw new Error("引擎插件目录创建失败，请与服务提供商联系!");
			}
			let indexCon = "";
			localUseEngineList.forEach(function(item) {
				indexCon += `require("./${item}");\n`;
			});
			fs.writeFileSync(engineIndex, indexCon, "utf8");
			// plugin.json
			let pluginCon = {"main": "index.js"};
			fs.writeFileSync(engineplugin, JSON.stringify(pluginCon, null, 4), "utf8");
			// signature.json
			let signatureCon = {
				"provider": provider,
				"signature": []
			};
			localUseEngineList.unshift("index.js");
			let fileName, md5Str;
			for (let i = 0, len = localUseEngineList.length; i < len; i++) {
				fileName = localUseEngineList[i];
				let md5Str = await getFileMd5(path.join(releaseDir, "laya-libs", fileName));
				signatureCon.signature.push({
					"path": fileName,
					"md5": md5Str
				});
			}
			fs.writeFileSync(enginesignature, JSON.stringify(signatureCon, null, 4), "utf8");
			resolve();
		});
	})
	.then(function() {
		cb();
	}).catch(function(e) {
		throw e;
	})
});

function getEngineVersion() {
	let coreLibPath = path.join(workSpaceDir, "bin", "libs", "laya.core.js");
	let isHasCoreLib = fs.existsSync(coreLibPath);
	let isOldAsProj = fs.existsSync(`${workSpaceDir}/asconfig.json`) && !isHasCoreLib;
	let isNewTsProj = fs.existsSync(`${workSpaceDir}/src/tsconfig.json`) && !isHasCoreLib;
	let EngineVersion;
	if (isHasCoreLib) {
		let con = fs.readFileSync(coreLibPath, "utf8");
		let matchList = con.match(/Laya\.version\s*=\s*['"]([0-9\.]+(beta)?.*)['"]/);
		if (!Array.isArray(matchList)) {
			return null;
		}
		EngineVersion = matchList[1];
	} else { // newts项目和旧版本as项目
		if (isOldAsProj) {
			let coreLibFilePath = path.join(workSpaceDir, "libs", "laya", "src", "Laya.as");
			if (!fs.existsSync(coreLibFilePath)) {
				return null;
			}
			let con = fs.readFileSync(coreLibFilePath, "utf8");
			let matchList = con.match(/version:String\s*=\s*['"]([0-9\.]+(beta)?.*)['"]/);
			if (!Array.isArray(matchList)) {
				return null;
			}
			EngineVersion = matchList[1];
		} else if (isNewTsProj) {
			let coreLibFilePath = path.join(workSpaceDir, "libs", "Laya.ts");
			if (!fs.existsSync(coreLibFilePath)) {
				return null;
			}
			let con = fs.readFileSync(coreLibFilePath, "utf8");
			let matchList = con.match(/static\s*version:\s*string\s*=\s*['"]([0-9\.]+(beta)?.*)['"]/);
			if (!Array.isArray(matchList)) {
				return null;
			}
			EngineVersion = matchList[1];
		}
	}
	// 特殊处理，因为历史原因，我们有一些4位的正式版本，调整为3位
	if (EngineVersion && /[\d\.]+/.test(EngineVersion) && EngineVersion.split(".").length > 3) {
		let verList = EngineVersion.split(".");
		verList.length = 3;
		EngineVersion = verList.join(".");
	}
	return EngineVersion;
}

function getFileMd5(filePath) {
	return new Promise(function(resolve, reject) {
		let md5 = crypto.createHash('md5');
		let stream = fs.createReadStream(filePath);
		stream.on("data", function(data) {
			md5.update(data);
		});
		stream.on("end", function() {
			let md5Str = md5.digest('hex');
			return resolve(md5Str);
		});
	});
}

function canUsePluginEngine(version) {
	const minVersionNum = "2.1.1";
	let compileMacthList = minVersionNum.match(/^(\d+)\.(\d+)\.(\d+)/);
	let matchList = version.match(/^(\d+)\.(\d+)\.(\d+)/);
    if (matchList[1] > compileMacthList[1]) {
        return true;
	}
    if (matchList[1] === compileMacthList[1] && matchList[2] > compileMacthList[2]) {
        return true;
    }
    if (matchList[1] === compileMacthList[1] && matchList[2] === compileMacthList[2] && matchList[3] >= compileMacthList[3]) {
        return true;
    }
    return false;
}

gulp.task("buildQQProj", ["pluginEngin_QQ"], function() {
	console.log("all tasks completed");
});