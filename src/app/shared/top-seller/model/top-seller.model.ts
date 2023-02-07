export interface ITopSellingItem {
  id: number;
  name: string;
  availability: number;
  image: string;
  price: string;
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
