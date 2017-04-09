import IRootScopeService = angular.IRootScopeService;
import IComponentController = angular.IComponentController;
import createSpy = jasmine.createSpy;
import {
    starRatingColors,
    IStarRatingCompBindings
} from "../examples/ionic1/temp/lib/angular1-star-rating/src/star-rating.structs";

describe('Star rating controller', () => {

    let $componentController;
    let starRatingCtrl;
    let scope;
    let element;

    let negativeValue: number = -1;
    let defaultValue: number = 0;

    let defaultColor: starRatingColors = "default";
    let negativeColor: starRatingColors = "negative";
    let okColor: starRatingColors = "ok";
    let positiveColor: starRatingColors = "positive";

    let lowRating = 1;
    let okRating = 3;
    let highRating = 5;

    beforeEach(angular.mock.module('star-rating'));

    beforeEach(inject(($rootScope, $element, _$componentController_) => {
        scope = $rootScope.$new();
        element = $element;
        $componentController = _$componentController_;
    }));

    //////////////////////////////////////////////////////////////////////////////


    /**
     * getStarRatingCtrl
     *
     * A factory for StarRatingController
     *
     * @param bindingsProperties
     * @returns {*}
     */
    function getStarRatingCtrl(bindingsProperties?: IStarRatingCompBindings): any {
        bindingsProperties = angular.copy(bindingsProperties) || <IStarRatingCompBindings>{};
        element = angular.element('<div id="{{$ctrl.id}}" class="rating" ng-class="$ctrl.getComponentClassNames()"><div ng-show="$ctrl.labelText" class="label-value">{{$ctrl.labelText}}</div><div class="star-container"><div class="star" id="{{star}}" ng-repeat="star in $ctrl.stars track by $index" ng-click="$ctrl.onStarClicked(star)"><i class="star-empty {{$ctrl.classEmpty}}" ng-if="!$ctrl.svgVisible()"></i><i class="star-half {{$ctrl.classHalf}}" ng-if="!$ctrl.svgVisible()"></i><i class="star-filled {{$ctrl.classFilled}}" ng-if="!$ctrl.svgVisible()"></i><svg class="star-empty {{$ctrl.classEmpty}}" ng-if="$ctrl.svgVisible()"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{$ctrl.pathEmpty}}"></use></svg><svg class="star-half {{$ctrl.classHalf}}" ng-if="$ctrl.svgVisible()"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{$ctrl.pathHalf}}"></use></svg><svg class="star-filled {{$ctrl.classFilled}}" ng-if="$ctrl.svgVisible()"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{$ctrl.pathFilled}}"></use></svg></div></div></div>');

        return $componentController('starRatingComp', {$element:element}, bindingsProperties);
    }

});