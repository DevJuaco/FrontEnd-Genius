import { Component } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent {

  isExpanded = true
  isExpandedSubmenu = false

  Menus = [
    {title: "Regresar al POS"},
    {title: "Reportes", icon: 'fa-regular fa-file-lines'},
    {title: "Empleados", spacing: true, icon: 'fa-regular fa-image'},
    {
      title: "Productos",
      icon: 'fa-regular fa-folder-open',
      submenu: true,
      submenuItems: [
        {title: "Submenu 1"},
        {title: "Submenu 2"},
        {title: "Submenu 3"}
      ],
    },
    {title: "Analytics", icon: 'fa-solid fa-chart-simple'},
    {title: "Inventario", icon: 'fa-solid fa-inbox'},
    {title: "Información fiscal", spacing: true, icon: 'fa-regular fa-user'},
    {title: "Configuraciones", icon: 'fa-solid fa-gear'},
    {title: "Cerrar sesión", icon: 'fa-solid fa-right-from-bracket'}
  ]

  toggleMenu() {
    this.isExpanded = !this.isExpanded
  }

  toggleSubmenu () {
    this.isExpandedSubmenu = !this.isExpandedSubmenu
  }
}
