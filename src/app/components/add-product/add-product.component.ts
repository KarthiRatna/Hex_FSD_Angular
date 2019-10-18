import { Component, OnInit } from '@angular/core';
import { Product, Category } from 'src/app/models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { ProductService } from 'src/app/services';


@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;
  categories: Observable<Category[]>;
  formStatus: any = {
    submitted: false,
    valid: true
  }
  navigationEnabled: Boolean = false;

  constructor(private productservice: ProductService, private router: Router) {
    this.categories = productservice.getCategories();
    this.product = {
      name: "",
      price: undefined,
      quantity: undefined,
      reorderLevel: undefined,
      taxRate: undefined,
      manufacturingDate: undefined,
      imageUrl: "",
      brand: "",
      categoryId: undefined
    }
  }

  ngOnInit() {
  }
  saveTheValuesOfForm(form) {

    if (form.valid) {
      this.formStatus.submitted = true;
      // console.log(form.value)
      this.productservice.addProduct(form.value)
        .subscribe(
          res => {
            this.navigationEnabled = true;
            this.router.navigate(['/']);
          },
          err => { this.formStatus.valid = false; }
        );
      //submit form
      // alert("valid");
    }
    else {
      alert("Invalid");
    }

  }


}
