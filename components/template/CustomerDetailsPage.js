import Link from "next/link";
import styles from "./CustomerDetailsPage.module.css";
import moment from "moment";
export default function CustomerDetailsPage({ data, id }) {
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
  const createdat = data.createdAt
    ? moment(data.createdAt).utc().format("YYYY-MM-DD")
    : "";
  return (
    <div className={styles.main}>
      <h2>Customer Details</h2>
      <div className={styles.topdet}>
        <div className={styles.fristdiv}>
          <div className={styles.item}>
            <p>Name:</p>
            <p>{data.name}</p>
          </div>
          <div className={styles.item}>
            <p>Last Name:</p>
            <p>{data.lastname}</p>
          </div>
          <div className={styles.item}>
            <p>Join At:</p>
            <p>{createdat}</p>
          </div>
        </div>
        <div className={styles.seconddiv}>
          <div className={styles.item}>
            <p>Phone:</p>
            <p>{data.phone}</p>
          </div>
          <div className={styles.item}>
            <p>Date:</p>
            <p>{date}</p>
          </div>
          <div className={styles.item}>
            <p>Postal Code:</p>
            <p>{data.postalCode}</p>
          </div>
        </div>
      </div>
      <div className={styles.thirddiv}>
        <div className={styles.item}>
          <p>Address:</p>
          <p>{data.address}</p>
        </div>
        <div className={styles.item}>
          <p>email:</p>
          <p>{data.email}</p>
        </div>
      </div>
      <div>
        {data.products ? (
          <div className={styles.table}>
            <table>
              <thead>
                <tr className={styles.th}>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                {data.products.map((item, index) => (
                  <tr className={styles.td} key={index}>
                    <td>{item.proname}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
      <div className={styles.btns}>
        <Link href={`/edit/${id}`}>edit</Link>
      </div>
    </div>
  );
}
