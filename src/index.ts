import "angular";

import {IonicStarRatingController} from "./star-rating.controller";
import {StarRatingComponent} from "./star-rating.component";

import styles = require('css-star-rating/dist/scss/star-rating.scss');
import icons = require('css-star-rating/dist/images/star-rating.icons.svg');
import {StarRatingComponent} from "../examples/ionic1/temp/lib/angular1-star-rating/src/star-rating.component";
const styles = styles;
const icons = icons;

export {
      starRatingSizes
    , starRatingColors
    , starRatingSpeed
    , starRatingPosition
    , starRatingStarTypes
    , starRatingStarSpace
    , IStarRatingCompBindings
    , IStarRatingOnClickEvent
    , IStarRatingOnUpdateEvent
} from "angular1-star-rating/src/star-rating.structs"
export {IonicStarRatingController} from "./star-rating.controller";
import {StarRatingComponent} from "angular1-star-rating/src/star-rating.component";

export const angularStars = angular
    .module('star-rating', [])
    .controller('starRatingCtrl', IonicStarRatingController)
    .component('starRatingComp', new StarRatingComponent())
    .name;
