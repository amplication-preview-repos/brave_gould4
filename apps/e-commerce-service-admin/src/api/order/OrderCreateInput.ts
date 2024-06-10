import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type OrderCreateInput = {
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
};
