// v1.0.0
// publish 2.x 也是用这个文件，需要做兼容
let isPublish2 = process.argv[2].includes("publish_biligame.js") && process.argv[3].includes("--evn=publish2");
// 获取Node插件和工作路径
let ideModuleDir, workSpaceDir;
if (isPublish2) {
	//是否使用IDE自带的node环境和插件，设置false后，则使用自己环境(使用命令行方式执行)
	const useIDENode = process.argv[0].indexOf("LayaAir") > -1 ? true : false;
	ideModuleDir = useIDENode ? process.argv[1].replace("gulp\\bin\\gulp.js", "").replace("gulp/bin/gulp.js", "") : "";
	workSpaceDir = useIDENode ? process.argv[2].replace("--gulpfile=", "").replace("\\.laya\\publish_biligame.js", "").replace("/.laya/publish_biligame.js", "") + "/" : "./../";
} else {
	ideModuleDir = global.ideModuleDir;
	workSpaceDir = global.workSpaceDir;
}

//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const revCollector = require(ideModuleDir + 'gulp-rev-collector');
let commandSuffix = ".cmd";

let copyLibsTask = ["copyLibsJsFile"];
let packfiletask = ["packfile"];
if (isPublish2) {
	copyLibsTask = "";
	packfiletask = ["copyPlatformFile_Bili"];
}

let 
    config,
	platform,
    releaseDir;
let versionCon; // 版本管理version.json
let layarepublicPath = path.join(ideModuleDir, "../", "code", "layarepublic");
if (!fs.existsSync(layarepublicPath)) {
	layarepublicPath = path.join(ideModuleDir, "../", "out", "layarepublic");
}
// 应该在publish中的，但是为了方便发布2.0及IDE 1.x，放在这里修改
gulp.task("preCreate_Bili", copyLibsTask, function() {
	if (isPublish2) {
		let pubsetPath = path.join(workSpaceDir, ".laya", "pubset.json");
		let content = fs.readFileSync(pubsetPath, "utf8");
		let pubsetJson = JSON.parse(content);
		platform = "biligame";
		releaseDir = path.join(workSpaceDir, "release", platform).replace(/\\/g, "/");
		config = pubsetJson[7];
	} else {
		platform = global.platform;
		releaseDir = global.releaseDir;
		config = global.config;
	}
	// 如果不是Bili快游戏
	if (platform !== "biligame") {
		return;
	}
	if (process.platform === "darwin") {
		commandSuffix = "";
	}
	let copyLibsList = [`${workSpaceDir}/bin/libs/laya.bilimini.js`];
	var stream = gulp.src(copyLibsList, { base: `${workSpaceDir}/bin` });
	return stream.pipe(gulp.dest(releaseDir));
});

gulp.task("copyPlatformFile_Bili", ["preCreate_Bili"], function() {
	// 如果不是Bili快游戏
	if (platform !== "biligame") {
		return;
	}
	let biliAdapterPath = path.join(layarepublicPath, "LayaAirProjectPack", "lib", "data", "bilifiles");
	let isHasPublish = 
		fs.existsSync(path.join(releaseDir, "game.js")) &&
		fs.existsSync(path.join(releaseDir, "game.json")) &&
		fs.existsSync(path.join(releaseDir, "weapp-adapter.js"));
	if (isHasPublish) {
		return;
	}
	let stream = gulp.src(biliAdapterPath + "/*.*");
	return stream.pipe(gulp.dest(releaseDir));
});

gulp.task("modifyFile_Bili", packfiletask, function() {
	// 如果不是bili小游戏
	if (platform !== "biligame") {
		return;
	}
	// 修改game.json文件
	let gameJsonPath = path.join(releaseDir, "game.json");
	let content = fs.readFileSync(gameJsonPath, "utf8");
	let conJson = JSON.parse(content);
	conJson.deviceOrientation = config.biliInfo.deviceOrientation;
	content = JSON.stringify(conJson, null, 4);
	fs.writeFileSync(gameJsonPath, content, "utf8");

	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
	}
	let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
	// bili小游戏项目，修改index.js
	let filePath = path.join(releaseDir, indexJsStr);
	if (!fs.existsSync(filePath)) {
		return;
	}
	let fileContent = fs.readFileSync(filePath, "utf8");
	fileContent = fileContent.replace(/loadLib(\(['"])/gm, "require$1./");
	fs.writeFileSync(filePath, fileContent, "utf8");
});

gulp.task("version_Bili", ["modifyFile_Bili"], function() {
	// 如果不是bili小游戏
	if (platform !== "biligame") {
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

gulp.task("buildBiliProj", ["version_Bili"], function() {
	console.log("all tasks completed");
});