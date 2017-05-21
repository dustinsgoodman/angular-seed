class AppController {
  // static $inject: string[] = ['TodoService'];
  title: String;
  
  constructor() {}

  $onInit() {
    this.title = 'Test';
  }
}

export const AppComponent = {
  templateUrl: './app.component.html',
  controller: AppController
};
