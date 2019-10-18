
export interface Product {
    id?:number;
    name:string;
    price:number;
    quantity:number;
    reorderLevel:number;
    taxRate:number;
    manufacturingDate: Date;
    imageUrl:string;
    brand:string;
    categoryId:number
    }
