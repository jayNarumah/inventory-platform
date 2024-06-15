export interface CreateSaleDto {
  quantity: number;
  unit_price: number;
  total_price: number;
  buyer?: string;
  discount?: number;
  status: string;
  item_uid: string;
}

export interface UpdateSaleDto {
  quantity: number;
  unit_price: number;
  total_price: number;
  buyer?: string;
  discount?: number;
  status: string;
  item_uid: string;
}
export interface SaleResource {
  id: number;
  quantity: number;
  unit_price: number;
  total_price: number;
  buyer?: string;
  discount?: number;
  status: string;
  created_at: Date;
  last_modified_at: Date;
  item_uid: string;
  seller_uid: string;
}
