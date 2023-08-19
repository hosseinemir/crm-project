import React from "react";
import FormInput from "./FormInput";
import ItemList from "./ItemList";
import styles from "./Form.module.css";
export default function Form({ form, setForm }) {
  const changehandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name] : value });
  };
  return (
    <div className={styles.main}>
      <FormInput
        name="name"
        lable="First Name"
        type="text"
        value={form.name}
        onChange={(e) => changehandler(e)}
      />
       <FormInput
        name="lastname"
        lable="Last Name"
        type="text"
        value={form.lastname}
        onChange={(e) => changehandler(e)}
      />
       <FormInput
        name="email"
        lable="Email"
        type="text"
        value={form.email}
        onChange={(e) => changehandler(e)}
      />
       <FormInput
        name="phone"
        lable="Phone Number"
        type="text"
        value={form.phone}
        onChange={(e) => changehandler(e)}
      />
       <FormInput
        name="address"
        lable="Address"
        type="text"
        value={form.address}
        onChange={(e) => changehandler(e)}
      />
       <FormInput
        name="postalCode"
        lable="Postal Code"
        type="number"
        value={form.postalCode}
        onChange={(e) => changehandler(e)}
      />
       <FormInput
        name="date"
        lable="Date of Birth"
        type="date"
        value={form.date}
        onChange={(e) => changehandler(e)}
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
}
