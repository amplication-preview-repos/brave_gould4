import { Order } from "../order/Order";

export type Supplier = {
  address: string | null;
  contactInfo: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
