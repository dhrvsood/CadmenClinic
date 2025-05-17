import styles from './RadioField.module.css'

const RadioField = ({text, fieldName}) => {
  return (
    <div className={styles.wrap}>
      <input type='radio' id={`radiofield-${fieldName}`} name={fieldName} value='HTML' />
      <p>{text}</p>
    </div>
  ) 
}

export default RadioField
