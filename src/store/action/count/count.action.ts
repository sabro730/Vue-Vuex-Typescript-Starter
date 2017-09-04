import * as Vuex from 'vuex';

type vuexCtx = Vuex.ActionContext<App.State, any>;

export const asyncIncrement = (
    ctx: vuexCtx,
    payload: actionDictionary['asyncIncrement']
  ) => {
    setTimeout(( ) => {
        ctx.commit( 'cusIncrement', payload );
    }, 2000 );
 };