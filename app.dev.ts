import * as Koa from 'koa';
import * as path from 'path';
import * as proxy from 'koa-proxy';
import * as webpack from 'webpack';
import * as KoaLog from 'koa-logs-full';
import * as KoaServer from 'koa-static2';
import * as KoaRouter from 'koa-router';
import * as webpackDevMiddleware from 'koa-webpack-dev-middleware';
import * as webpackHotMiddleware from 'koa-webpack-hot-middleware';

import webpackConfig from './config/webpack.config';
import { devServerConfig, proServerConfig } from './config/app.config';

const app = new Koa( );
const router = new KoaRouter( );
const compile = webpack( webpackConfig );

// router.get('/', ( ctx, next ) => {
//   ctx.body = { a: '11' };
// });

app
  .use( proxy({
    host: `http://localhost:${proServerConfig.port}`,
    match: /^(?!\/static\/)/
  }))

  .use( webpackDevMiddleware( compile, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
          colors: true  // 用颜色标识
      }
  }))
  .use( webpackHotMiddleware( compile ))

  .listen( devServerConfig.port );

console.log(`devServer is running in ${devServerConfig.port}`);
console.log(`devServer's NODE_ENV is ${process.env.NODE_ENV}`);
