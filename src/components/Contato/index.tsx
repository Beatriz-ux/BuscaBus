import styles from './contato.module.css'
import {BsChatRight} from 'react-icons/bs'
export default function Contato() {
  return (
    <div className={styles.container}>
      <BsChatRight className={styles.icon} size={20}/>
    </div>
  )
}
