namespace app {

  import IHttpProvider = angular.IHttpProvider;
  export class AppRoutingConfigFunction {

    static Factory($urlRouterProvider: ng.ui.IUrlRouterProvider) {
      return new AppRoutingConfigFunction($urlRouterProvider);
    }

    constructor(protected $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      this.init();
    }

    init() {
      //routing configurations
      this.$urlRouterProvider.otherwise('init');

    }

  }

}
