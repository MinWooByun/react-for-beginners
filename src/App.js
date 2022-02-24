import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/hello"}>
          <h1>Hello World~</h1>
        </Route>
        <Route path={"/movie/:id"}>
          <Detail />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// BrowserRouter는 우리가 흔히 아는 URL의 생김새이다. EX) localhost:3000/movie 즉, "/"를 사용한다.
// Switch는 Route를 찾는건데 Route는 URL을 뜻한다. Route를 찾으면 컴포넌트를 렌더링해한다.
// path={"/"}은 Home을 나타낸다. 즉, path URL 주소이다.
// "/:~"에서 ":"을 붙이면 url으로 넘어온 params를 반환해준다. 여기서 ~은 변수명이고 내 마음대로 이름을 지으면 된다.
