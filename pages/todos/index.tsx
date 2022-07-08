import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";

const fetchTodos = async () => {
  const url = "http://localhost:5000/todos";
  return await fetch(url, {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:5000",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((error) =>
      console.error("Error fetching data for all todos:", error)
    );
};

const getAllTodoData = async () => {
  return await fetchTodos()
    .then((data) => {
      return data;
    })
    .catch((error) =>
      console.error("Error getting data for fetchToDo: ", error)
    );
};

export async function getServerSideProps() {
  const data = await getAllTodoData();
  const todoData = JSON.stringify(data);

  return {
    props: { todoData },
  };
}

const TodoList: NextPage = ({ todoData }) => {
  const todosArray = JSON.parse(todoData);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>To Do List</h1>
        {todosArray.map((todo) => (
          <div className={styles.todo_container} key={todo.id}>
            <input
              type="checkbox"
              id="isCompleted"
              checked={todo.isCompleted}
            ></input>
            <p className={todo.isCompleted
									? " " + styles.line_through
									: ""
                  }> 
                  {todo.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TodoList;
