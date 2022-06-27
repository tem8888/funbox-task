export interface ProductInterface {
  id: string;
  topping: string;
  portion: number;
  gift: number;
  weight: number;
  descriptionOutOfStock: string;
  description: string;
  inStock: boolean;
}

export interface SelectedInterface {
  [id: string]: ProductInterface;
}
