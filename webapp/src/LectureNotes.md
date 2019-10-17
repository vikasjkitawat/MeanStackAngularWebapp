npm install -g @angular/cli
ng new webapp

To start the application
npm start

package.json
    - Dependency => Required on the server we host the application
    - DevDependency => Required on the Dev machine

zone.js => Agent tells the angular when the UI needs to be refreshed
rxjs => Reactive component for JS (Data Transfer between components)
~ => Latest Stable versions (Remove all special characters from file)

To generate a component using CLI
Syntax : ng generate component <Component base folder>/<Component name>
e.g. to create eshop :
ng generate component components/eshop