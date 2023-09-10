"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const format = () => __awaiter(void 0, void 0, void 0, function* () {
    //join
    let joinedData = [];
    for (let i = 0; i < 46; i++) {
        const data = JSON.parse(yield fs_1.default.readFileSync(`/Users/owner/Downloads/KaraokeClassifierData/TrainingData/labeledImgData/d${i + 1}.json`, 'utf8'));
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
});
format();
