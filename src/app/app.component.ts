import './app.component.html';

class AppController {
  static $inject: string[] = [];
  title: String;
  
  constructor() {}

  $onInit() {
    this.title = 'Test';
  }
}

export const AppComponent: ng.IComponentOptions = {
  templateUrl: './dist/templates/app.component.html',
  controller: AppController
};
