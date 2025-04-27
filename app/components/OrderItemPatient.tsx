import React from "react";
import styles from "@/app/styles/OrderItemPatient.module.css";

interface OrderItemPatient {
  id: string;
  attributes: {
    date: string;
    product: string;
    quantity: number;
    name: string;
    phone: number;
    comment: string;
    status: string; // enum probably
  };
}

interface Props {
  orderItem: OrderItemPatient;
}

const OrderItemPatient = ({ orderItem }: Props) => {
  return (
    <div className={styles.event}>
      <div className={styles.info}>
        
      </div>
    </div>
  );
};

export default OrderItemPatient;
