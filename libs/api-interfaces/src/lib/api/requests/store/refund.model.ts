import { IsOptional, Max } from "class-validator";
import { User } from "../../resources/user";
import { SaleResource } from "./sale.model";

export interface CreateRefundDto {
  reason: string;
  status?: string;
}
export interface UpdateRefundDto {
  // @Max(300)
  // @IsOptional()
  reason: string;

  status: string;
}
export interface RefundResource {
  uid: string
  created_at: Date;
  last_modified_at: Date;
  reason: string;
  status: string;
  sale: SaleResource;
  createdBy: User;
}
