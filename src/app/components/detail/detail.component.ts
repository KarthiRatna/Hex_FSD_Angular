import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services';
import { Product } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    product:Product;
  constructor(private route : ActivatedRoute, private productsvc:ProductService) {
    
    1.// this.product= this.productsvc.getProductById(id);


    2./* let id= this.route.snapshot.params["id"];
        this.productsvc.getProductById(id)
        .subscribe(
          res=>this.product=res,
          err=>console.log(err)
        ) */
//item name comes from the app.route
        this.product=this.route.snapshot.data["item"];
   }



  ngOnInit() {
  }

}
