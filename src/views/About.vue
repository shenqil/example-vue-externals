<template>
  <div>count = {{ count }}</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
      timeHandle: '',
    };
  },
  computed: {
    ...mapGetters({
      count: 'getCount',
    }),
  },
  created() {
    this.timeHandle = setInterval(() => {
      this.changeCount();
    }, 1000);
  },
  methods: {
    ...mapMutations(['changeCount']),
  },
  beforeDestroy() {
    clearInterval(this.timeHandle);
  },
};
</script>

<style>
</style>
