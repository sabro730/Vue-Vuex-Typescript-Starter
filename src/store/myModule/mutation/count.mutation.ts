
// state、getter，接收的第一个参数是模块的局部状态对象。
type curState = App.State['myModule'];

export const increment = ( state: curState ) => { state.count++; };

export const cusIncrement =
  ( state: curState, playload: App.mutationDictionary['cusIncrement']) => {
    state.count = state.count + playload.count; };