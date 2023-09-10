"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const BASE_PATH = "/Users/owner/Downloads/KaraokeClassifierData/TrainingData/labeledImgData";
const format = () => {
    //join
    const files = fs_1.default.readdirSync(BASE_PATH);
    const fileCount = files.length;
    let joinedData = [];
    for (let i = 0; i < fileCount; i++) {
        const data = JSON.parse(fs_1.default.readFileSync(`${BASE_PATH}/d${i + 1}.json`, 'utf8'));
        joinedData = joinedData.concat(data);
    }
    //format
    const formatted = joinedData.map((item) => ({
        imagefilename: item["image"],
        annotation: item["annotations"]
    }));
    //write
    const json = JSON.stringify(formatted, null, 2);
    try {
        fs_1.default.writeFileSync("output.json", json);
    }
    catch (err) {
        console.log(err);
    }
};
format();
