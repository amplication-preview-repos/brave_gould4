import { OrderUpdateManyWithoutSuppliersInput } from "./OrderUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  address?: string | null;
  contactInfo?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutSuppliersInput;
};
