import * as angular from 'angular';
import 'angular-mocks';

describe('AppComponent', () => {
  'use strict';

  const ComponentName: string = 'AppComponent';

  beforeEach(angular.mock.module('myApp'));

  describe('template', () => {
    let $compile: ng.ICompileService;
    let $rootScope: ng.IRootScopeService;
    let componentTemplate: any;

    beforeEach(() => {
      inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;

        let element = angular.element('<app title="Test"></app>');
        componentTemplate = $compile(element)($rootScope);
        $rootScope.$digest();
      });
    });

    it('should compile', () => {
      expect(componentTemplate).toBeDefined();
    });

    it('sets text to Test', () => {
      expect(componentTemplate.text()).toEqual('Test');
    })
  });

  describe('controler', () => {
    let $componentController: ng.IComponentControllerService;
    let vm: any;

    beforeEach(() => {
      inject(function (_$componentController_) {
        $componentController = _$componentController_;
      });
    });

    describe('initialization', () => {
      beforeEach(() => {
        vm = $componentController(ComponentName, null, { title: 'Test' });
      });

      it('sets title to Test', () => {
        expect(vm.title).toEqual('Test');
      });
    });
  });
});
