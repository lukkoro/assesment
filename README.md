# Assesment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.4.

Was installed using Node@10.21.0 and npm@6.14.4

To install packages, run `npm install`.

## What was done

* Two dependency injection services
  1. pokedexService - consumes [pokeapi.co](https://pokeapi.co) to load data
  2. searchService - query behavior subject of type string with a setter and getter
* Lazy loading of modules - modules are loaded as routes with the given module are hit
for better performance
* Responsiveness
* Project organization
  - All shared modules from angular and material loaded in one shared module imported by
  other modules
  - Only utility classes loaded from bootstrap

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
