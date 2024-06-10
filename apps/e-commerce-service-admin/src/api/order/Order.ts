import { Product } from "../product/Product";
import { Supplier } from "../supplier/Supplier";

export type Order = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  quantity: number | null;
  status?: "Option1" | null;
  supplier?: Supplier | null;
  updatedAt: Date;
};
