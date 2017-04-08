namespace init {


  export class InitComponent implements ng.IComponentOptions {

    public controller: any;
    public templateUrl: string;

    constructor() {
      this.controller = InitComponent;
      this.templateUrl = './init.html';
    }

  }

}
