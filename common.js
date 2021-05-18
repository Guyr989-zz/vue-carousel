//init swiper
Vue.component("swiper", {
  data: function () {
    return {
      swiper: {},
    };
  },
  props: ["options"],
  template: "<div><slot></slot></div>",
  mounted: function () {
    var self = this;
    var options = this.$props.options;
    if (typeof options == "function") options = options();

    this.swiper = new Swiper(options);
    if (options.onVueMounted) {
      options.onVueMounted(this.swiper);
    }
  },
  beforeDestroy: function () {
    this.swiper.destroy();
  },
});
