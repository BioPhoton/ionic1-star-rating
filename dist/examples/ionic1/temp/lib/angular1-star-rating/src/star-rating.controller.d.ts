import { IStarRatingCompBindings, starRatingSizes, starRatingSpeed, starRatingPosition, starRatingStarTypes, starRatingColors, starRatingStarSpace, IStarRatingOnClickEvent, IStarRatingOnUpdateEvent, IStarRatingOnHoverEvent } from "star-rating.structs";
export declare class StarRatingController implements ng.IComponentController, IStarRatingCompBindings {
    static DefaultClassEmpty: string;
    static DefaultClassHalf: string;
    static DefaultClassFilled: string;
    static DefaultNumOfStars: number;
    static DefaultShowHoverStars: boolean;
    static DefaultSize: starRatingSizes;
    static DefaultSpeed: starRatingSpeed;
    static DefaultLabelPosition: starRatingPosition;
    static DefaultLabelHidden: boolean;
    static DefaultStarType: starRatingStarTypes;
    static DefaultAssetsPath: string;
    static DefaultSvgPath: string;
    static DefaultSvgEmptySymbolId: string;
    static DefaultSvgHalfSymbolId: string;
    static DefaultSvgFilledSymbolId: string;
    static DefaultSvgPathEmpty: string;
    static DefaultSvgPathHalf: string;
    static DefaultSvgPathFilled: string;
    /**
     * _getStarsArray
     *
     * returns an array of increasing numbers starting at 1
     *
     * @param numOfStars
     * @returns {Array}
     */
    static _getStarsArray(numOfStars: number): Array<number>;
    /**
     * _getHalfStarVisible
     *
     * Returns true if there should be a half star visible, and false if not.
     *
     * @param rating
     * @returns {boolean}
     */
    static _getHalfStarVisible(rating: number): boolean;
    /**
     * _getColor
     *
     * The default function for color calculation
     * based on the current rating and the the number of stars possible.
     * If a staticColor is set the function will use it as return value.
     *
     * @param rating
     * @param numOfStars
     * @param staticColor
     * @returns {starRatingColors}
     */
    static _getColor(rating: number, numOfStars: number, staticColor?: starRatingColors): starRatingColors;
    protected _id: string;
    protected _labelText: string;
    protected _staticColor: starRatingColors;
    protected _labelPosition: starRatingPosition;
    protected _labelHidden: boolean;
    protected _speed: starRatingSpeed;
    protected _size: starRatingSizes;
    protected _starType: starRatingStarTypes;
    protected _space: starRatingStarSpace;
    protected _readOnly: boolean;
    protected _disabled: boolean;
    protected _showHalfStars: boolean;
    protected _showHoverStars: boolean;
    protected _rating: number;
    protected _numOfStars: number;
    getHalfStarVisible: (rating: number) => boolean;
    getColor: (rating: number, numOfStars: number, staticColor?: starRatingColors) => starRatingColors;
    onHover?: ($event: any) => IStarRatingOnHoverEvent;
    onClick?: ($event: any) => IStarRatingOnClickEvent;
    onRatingChange?: ($event: any) => IStarRatingOnUpdateEvent;
    classEmpty: string;
    classHalf: string;
    classFilled: string;
    pathEmpty: string;
    pathHalf: string;
    pathFilled: string;
    color: starRatingColors;
    stars: Array<number>;
    hoverRating: number;
    ratingAsInteger: number;
    halfStarVisible: boolean;
    numOfStars: number;
    rating: number;
    showHalfStars: boolean;
    showHoverStars: boolean;
    disabled: boolean;
    readOnly: boolean;
    space: starRatingStarSpace;
    starType: starRatingStarTypes;
    size: starRatingSizes;
    speed: starRatingSpeed;
    labelPosition: starRatingPosition;
    labelHidden: boolean;
    staticColor: starRatingColors;
    labelText: string;
    id: string;
    getComponentClassNames(): string;
    svgVisible(): boolean;
    setColor(): void;
    setHalfStarVisible(): void;
    constructor();
    /**
     * $onChanges
     *
     * The components $onChange hook
     *
     * @param changes
     */
    $onChanges(changes: any): void;
    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it emits the onClick event
     * handler with the actual rating value.
     *
     * @param rating
     */
    protected onStarClicked(rating: number): void;
    protected onStarHover(rating: number): void;
    protected interactionPossible(): boolean;
}
