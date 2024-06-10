import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
