import {
    StarRatingController, IStarRatingCompBindings, starRatingColors,
    IStarRatingOnClickEvent, IStarRatingOnUpdateEvent
} from "./index";
import IRootScopeService = angular.IRootScopeService;
import IComponentController = angular.IComponentController;
import createSpy = jasmine.createSpy;

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

    it('should contain proper default values if no bindings are set', () => {
        starRatingCtrl = getStarRatingCtrl();
        //bindings
        //<
        expect(starRatingCtrl.id).toBe(undefined);
        expect(starRatingCtrl.labelText).toBe(undefined);
        expect(starRatingCtrl.staticColor).toBe(undefined);
        expect(starRatingCtrl.labelPosition).toBe(undefined);
        expect(starRatingCtrl.labelHidden).toBe(false);
        expect(starRatingCtrl.showHoverStars).toBe(false);
        expect(starRatingCtrl.speed).toBe(undefined);
        expect(starRatingCtrl.size).toBe(undefined);
        expect(starRatingCtrl.starType).toBe(undefined);
        expect(starRatingCtrl.space).toBe(undefined);
        expect(starRatingCtrl.readOnly).toBe(undefined);
        expect(starRatingCtrl.disabled).toBe(undefined);
        expect(starRatingCtrl.rating).toBe(undefined);
        expect(starRatingCtrl.numOfStars).toBe(StarRatingController.DefaultNumOfStars);
        expect(starRatingCtrl.getColor).toBe(undefined);
        //expect(typeof starRatingCtrl.getHalfStarVisible).toBe("function");
        //&
        expect(typeof starRatingCtrl.onRatingChange).toBe("undefined");
        expect(typeof starRatingCtrl.onClick).toBe("undefined");

        //ctrl only
        expect(starRatingCtrl.classEmpty).toBe(StarRatingController.DefaultClassEmpty);
        expect(starRatingCtrl.classFilled).toBe(StarRatingController.DefaultClassFilled);
        expect(starRatingCtrl.pathEmpty).toBe(StarRatingController.DefaultSvgPathEmpty);
        expect(starRatingCtrl.pathFilled).toBe(StarRatingController.DefaultSvgPathFilled);
        starRatingCtrl.numOfStars = 5;
        expect(typeof starRatingCtrl.stars).toBe("object");
        expect(starRatingCtrl.stars.length).toBe(StarRatingController.DefaultNumOfStars);
        expect(starRatingCtrl.stars[0]).toBe(1);
        expect(starRatingCtrl.color).toBe('default');

    });


    it("should fire _getStarsArray function when create controller", () => {
        //create spys
        spyOn(StarRatingController, "_getStarsArray");
        starRatingCtrl = getStarRatingCtrl();

        //spys fired
        expect(StarRatingController._getStarsArray).toHaveBeenCalled();
    });

    it("should fire _getColor function when create controller", () => {
        //create spys
        spyOn(StarRatingController, "_getColor");
        starRatingCtrl = getStarRatingCtrl();

        //spys fired
        expect(StarRatingController._getColor).toHaveBeenCalled();

        //custom callback undefined
        expect(starRatingCtrl.getColor).toBe(undefined);
    });

    it("should fire setColor function when numOfStars changed", () => {
        starRatingCtrl = getStarRatingCtrl();
        //create spys
        spyOn(starRatingCtrl, "setColor");
        starRatingCtrl.numOfStars = 4;

        //spys fired
        expect(starRatingCtrl.setColor).toHaveBeenCalled();
    });

    it("should calculate halfStarVisible correct when numOfStars changed", () => {
        starRatingCtrl = getStarRatingCtrl();
        //create spys
        spyOn(starRatingCtrl, "setColor");
        starRatingCtrl.numOfStars = 4;

        //spys fired
        expect(starRatingCtrl.setColor).toHaveBeenCalled();
    });


    it('should set custom bindings properly', () => {
        let bindings = <IStarRatingCompBindings>{
            //<
            id: 'custom-id'
            , labelText: 'custom-text'
            , staticColor: 'positive'
            , labelPosition: 'right'
            , labelHidden: false
            , showHoverStars: true
            , speed: 'immediately'
            , size: 'small'
            , starType: 'icon'
            , space: 'around'
            , readOnly: true
            , disabled: true
            , rating: 3
            , numOfStars: 8
            , getColor: function (rating, numOfStars, staticColor) {
                return "default";
            }
            , getHalfStarVisible: function (rating) {
                return true;
            }
            //&
            , onClick: function ($event:IStarRatingOnUpdateEvent) {
                return $event;
            }
            , onRatingChange: function ($event:IStarRatingOnUpdateEvent) {
                return $event;
            }
        };

        starRatingCtrl = getStarRatingCtrl(bindings);

        expect(starRatingCtrl.id).toBe(bindings.id);
        expect(starRatingCtrl.labelText).toBe(bindings.labelText);
        expect(starRatingCtrl.staticColor).toBe(bindings.staticColor);
        expect(starRatingCtrl.labelPosition).toBe(bindings.labelPosition);
        expect(starRatingCtrl.labelHidden).toBe(bindings.labelHidden);
        expect(starRatingCtrl.showHoverStars).toBe(bindings.showHoverStars);
        expect(starRatingCtrl.speed).toBe(bindings.speed);
        expect(starRatingCtrl.size).toBe(bindings.size);
        expect(starRatingCtrl.starType).toBe(bindings.starType);
        expect(starRatingCtrl.space).toBe(bindings.space);
        expect(starRatingCtrl.readOnly).toBe(bindings.readOnly);
        expect(starRatingCtrl.disabled).toBe(bindings.disabled);
        expect(starRatingCtrl.rating).toBe(bindings.rating);
        expect(starRatingCtrl.getColor(1, 5, 'default')).toBe(bindings.getColor(1, 5, 'default'));
        expect(starRatingCtrl.getHalfStarVisible(1)).toBe(bindings.getHalfStarVisible(1));
        expect(starRatingCtrl.onClick({$event: {rating: 1}}).rating).toBe(bindings.onClick({$event: {rating: 1}}).rating);
        expect(starRatingCtrl.onRatingChange({$event: {rating: 2}}).rating).toBe(bindings.onRatingChange({$event: {rating: 2}}).rating);
    });

    it("should return proper values when firing _getColor function", () => {

        let testValues = {};
        testValues[negativeValue] = defaultColor;
        testValues[defaultValue] = defaultColor;
        testValues[lowRating] = negativeColor;
        testValues[okRating] = okColor;
        testValues[highRating] = positiveColor;

        let numOfStars = 5;
        starRatingCtrl = getStarRatingCtrl({});

        //test with required properties
        for (let rating in testValues) {
            rating;
            expect(StarRatingController._getColor(parseInt(rating), numOfStars)).toBe(testValues[rating]);
        }

        //test with optional staticColor property
        numOfStars = 20;
        for (let rating in testValues) {

            if (rating.toString() !==  negativeValue.toString() && rating.toString() !== defaultValue.toString()) {
                expect(StarRatingController._getColor(parseInt(rating), numOfStars)).toBe(negativeColor);
            }
            else {
                expect(StarRatingController._getColor(parseInt(rating), numOfStars)).toBe(defaultColor);
            }
        }

        //test with optional staticColor property
        let staticColor = negativeColor;
        starRatingCtrl.staticColor = staticColor;
        starRatingCtrl.numOfStars = StarRatingController.DefaultNumOfStars;
        for (let rating in testValues) {
            starRatingCtrl.rating = rating;
            expect(StarRatingController._getColor(starRatingCtrl.rating, starRatingCtrl.numOfStars, starRatingCtrl.staticColor)).toBe(staticColor);
        }

    });

    it("should return proper values when firing _getHalfStarVisible function", () => {

        let testValues = {};
        testValues[negativeValue + 0.5] = false;
        testValues[defaultValue + 0.5] = true;
        testValues[lowRating + 0.5] = true;
        testValues[okRating + 0.5] = true;

        testValues[lowRating + 0.1] = true;
        testValues[lowRating + 0.2] = true;
        testValues[lowRating + 0.3] = true;
        testValues[lowRating + 0.4] = true;

        testValues[lowRating + 0.6] = true;
        testValues[lowRating + 0.7] = true;
        testValues[lowRating + 0.8] = true;
        testValues[lowRating + 0.9] = true;

        testValues[negativeValue + 0.1] = false;
        testValues[negativeValue + 0.2] = false;
        testValues[negativeValue + 0.3] = false;
        testValues[negativeValue + 0.4] = false;

        testValues[negativeValue + 0.6] = false;
        testValues[negativeValue + 0.7] = false;
        testValues[negativeValue + 0.8] = false;
        testValues[negativeValue + 0.9] = false;

        testValues[negativeValue] = false;
        testValues[defaultValue] = false;
        testValues[lowRating] = false;
        testValues[okRating] = false;
        testValues[highRating] = false;

        starRatingCtrl = getStarRatingCtrl({});
        //test default calculation
        for (let rating in testValues) {
            starRatingCtrl.rating = rating;
            expect(StarRatingController._getHalfStarVisible(starRatingCtrl.rating)).toBe(testValues[rating]);
        }

    });

    it("should return proper values when firing _getStarsArray function", () => {

        let lowNumOfStars = 1;
        let defaultNumOfStars = 6;
        let highNumOfStars = 15;

        let testValues = {};
        testValues[negativeValue] = okColor;
        testValues[defaultValue] = okColor;
        testValues[lowNumOfStars] = positiveColor;
        testValues[defaultNumOfStars] = okColor;
        testValues[highNumOfStars] = negativeColor;

        let bindings = <IStarRatingCompBindings>{
            rating: 3,
        };
        starRatingCtrl = getStarRatingCtrl(bindings);


        for (let numOfStars in testValues) {
            //update numOfStars
            starRatingCtrl.numOfStars = parseInt(numOfStars);

            //stars array updated
            expect(typeof starRatingCtrl.stars).toBe("object");
            expect(starRatingCtrl.stars.length).toBe(parseInt(starRatingCtrl.numOfStars));
            expect(starRatingCtrl.stars[0]).toBe(1);

            //numOfStars updated
            let expectedNumOfStars = (numOfStars && parseInt(numOfStars) > 0) ? parseInt(numOfStars) : StarRatingController.DefaultNumOfStars;
            expect(starRatingCtrl.numOfStars).toBe(expectedNumOfStars);

            //color updated
            expect(starRatingCtrl.color).toBe(testValues[numOfStars]);

            }
    });


    it("should fire onRatingChange when set", () => {
        let bindings = <IStarRatingCompBindings>{
            onRatingChange: function ($event:IStarRatingOnUpdateEvent) {
                return $event;
            }
        };

        starRatingCtrl = getStarRatingCtrl(bindings);
        //create spys
        spyOn(starRatingCtrl, "onRatingChange");
        starRatingCtrl.rating = 4;

        //spys fired
        expect(starRatingCtrl.onRatingChange).toHaveBeenCalled();

    });



    it("should return proper values when update rating", () => {

        let testValues = {};
        testValues[negativeValue] = defaultColor;
        testValues[defaultValue] = defaultColor;
        testValues[lowRating] = negativeColor;
        testValues[okRating] = okColor;
        testValues[highRating] = positiveColor;
        let newRatingValue;

        let bindings: IStarRatingCompBindings = {
            rating :0
        };
        starRatingCtrl = getStarRatingCtrl(bindings);

        for (let rating in testValues) {
            starRatingCtrl.rating = rating;

            if (rating.toString() == negativeValue.toString()) {

                expect(starRatingCtrl.rating.toString()).toBe(defaultValue.toString());
                expect(starRatingCtrl.color).toBe(defaultColor);

            }
            else {
                expect(starRatingCtrl.rating.toString()).toBe(rating.toString());
                expect(starRatingCtrl.color).toBe(testValues[rating]);
            }
        }

    });

    it("should return proper values when firing onStarClicked function", () => {

        let lowRating = 1;
        let okRating = 3;
        let highRating = 5;

        let testValues = {};
        testValues[negativeValue] = defaultColor;
        testValues[defaultValue] = defaultColor;
        testValues[lowRating] = negativeColor;
        testValues[okRating] = okColor;
        testValues[highRating] = positiveColor;

        starRatingCtrl = getStarRatingCtrl();

        //default values
        for (let rating in testValues) {

            starRatingCtrl.onStarClicked(rating);


            if (rating.toString() == negativeValue.toString()) {
                expect(starRatingCtrl.rating).toBe(defaultValue);
                expect(starRatingCtrl.color).toBe(defaultColor);
            } else {
                expect(starRatingCtrl.rating).toBe(rating);
                expect(starRatingCtrl.color).toBe(testValues[rating]);
            }

        }

    });

    //@TODO spy on onClick with readOnly, with disabled
    //@TODO custom onClick function

    it("should return proper values when firing getColor function", () => {
        let testValues = {};
        testValues[lowRating] = okColor;
        testValues[okRating] = positiveColor;
        testValues[highRating] = negativeColor;

        let bindings: IStarRatingCompBindings = {
            getColor: customGetColor
        };
        starRatingCtrl = getStarRatingCtrl(bindings);

        //default return values
        let count = 0;
        for (let rating in testValues) {
            starRatingCtrl.rating = rating;
            expect(starRatingCtrl.color).toBe(testValues[rating]);
        }

        //return values when staticColor is given
        starRatingCtrl.staticColor = positiveColor;
        for (let rating in testValues) {
            starRatingCtrl.rating = rating;
            expect(starRatingCtrl.color).toBe(positiveColor);
        }

        /////////////////////////

        function customGetColor(rating: number, numOfStars: number, staticColor?: starRatingColors) {
            rating = rating || 0;

            //if a fix color is set use this one
            if (staticColor) {
                return staticColor;
            }

            //calculate size of smallest fraction
            let fractionSize = numOfStars / 3;

            //apply color by fraction
            let color: starRatingColors = defaultColor;
            if (rating > 0) {
                color = okColor;
            }
            if (rating > fractionSize) {
                color = positiveColor;
            }
            if (rating > fractionSize * 2) {
                color = negativeColor;
            }

            return color;

        }

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