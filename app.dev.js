"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const proxy = require("koa-proxy");
const webpack = require("webpack");
const KoaRouter = require("koa-router");
const webpackDevMiddleware = require("koa-webpack-dev-middleware");
const webpackHotMiddleware = require("koa-webpack-hot-middleware");
const webpack_config_1 = require("./config/webpack.config");
const app_config_1 = require("./config/app.config");
const app = new Koa();
const router = new KoaRouter();
const compile = webpack(webpack_config_1.default);
app
    .use(proxy({
    host: `http://localhost:${app_config_1.proServerConfig.port}`,
    match: /^(?!\/static\/index\.js|\/static\/vendor\.js|\/\_\_webpack\_hmr)/
}))
    .use(webpackDevMiddleware(compile, {
    noInfo: true,
    publicPath: webpack_config_1.default.output.publicPath,
    stats: {
        colors: true // 用颜色标识
    }
}))
    .use(webpackHotMiddleware(compile))
    .listen(app_config_1.devServerConfig.port);
console.log(`devServer is running in ${app_config_1.devServerConfig.port}`);
console.log(`devServer's NODE_ENV is ${process.env.NODE_ENV}`);
