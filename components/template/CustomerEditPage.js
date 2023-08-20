import { useState } from "react";
import styles from "./CustomerEditPage.module.css";
import Form from "../module/Form";
import { useRouter } from "next/router";
import moment from "moment/moment";
export default function CustomerEditPage({ data, id }) {
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
  
  const [form, setForm] = useState({
    name: data.name,
    lastname: data.lastname,
    email: data.email,
    phone: data.phone,
    address: data.address || "",
    postalCode: data.postalCode || "",
    date: date || "",
    products: data.products || [],
  });
  
  const router = useRouter();
  const cancelhandler = () => {
    router.push("/");
  };
  const savehandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status === "success") router.push("/");
  };
  return (
    <div>
      <p>Edit customer data</p>
      <Form form={form} setForm={setForm} />
      <div className={styles.btn}>
        <button onClick={cancelhandler}>cancel</button>
        <button onClick={savehandler}>save changes</button>
      </div>
    </div>
  );
}
