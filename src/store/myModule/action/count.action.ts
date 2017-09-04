import * as Vuex from 'vuex';


type vuexCtx = Vuex.ActionContext< App.State['myModule'], App.State >;

export const asyncIncrement = (
    ctx: vuexCtx,
    payload: App.actionDictionary['asyncIncrement']
  ) => {
    setTimeout(( ) => {
        ctx.commit( 'cusIncrement', payload );
    }, 2000 );
 };