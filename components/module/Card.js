import Link from 'next/link'
import styles from './Card.module.css'
import { useRouter } from 'next/router'

export default function Card({customer}) {
    const route=useRouter()
    const{name,lastname,email, _id}=customer
    const deleteHandler=async(_id)=>{
        console.log(_id)
const res = await fetch(`/api/delete/${_id}`,{
    method:"DELETE"
})
const data = await res.json()
route.push("/")
    }
  return (
    <div className={styles.main}>
        <div className={styles.r}>
            <div className={styles.r1}>
            <p>{name}</p>
            <p>{lastname}</p>
            </div>
            <p>{email}</p>
        </div>
        <div className={styles.btn}>
            <button onClick={()=>deleteHandler(_id)}>Delete</button>
            <Link href={`/edit/${_id}`}>Edit</Link>
            <Link href={`/customer/${_id}`}>Details</Link>
            
        </div>
    </div>
  )
}
