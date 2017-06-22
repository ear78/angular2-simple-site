import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.template.html'
})
export class JumbotronComponent {
    private jumboTitle:string;
    private jumboText:string;
    private jumboButtonText:string;
    private jumboButtonUrl:string;

    constructor(){
        this.jumboTitle = 'Hello World!';
        this.jumboText = 'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.';
        this.jumboButtonText = 'Learn More';
        this.jumboButtonUrl = '/about';
    }

}
