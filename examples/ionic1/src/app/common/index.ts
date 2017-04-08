namespace common {

  export const common = angular
    .module('common', [])
    .controller('commonController', CommonController)

    .config(($stateProvider) => {

      $stateProvider
        .state("common", <ng.ui.IState> {
          url: "/common",
          abstract: true,
          controller: CommonController,
          templateUrl: "app/common/common.html",
          controllerAs: "common",
        });

    })
    .name;

}
