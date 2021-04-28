export const todoLoad = () =>{
    return (dispatch) =>{
        dispatch({ type: 'start' })
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json =>{
                dispatch({
                    type: 'load',
                    payload: json
                })
            })
    }
}