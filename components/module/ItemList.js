import FormInput from "./FormInput";
import styles from "./ItemList.module.css";

export default function ItemList({ form, setForm }) {
  const { products } = form;
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { proname: "", price: "", qty: "" }],
    });
  };
  const deleteHandler = (index) => {
    const newproduct = [...products];
    newproduct.splice(index, 1);
    setForm({ ...form, products: newproduct });
  };
  const onChangeHandler = (e, index) => {
    const { name, value } = e.target;
    const newproduct = [...products];
    newproduct[index][name] = value;
    setForm({ ...form, products : newproduct });
  };
  return (
    <div className={styles.main}>
      <p>Purchased Product</p>
      {products.map((item, index) => (
        <div key={index} className={styles.prodiv}>
          <FormInput
            name="proname"
            lable="Product Name"
            type="text"
            value={item.proname}
            onChange={(e) => onChangeHandler(e, index)}
          />
          <div className={styles.additemPrice}>
            <FormInput
              name="price"
              lable="Product Price"
              type="text"
              value={item.price}
              onChange={(e) => onChangeHandler(e, index)}
            />
            <FormInput
              name="qty"
              lable="Qty"
              type="number"
              value={item.qty}
              onChange={(e) => onChangeHandler(e, index)}
            />
          </div>
          <button
            className={styles.removebtn}
            onClick={() => deleteHandler(index)}
          >
            remove item
          </button>
        </div>
      ))}
      <button onClick={addHandler} className={styles.addbtn}>
        add item
      </button>
    </div>
  );
}
