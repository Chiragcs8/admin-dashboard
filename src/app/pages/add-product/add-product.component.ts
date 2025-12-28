import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  categories = ['Electronics', 'Clothing', 'Books', 'Food'];

  productForm = this.fb.group({
    name: ['', Validators.required],
    price: [null, [Validators.required, Validators.min(1)]],
    category: ['', Validators.required],
    description: [''],
    inStock: [true]
  });

  constructor(private fb: FormBuilder) {}

  submit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    console.log('Product:', this.productForm.value);
  }
}
