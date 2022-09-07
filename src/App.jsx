import { useLocalStorage } from "./utils/useLocalStorage";

export default function App() {
  const [count, setCount] = useLocalStorage("count", 0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="pt-5 text-center">
      <p className="display-4">Count: {count}</p>
      <div>
        <button className="btn btn-success m-2 p-4" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-danger m-2 p-4" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="btn btn-primary m-2 p-4" onClick={handleReset}>
          Reset Count
        </button>
      </div>
    </div>
  );
}
