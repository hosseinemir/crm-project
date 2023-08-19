import styles from './FormInput.module.css'

export default function FormInput({name,lable,type,value,onChange}) {
  return (
    <div className={styles.main}>
        <label htmlFor={name}>{lable}</label>
        <input type={type} value={value} onChange={onChange} id={name} name={name} />
    </div>
  )
}
