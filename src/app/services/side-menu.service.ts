import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  isExpanded = signal<boolean>(true)
  
  toggleAside () {
    this.isExpanded.update(prevState => !prevState)
  }
}
