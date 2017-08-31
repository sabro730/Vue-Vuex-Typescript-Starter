import * as fs from 'fs';
import * as Koa from 'koa';
import * as path from 'path';

const DEBUG = process.env.NODE_ENV === 'development' ? true : false;

export const getHomePage = async ( ctx: Koa.Context, next ) => {

  const homePage = fs.readFileSync(
    path.join( __dirname, DEBUG ?
      '../../../static/index.dev.html' :
      '../../../static/index.pro.html' ), 'utf8' );

  ctx.body = homePage;
};