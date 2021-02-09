import React, { useEffect } from 'react'
import { connect} from 'react-redux'
import { set_data ,facebook_login} from  '../../store/action/action ';

function Home(props) {
console.log(props)

  useEffect((props)=>{
      console.log(props)
  
  },[props])





  return (
    <div className="App">
      <h1>home</h1>
      <button onClick={()=>props.set_data()}>setdata</button>
    </div>
  );
}


const mapstatetoprops =(state)=>({
name : state.users
})

const mapdispatchtoprops =(dispatch)=>({
  set_data : ()=> dispatch(set_data()),
  facebook_login : ()=> dispatch(facebook_login())
  })

export default connect(mapstatetoprops,mapdispatchtoprops) (Home);
