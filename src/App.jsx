import { useFetch } from "./hooks/useFetch";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useHover } from "./hooks/useHover";
import { useViewportSize } from "./hooks/useViewportSize";
import { useWindowScroll } from "./hooks/useWindowScroll";
import "./App.css";

function App() {
  const { data, isLoading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [value, { setItem, removeItem }] = useLocalStorage("some-key");
  const { hovered, ref } = useHover();
  const { width, height } = useViewportSize();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <h1>React Homework</h1>

      <div>
        <div>
          <button
            onClick={() =>
              refetch({
                params: {
                  _limit: 3,
                },
              })
            }
          >
            Перезапросить
          </button>
        </div>
        <div style={{ maxHeight: "120px", overflowY: "auto" }}>
          {isLoading && "Загрузка..."}
          {error && "Произошла ошибка"}
          {data &&
            !isLoading &&
            data.map((item) => (
              <div key={item.id}>{item.title}</div>
            ))}
        </div>
      </div>

      <hr />

      <div>
        <p>Значение из LocalStorage: {value}</p>
        <div>
          <button onClick={() => setItem("new storage value")}>
            Задать значение
          </button>
          <button onClick={() => removeItem()}>
            Удалить значение
          </button>
        </div>
      </div>

      <hr />
      <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>

    <hr />

    <div>
    Width: {width}, height: {height}
    </div>

    <hr />

    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
    </>
  );
}

export default App;
