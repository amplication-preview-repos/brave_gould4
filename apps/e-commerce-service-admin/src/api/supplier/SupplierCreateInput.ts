import { OrderCreateNestedManyWithoutSuppliersInput } from "./OrderCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  address?: string | null;
  contactInfo?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutSuppliersInput;
};
