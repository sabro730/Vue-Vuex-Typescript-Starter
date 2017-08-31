"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homeCtrl = require("./home/index.ctrl");
exports.default = (router) => {
    router.get('/', homeCtrl.getHomePage);
};
