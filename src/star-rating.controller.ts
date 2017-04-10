import {StarRatingController} from "angular1-star-rating/src/star-rating.controller";

export class IonicStarRatingController extends StarRatingController {

    gestureEventTypes = 'touch drag transform dragend';
    gestureCallback = (e) => {

        //prevent event propagation
        e.gesture.srcEvent.preventDefault();
        e.gesture.preventDefault();

        //get star element and rating
        let fireDigest:boolean = false;
        let hoverStar = this.getClosest(e.gesture.target, '.star');
        let hoverRating: number;

        if (hoverStar) {
            hoverRating = parseInt(angular.element(hoverStar)[0].id);
        }

        //handle touch events
        switch (e.type) {
            case 'touch':
                if(hoverRating != undefined) {
                    this.onStarHover(hoverRating);
                    fireDigest = true;
                }
                break;
            case 'drag':
                if(hoverRating != undefined) {
                    this.onStarHover(hoverRating);
                    fireDigest = true;
                }
                break;
            case 'dragend':
                this.onStarHover(0);
                if(hoverRating != undefined) {
                    this.onStarClicked(hoverRating);
                }
                fireDigest = true;
                break;
        }

        //trigger change detection if needed
        if(fireDigest) { this.$scope.$digest(); }

    };

    gesture:any;

    static $inject: string[] = ['$scope', '$element'];
    constructor(protected $scope:ng.IScope, protected $element: ng.IRootElementService) {
        super();
    }

    $onInit() {
        this.subscribeToGestures();
    }

    $onDestroy() {
        this.unsubscribeToGestures();
    }

    protected unsubscribeToGestures() {
        ionic['offGesture'](this.gesture,this.gestureEventTypes, this.gestureCallback);
    }

    protected subscribeToGestures() {
        this.gesture = ionic['onGesture'](this.gestureEventTypes, this.gestureCallback, this.$element[0]);
    }

}

