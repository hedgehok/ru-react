import { useFetch } from './hooks/useFetch';
import './App.css';

function App() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <>
      <h1>React Homework</h1>

      <div>
        <div>
          <button onClick={() => refetch({
            params: {
              _limit: 3
            }
          })}>
            Перезапросить
          </button>
        </div>
        <div style={{maxHeight: '200px', overflowY: 'auto'}}>
          {isLoading && 'Загрузка...'}
          {error && 'Произошла ошибка'}
          {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
        </div>
      </div>
    </>
  )
}

export default App
