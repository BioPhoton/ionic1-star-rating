import { StarRatingController } from "angular1-star-rating/src/star-rating.controller";
export declare class IonicStarRatingController extends StarRatingController {
    protected $scope: ng.IScope;
    protected $element: ng.IRootElementService;
    gestureEventTypes: string;
    gestureCallback: (e: any) => void;
    gesture: any;
    static $inject: string[];
    constructor($scope: ng.IScope, $element: ng.IRootElementService);
    $onInit(): void;
    $onDestroy(): void;
    protected unsubscribeToGestures(): void;
    protected subscribeToGestures(): void;
}
