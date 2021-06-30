export class Product {
    id: number;
    name: string;
    price: number;
    category: string;
    imageUrl: string;

    constructor(id, name, price=0, category='', imageUrl=''){
        this.id=id;
        this.name=name;
        this.price=price
        this.category=category
        this.imageUrl=imageUrl
    }
}
