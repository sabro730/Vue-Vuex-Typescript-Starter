declare module "*.vue" {
  import * as Vue from 'vue'
  export default Vue
}

declare var System: {
  import: ( filename: string ) => Promise< any >
}

declare namespace App {

  /**vuex root state */
  export interface State {
    myModule: modules['myModule']['state'];
  }

  /**vuex getter */
  export interface Getter {

    dubbleCount: ( s: State ) => void

  }

  /** vuex mutation - payload */
  export interface mutationDictionary {
    cusIncrement: {
      count: number
    }
  }

  /** vuex action - payload */
  export interface actionDictionary {
    asyncIncrement: mutationDictionary['cusIncrement']
  }
  
}




declare interface modules {
  myModule: {
    state: {
      count: number
    }
  }
}



