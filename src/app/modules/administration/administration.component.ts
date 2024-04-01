import { Component, inject } from '@angular/core';
import { SideMenuService } from '@services/side-menu.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent {

  private sideMenuService = inject(SideMenuService)

  //isExpanded = true
  isExpandedSubmenu = false

  isExpanded = this.sideMenuService.isExpanded

  Menus = [
    {title: "Regresar al POS"},
    {title: "Reportes", icon: 'fa-regular fa-file-lines'},
    {title: "Empleados", spacing: true, icon: 'fa-solid fa-users-gear'},
    {
      title: "Productos",
      icon: 'fa-solid fa-burger',
      submenu: true,
      submenuItems: [
        {title: "Categorias", path: "/administration/categories"},
        {title: "Grupos", path: "/groups"},
        {title: "Items", path: "/items"}
      ],
    },
    {title: "Estadisticas", icon: 'fa-solid fa-chart-simple'},
    {title: "Inventario", icon: 'fa-solid fa-truck-ramp-box'},
    {title: "Información fiscal", spacing: true, icon: 'fa-regular fa-user'},
    {title: "Configuraciones", icon: 'fa-solid fa-gear'},
    {title: "Cerrar sesión", icon: 'fa-solid fa-right-from-bracket'}
  ]

  toggleMenu() {
    this.sideMenuService.toggleAside()
  }

  toggleSubmenu () {
    this.isExpandedSubmenu = !this.isExpandedSubmenu
  }
}
