export interface CreatePaymentDto {
  method: string;
  status: string;
  sale_uid: string;
}

export interface UpdatePaymentDto {
  method: string;
  status: string;
  sale_uid: string;
}

export interface PaymentResource {
  id: number;
  uid: string;
  method: string;
  payment_date: Date;
  status: string;
  sale_uid: string;
  saller_uid: string;
  user_uid: string;
}
