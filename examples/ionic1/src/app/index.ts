/// <reference path="../../typings/index.d.ts" />

namespace app {

//placeholder for templatecacheangular.module("commons.caching.templates", []);

  angular.module('app', [
      'star-rating'
    , 'ionic'
    , 'common'
    , 'components'
    ])
    .config(AppRoutingConfigFunction.Factory)
    .run(RunFunction.Factory);

}
