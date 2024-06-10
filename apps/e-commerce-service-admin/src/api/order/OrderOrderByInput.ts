import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  status?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
