
export const increment = ( state: App.State ) => { state.count++; };

export const cusIncrement =
( state: App.State, playload: mutationDictionary['cusIncrement']) => { state.count = state.count + playload.count; };