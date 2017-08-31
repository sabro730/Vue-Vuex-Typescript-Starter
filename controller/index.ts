import * as KoaRouter from 'koa-router';
import pageCtrl from './page';

export let setCtrl = ( router: KoaRouter ) => {

  pageCtrl( router );

};