import * as angular from 'angular';
import { AppComponent } from './app.component';

export const AppModule = angular
  .module('myApp', [])
  .component('app', AppComponent)
  .name;