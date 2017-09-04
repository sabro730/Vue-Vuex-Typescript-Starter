import * as Vue from 'vue';
import { mapState } from 'vuex';
import Component from 'vue-class-component';
import XButton from 'vux/src/components/x-button/index.vue';

@Component({
  components: {
    XButton
  }
})
export default class HomePage extends Vue {

  get count( ) {
    return this.$store.state.myModule.count;
  }

  get otherCount( ) {
    return this.$store.getters.dubbleCount;
  }

  add( ) {
    this.$store.commit('increment');
  }

  cusAdd( ) {
    this.$store.commit('cusIncrement', { count: 2 });
  }

  asyncAdd( ) {
    this.$store.dispatch('asyncIncrement', { count: 3 });
  }

}