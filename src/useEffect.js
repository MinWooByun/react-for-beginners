import { useState, useEffect } from "react"; // 이 문장으로 인해 React.useState()에서 React는 생략할 수 있게 됨

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((num) => num + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // useEffect(function(실행될 코드), []) : 실행될 코드가 딱 한번만 실행된다.
  // useEffect(function(실행될 코드), [keyword]) : 실행될 코드가 keyword가 변화할 때 마다 실행된다.
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes");
  }, [counter, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
