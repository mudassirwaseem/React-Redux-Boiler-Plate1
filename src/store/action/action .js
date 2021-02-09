import firebase from 'firebase'

const set_data = (data) => {
    return (dispatch) => {
        dispatch({ type: "SETDATA", payload: { data } })
    }
}






export {
    set_data,
}






