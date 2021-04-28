import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {todoLoad} from "./action";
import Header from "./Header";

function App() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(todoLoad());
    }, []);


  return (
      <div>
          <Header/>
          <div>
              {loading ? 'loading...' : ''}
          </div>
          {todos.map(item => {
              return(
                  <div className='todo'>
                      <div className="check">
                          <input type="checkbox"/>
                      </div>
                      <div className="title">
                          {item.title}
                      </div>
                      <div className="actions">
                          <button>delete</button>
                      </div>
                  </div>
              )
          })}
      </div>
  );
}

export default App;
