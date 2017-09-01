import * as Vue from 'vue';
import { mapState } from 'vuex';
import { XButton } from 'vux';
import Component from 'vue-class-component';


@Component({
  components: {
    XButton
  }
})
export default class HomePage extends Vue {

  get count( ) {
    return this.$store.state.count;
  }

  add( ) {
    this.$store.commit('increment');
  }

}