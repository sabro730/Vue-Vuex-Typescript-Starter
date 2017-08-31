/// <reference path="./index.d.ts" />
import * as Koa from 'koa';
import * as http from 'http';
import * as path from 'path';
import * as KoaServer from 'koa-static2';
import * as KoaRouter from 'koa-router';
import * as KoaLog from 'koa-logs-full';
import * as KoaBody from 'koa-bodyparser';

import { setCtrl } from './controller';
import { devServerConfig, proServerConfig } from './config/app.config';

const app = new Koa( );
const router = new KoaRouter( );

setCtrl( router );

app
  .use( KoaLog( app, {
      logdir: path.join( __dirname, 'logs')
  }))
  .use( KoaServer('static', __dirname + '/static'))
  .use( KoaBody( ))
  .use( router.routes( ))
  .use( router.allowedMethods( ))
  .listen( proServerConfig.port );

console.log(`app is running ${proServerConfig.port}`);
console.log(`app's NODE_ENV is ${process.env.NODE_ENV}`);