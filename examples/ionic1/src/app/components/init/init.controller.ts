
namespace init {

  export class InitController {

    //option sets
    colorOptions = ['default','negative', 'ok', 'positive'];
    labelPositionOptions= ['top','right', 'left', 'bottom'];
    starOptions= ['svg', 'icon', 'image'];
    speedOptions= ['immediately', 'noticeable', 'slow'];
    sizeOptions= ['small', 'medium', 'large'];
    spaceOptions= ['around', 'between', 'no'];

    //component input properties (> bindings)
    id: string;
    //pathEmpty: string;
    //pathFilled:string;
    numOfStars:number = 5;
    rating: number = 3.5;
    labelText: number = this.rating;
    labelHidden:boolean = false;
    color;
    speedstring;
    size:string;
    space: boolean = false;
    readOnly: boolean = false;
    disabled: boolean = false;
    showHalfStars:boolean = false;
    showHoverStars:boolean = true;
    //component input functions (> bindings)
    getColor;
    useCustomCetColor:boolean = false;
    getHalfStarVisible;
    useCustomGetHalfStarVisible:boolean = false;

    constructor() {

    }

    //component output (& bindings)
    onHover($event): void {
      console.log('single onHover rating: ',$event.hoverRating);
    }

    onClick($event): void {
      console.log('single onClick rating: ',$event.rating);
    }

    onRatingChange($event): void {
      console.log('single onRatingChange rating: ',$event.rating);
      this.rating = $event.rating;
    }

    updateGetColorBinding() {
      if(this.useCustomCetColor) {
        this.getColor = this._getColor;
      }
      else {
        this.getColor = undefined;
      }
    }

    updateGetHalfStarVisibleBinding() {
      if(this.useCustomGetHalfStarVisible) {
        this.getHalfStarVisible = this._getHalfStarVisible;
      }
      else {
        this.getHalfStarVisible = undefined;
      }
    }

    _getColor(rating :number|string, numOfStars:number, staticColor:string):string {
      console.log('single getColor rating: ',rating, 'numOfStars: ', numOfStars, 'fixColor: ', staticColor);
      let colors = ['default', 'negative', 'ok', 'positive'];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    _getHalfStarVisible(rating:number):boolean {
      console.log('getHalfStarVisible rating: ',rating, rating%1);
      return (rating<3);
    };



  }

}
