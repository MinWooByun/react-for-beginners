import { useState } from "react";

const App = () => {
  const [toDo, setDoto] = useState("");
  const [toDos, setDotos] = useState([]);
  const onChange = (event) => {
    setDoto(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    // ...을 붙이면 toDo 배열에 toDos 배열을 이어 붙히게 된다.
    // 아래와 같이 수정함수에서 함수로 수정을 하면 첫번째 argument로 현재 state을 보낸다.
    // 아래에서는 currentArray로 지정했기 때문에 currentArray가 현재 state이다.
    // 여기서 계산하거나 새로운 state를 만드는데 사용할 수 있다.
    // 맨아래는 수정함수에서 값을 지정해서 현재 state를 수정한다.
    setDotos((currentArray) => [toDo, ...currentArray]);
    setDoto("");
  };
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/* map은 예전 array를 가져와서 변형을 시켜주고 새로운 배열로 반환해준다. 안에 함수를 적어준다.
      매개변수로 아무 이름으로 지정을 해주고 이 매개변수를 이용하면 이전에 있던 array의 값들도 사용할 수 있다. */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
