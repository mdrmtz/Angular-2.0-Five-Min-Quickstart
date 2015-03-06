import {Component, Template, bootstrap} from 'angular2/angular2';


// Annotation section
/*A component annotation provides metadata about the component. An annotation can be identified by its at-sign (@).

The @Component annotation defines the HTML tag for the component by specifying the component's CSS selector.
*/
@Component({
  selector: 'my-app'
})
/*
The @Template annotation defines the HTML that represents the component. This component uses an inline template, but you can also have an external template. To use an external template, specify a url property and give it the path to the HTML file.
*/

@Template({
  inline: '<h1>Hello {{ name }}</h1>'
})
// Component controller
/*The template and the component controller

The component controller is the backing of the component's template. A component controller uses ES6 class syntax.
*/
class MyAppComponent {
  constructor() {
    this.name = 'Alice';
  }
}
/*Templates read from their component controllers. Templates have access to any properties or functions placed on the component controller.

The template above binds to a name property through the double-mustache syntax ({{ ... }}). The body of the constructor assigns "Alice" to the name property. When the template renders, "Hello Alice" appears instead of "Hello {{ name }}".
*/

/*
The bootstrap() function takes a component as a parameter, enabling the component (as well as any child components it contains) to render.
*/
bootstrap(MyAppComponent);