(function () {
  if (!$("#promotedDevices").length) return;

  var promotedDevices = new Vue({
    el: "#promotedDevices",
    data: {
      swiperOptions: mySwiperOptions,
      devicesData: null,
      currentTabInd: 0,
    },
    methods: {
      getData: function () {
        var self = this;

        axios.get("http://www.pelephone.co.il/digitalsite/handlers/service.ashx?action=GetHompage").then(function (response) {
          console.log(response.data);

          self.devicesData = Vue.observable(response.data.promotedDevices);
        });
      },
      selectTabInd: function (index) {
        this.currentTabInd = index;
      },
    },
    created: function () {
      this.getData();
    },
  });
})();
