export class Produtos {
    id: number;
    name: string
    size: string;
    price: number;
    image: string;
    group: string;
    quanty: number;

    constructor(id: number, name: string, size: string, price: number, image: string, group: string, quanty: number) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.price = price;
        this.image = image;
        this.group = group;
        this.quanty = quanty;
    }
}
