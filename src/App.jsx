import React from "react";
import Login from "./pages/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";
import { validate } from "./redux/auth";
import Routers from "./routes/Routers";

function App() {
  const { count } = useSelector((state) => state.counter);
  // useSelector((state) => console.log(state.validate));
  const dispatch = useDispatch();
  // console.log(username, );

  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <button
        onClick={() =>
          dispatch(validate({ username: "nicat", password: "nicat123" }))
        }
      >
        Validate
      </button>
      <button
        onClick={() => {
          count > 0 && dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by 33
      </button> */}
      {/* <Login /> */}
      <Routers />
    </div>
  );
}

export default App;
