export interface Product {
  name?: string;
  price: string;
  discount?: number;
  availability?: number;
  image?: string;
  id: number;
  weight?: string;
  color?: string;
  producedYear?: string;
  waranty?: string;
  describtion?: string;
}
export interface Order {
  quantity: number;
  product: Product;
}
