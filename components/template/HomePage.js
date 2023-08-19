import Card from '../module/Card'
import styles from './HomePage.module.css'

export default function HomePage({customers}) {
  return (
    <div className={styles.main}>
        <div className={styles.customersdiv}>
            {customers.map(item => (
                <Card key={item._id} customer={item}/>
            ))}

        </div>

    </div>
  )
}
