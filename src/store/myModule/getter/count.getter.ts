
// getter，接收的第一个参数是模块的局部状态对象。
type curState = App.State['myModule'];

export const dubbleCount = ({ count }: curState ) => count * count ;