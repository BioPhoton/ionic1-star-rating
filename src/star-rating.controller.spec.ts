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

    beforeEach(inject(($rootScope, _$componentController_) => {
        scope = $rootScope.$new();
        $componentController = _$componentController_;
    }));

    it('should expose a `starRatingComp` object', () => {
        starRatingCtrl = getStarRatingCtrl();

        expect(starRatingCtrl).toBeDefined();
        expect(typeof starRatingCtrl.onStarClicked).toBe('function');
    });


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
        return $componentController('starRatingComp', null, bindingsProperties);
    }

});