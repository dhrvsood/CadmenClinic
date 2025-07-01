import styles from './CheckboxField.module.css'

const CheckboxField = ({ text, name, isChecked, onChange }) => {
  return (
    <div className={styles.wrap}>
      <input type='checkbox' id={`checkbox-${name}`} checked={isChecked} onChange={onChange} />
      <p>{text}</p>
    </div>
  )
}

export default CheckboxField
