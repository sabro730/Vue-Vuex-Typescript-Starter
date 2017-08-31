import * as KoaRouter from 'koa-router';
import * as homeCtrl from './home/index.ctrl';

export default ( router: KoaRouter ) => {

  router.get('/', homeCtrl.getHomePage );

};