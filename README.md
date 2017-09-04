

### cd vue-starter

### tsc -w 

### npm start 

### npm run hot 

### Change in @types

> @types/vuex/types/vue.d.ts line 10、16

`$store: Store<App.State>`

> @types/vuex/types/index.d.ts line 13 

`readonly getters: App.Getter;`

> @types/vuex/types/indx.d.ts line 40、41

` // (type: string, payload?: any, options?: DispatchOptions): Promise<any>;`

`<P extends keyof App.actionDictionary>(type: P, payload: App.actionDictionary[ P ], options?: CommitOptions): void;`

> @types/vuex/types/indx.d.ts line 46、47

`// (type: string, payload?: any, options?: CommitOptions): void;`

`<P extends keyof App.mutationDictionary>(type: P, payload: App.mutationDictionary[ P ], options?: CommitOptions): void;`

> look index.d.ts 










