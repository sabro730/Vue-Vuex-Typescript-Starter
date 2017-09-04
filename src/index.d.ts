declare module "*.vue" {
  import * as Vue from 'vue'
  export default Vue
}

declare var System: {
  import: ( filename: string ) => Promise< any >
}


/** vuex mutation - payload */
declare interface mutationDictionary {

  cusIncrement: {
    count: number
  }

}

declare interface actionDictionary {

  asyncIncrement: mutationDictionary['cusIncrement']

}

declare namespace App {

  /**vuex state */
  export interface State {

    count: number

  }

  /**vuex getter */
  export interface Getter {

    dubbleCount: ( s: State ) => void

  }
  
  
  
}



