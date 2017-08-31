declare module "*.vue" {
  import * as Vue from 'vue'
  export default Vue
}

declare var System: {
  import: ( filename: string ) => Promise< any >
}