import {IonicStarRatingController} from "./star-rating.controller";
import starRatingTpl = require('./star-rating.tpl.html');

export class StarRatingComponent implements ng.IComponentOptions {

    public bindings: any;
    public controller: any;
    public templateUrl: string;
    public replace: boolean;

    constructor() {
        this.bindings = {
              id: '<'
            , rating: '<'
            , showHalfStars: '<'
            , showHoverStars: '<'
            , numOfStars: '<'
            , size: '<'
            , space: '<'
            , staticColor: '<'
            , disabled: '<'
            , starType: '<'
            , labelText: '<'
            , labelHidden: '<'
            , labelPosition: '<'
            , speed : '<'
            , readOnly: '<'
            , getColor: '<'
            , getHalfStarVisible: '<'

            , onHover: '&'
            , onClick: '&'
            , onRatingChange: '&'
        };
        this.replace = true;
        this.controller = IonicStarRatingController;
        this.templateUrl = <string>starRatingTpl;
    }

}