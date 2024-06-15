import { PaymentResource } from "./payment.model";
import { SaleResource } from "./sale.model";

export interface CreateSockItemDto {
  name: string;
  quantity: number;
  unit_price: number;
  total_price?: number;
  suppier_name?: string;
  supplier_contact?: string;
  supplier_email?: string;

  image_url?: string;
  item_location?: string;
  barcode: string;
  status: string;
  date_acquired?: Date;
  expiry_date: Date;
  category_uid: string;
}

export interface UpdateSockItemDto {
  name: string;
  quantity: number;
  unit_price: number;
  total_price?: number;
  suppier_name?: string;
  supplier_contact?: string;
  supplier_email?: string;

  image_url?: string;
  item_location?: string;
  barcode: string;
  status: string;
  date_acquired?: Date;
  expiry_date: Date;
  category_uid: string;
}

export interface UpdateSockItemResource {
  ui: string
  name: string;
  quantity: number;
  unit_price: number;
  total_price?: number;
  suppier_name?: string;
  supplier_contact?: string;
  supplier_email?: string;
  image_url?: string;
  item_location?: string;
  barcode: string;
  status: string;
  date_acquired?: Date;
  expiry_date: Date;
  category_uid: string;
  created_at: Date;
  last_modified_at: Date;
  Payment: PaymentResource[];
  Sale: SaleResource[];
}
