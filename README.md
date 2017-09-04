

### cd vue-starter

### tsc -w 

### npm start 

### npm run hot 

### Change in @types

> @types/vuex/types/vue.d.ts line 16

`$store: Store<App.State>`

> @types/vuex/types/index.d.ts line 13 

`readonly getters: App.Getter;`

> @types/vuex/types/indx.d.ts line 40、41

` // (type: string, payload?: any, options?: DispatchOptions): Promise<any>;`

`<P extends keyof actionDictionary>(type: P, payload: actionDictionary[ P ], options?: CommitOptions): void;`

> @types/vuex/types/indx.d.ts line 46、47

`// (type: string, payload?: any, options?: CommitOptions): void;`

`<P extends keyof mutationDictionary>(type: P, payload: mutationDictionary[ P ], options?: CommitOptions): void;`








