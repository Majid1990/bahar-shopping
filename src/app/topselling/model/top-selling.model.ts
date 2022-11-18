export interface ITopSellingItem {
    name: string,
    price: string,
    availability: number,
    image?: string
}

export interface ITopSelling {
    label: string,
    topSellingItems: ITopSellingItem[]
}