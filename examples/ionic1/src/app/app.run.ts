namespace app {

  import IRootScopeService = angular.IRootScopeService;

  export class RunFunction {

    static Factory($ionicPlatform: ionic.platform.IonicPlatformService) {
      return new RunFunction($ionicPlatform);
    }

    constructor(protected $ionicPlatform: ionic.platform.IonicPlatformService) {
      this.init()
    }

    private init(): void {
      this.$ionicPlatform.ready(() => {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleLightContent();
        }
      });

    }

  }

}
