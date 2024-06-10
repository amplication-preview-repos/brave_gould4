import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
