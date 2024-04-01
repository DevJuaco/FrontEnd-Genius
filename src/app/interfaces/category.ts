import { Product } from "./product";

export interface Category {
    idCategory: number;
    name: string;
    available: boolean;
    products: Product[];
}
