"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./index.d.ts" />
const Koa = require("koa");
const path = require("path");
const KoaServer = require("koa-static2");
const KoaRouter = require("koa-router");
const KoaLog = require("koa-logs-full");
const KoaBody = require("koa-bodyparser");
const controller_1 = require("./controller");
const app_config_1 = require("./config/app.config");
const app = new Koa();
const router = new KoaRouter();
controller_1.setCtrl(router);
app
    .use(KoaLog(app, {
    logdir: path.join(__dirname, 'logs')
}))
    .use(KoaServer('static', __dirname + '/static'))
    .use(KoaBody())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(app_config_1.proServerConfig.port);
console.log(`app is running ${app_config_1.proServerConfig.port}`);
console.log(`app's NODE_ENV is ${process.env.NODE_ENV}`);
