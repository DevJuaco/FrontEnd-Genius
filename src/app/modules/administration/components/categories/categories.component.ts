import { Component, inject, signal } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category } from '@interfaces/category';
import { CategoriesService } from '@services/categories.service';
import { SideMenuService } from '@services/side-menu.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categories = signal<Category[]>([])
  
  private sideMenuService = inject(SideMenuService)
  private categoriesService = inject(CategoriesService)
  private formBuilder = inject(FormBuilder)

  isExpanded = this.sideMenuService.isExpanded
  isVisible = false

  categoryForm: FormGroup = this.formBuilder.group({
    name: [''],
    available: [true]
  })

  ngOnInit() {
    this.getAllCategories()
  }

  openModal() {
    this.isVisible = !this.isVisible
  }

  getAllCategories() {
    this.categoriesService.getAllCategories().subscribe({
      next: (data) => {
        this.categories.set(data)
      },
      error: () => {
        console.error("ocurrio un error al obtener las categorias")
      }
    })
  }

  hideCategory() {
    
  }

  createCategory() {
    console.log(this.categoryForm.value)
    this.categoriesService.createCategory( this.categoryForm.value ).subscribe((response) => {
      console.log(response)
    })
    this.getAllCategories()
    this.categoryForm.patchValue({
      name: '',
      available: true
    })
    this.isVisible = false
  }

}
