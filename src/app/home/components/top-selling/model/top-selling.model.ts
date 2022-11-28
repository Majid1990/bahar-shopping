import { Product } from "src/app/model/product.model"


export interface ITopSellingItem {
    id: number,
    name: string,
    availability: number,
    image: string,
    price: string
}

export interface ITopSelling {
    label: string,
    topSellingItems: ITopSellingItem[]
}