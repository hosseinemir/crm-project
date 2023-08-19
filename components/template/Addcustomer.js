import { useState } from "react";
import Form from "../module/Form";
import styles from "./Addcustomer.module.css";
import { useRouter } from "next/router";

export default function Addcustomer() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });
  const cancelHandler = () => {
    setForm({
      name: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
    router.push("/");
  };
  const addHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({data:form}),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    if (res.status === "success") router.push("/");
  };
  return (
    <div className={styles.maindiv}>
      <h3>Add new Customer</h3>
      <Form form={form} setForm={setForm} />
      <div className={styles.btn}>
        <button className={styles.can} onClick={cancelHandler}>
          cancel
        </button>
        <button className={styles.add} onClick={addHandler}>
          add new customer
        </button>
      </div>
    </div>
  );
}
