namespace common {

  export class CommonComponent implements ng.IComponentOptions {

    public controller: any;
    public templateUrl: string;

    constructor() {
      this.controller = CommonController;
      this.templateUrl = './common.html';
    }

  }

}
