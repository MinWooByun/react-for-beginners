import { useState, useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("created :)");
    // CleanUp function이라고 부르고 component가 destroy될 때 실행된다.
    return () => console.log("destroyed :(");
  });
  return <h1>Hello~</h1>;
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
