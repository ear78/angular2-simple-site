import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.template.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
    branding = "https://angular.io/assets/images/logos/angular/angular.png";
}
