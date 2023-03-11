export interface ITopSellingItem {
  id: number;
  name: string;
  availability: number;
  freeDelivery?: boolean;
  image: string;
  price: string;
  discount?: number;
  weight?: string;
  color?: string;
  producedYear?: string;
  waranty?: string;
  describtion?: string;
}

export interface ITopSelling {
  label: string;
  topSellingItems: ITopSellingItem[];
}
