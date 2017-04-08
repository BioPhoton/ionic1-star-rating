namespace init {

  export const init = angular
    .module('init', [])
    .controller('initController', InitController)
    .config(($stateProvider) => {

      $stateProvider
        .state('init', <ng.ui.IState> {
          url: "/init",
          controller: InitController,
          templateUrl: "app/components/init/init.html",
          controllerAs: "init",
        });
    })
    .name;

}
