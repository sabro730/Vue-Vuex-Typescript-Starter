"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const DEBUG = process.env.NODE_ENV === 'development' ? true : false;
exports.getHomePage = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const homePage = fs.readFileSync(path.join(__dirname, DEBUG ?
        '../../../static/index.dev.html' :
        '../../../static/index.pro.html'), 'utf8');
    ctx.body = homePage;
});
