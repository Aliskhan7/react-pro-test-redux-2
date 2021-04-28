import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {todoLoad} from "./action";

function App() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(todoLoad());
    }, []);


  return (
      <div>
          список дел
          <div>
              {loading ? 'loading...' : ''}
          </div>
          {todos.map(item => {
              return(
                  <div>
                      {item.title}
                  </div>
              )
          })}
      </div>
  );
}

export default App;
