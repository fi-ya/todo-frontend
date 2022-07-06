import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'

const data = [ { id: 1 , label: 'Return shoes'},{ id: 2 , label: 'Clean room'}, { id: 3 , label: 'Buy birthday present'} ]

const TodoList: NextPage = () => {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        To Do List
      </h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <p> {item.label}</p>
          </li>
         )
         )}
      </ul>
      </main>
  </div>

  )
  }

  export default TodoList