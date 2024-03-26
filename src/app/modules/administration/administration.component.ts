import { Component } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent {

  isExpanded = true

  toggleMenu() {
    this.isExpanded = !this.isExpanded
  }
}
