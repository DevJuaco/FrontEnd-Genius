export interface Product {
    idProduct: number;
    idCategory: number;
    idGroup: number;
    name: string;
    price: number;
    available: boolean;
    description: string;
    taxes: [];
}
