import * as Vue from 'vue';
import Component from 'vue-class-component';

@Component({

})
export default class HomePage extends Vue {

  get count( ) {
    return this.$store.state.count;
  }

  add( ) {
    this.$store.commit('increment');
  }

}