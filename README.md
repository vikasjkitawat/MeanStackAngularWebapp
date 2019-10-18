# MeanStackAngularWebapp
Mean Stack Angular Webapp

# Webapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.10.

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




## Installing Angular CLI
npm install -g @angular/cli

## Creating a WebApp
ng new webapp

## Starting application
npm start

## package.json
    - Dependency => Required on the server we host the application
    - DevDependency => Required on the Dev machine

zone.js => Agent tells the angular when the UI needs to be refreshed
rxjs => Reactive component for JS (Data Transfer between components)
~ => Latest Stable versions (Remove all special characters from file)

To generate a component using CLI
Syntax : ng generate component <Component base folder>/<Component name>
e.g. to create eshop :
ng generate component components/eshop



## ngZone

## Monkey Patching

```javascript
//http://collabedit.com/9xr4d

var fn = document.body.addEventListener;

document.body.addEventListener = function(eventName,eventCb) {
  
    function monkeyPatched()
    {
        console.log("Hacked");
        eventCb();
    }
  
    fn(eventName,monkeyPatched);
};

document.body.addEventListener(
    "click", 
    function() { console.log("Clicked") }
    );

```


Comp OnPush  with a hierarchy os A > B > C
Making B as OnPush makes C as OnPush as well

Comp A  -> OnPush

Comp B -> OnPush

Comp C -> 


## Types of Directives
![Types of Directives](NotesImages/TypesOfDirectives.jpg "Types of Directives")

### 1. Structural
Structural Directives are directives which change the structure of the DOM by adding or removing elements.

There are three built in structural directives, *NgIf, *NgFor and *NgSwitch.

### 2. Attribute

### 3. Component


## Creating a Service
1. Create a data.service.ts
2. Mark as Injectable
3. Add to app.module.ts Provider (By default Singleton Per module is created) 


## Async 
1. Callbacks - Single use and destroy
2. Promises - Single use and destroy
3. RXJS observables - Multiple use 

## Creating a JSON Server in Node for REST API
1. Creating a mock server
```npm install -g json-server```
2. Start Json Server
```json-server --watch db.json --port 5000 -d 2000```
 -- port is 5000
 -- delay is 2000ms for respose 


 eshop.component.ts will use ```var promise = dataService.getProducts();``` 
 which will call data.service.ts and check if it is returning resolve or reject of type promise


## Routes
1. Define URLs
2. Maping URLs to Components
3. Router Engine
4. Change of Routes:
    A. User Interaction
    B. Programmatically
5. Loading Placeholder

## Build
### JIT Build
Used for creating build with map files and no servers are started
```npm run build``` 

### AOT Build
Used for creating build for Prod
```ng build --aot --prod```

Use Webserver for Chrome