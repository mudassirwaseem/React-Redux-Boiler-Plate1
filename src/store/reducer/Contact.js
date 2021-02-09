import React, { useEffect, useState } from 'react'
import firebase from './config'


function Contact() {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [Alldata, setAlldata] = useState([])

    useEffect(() => {
        console.log("chl rhs")
        let data = firebase.database().ref("user")
        data.on("value", datasnap => {
            console.log(Object.values( datasnap.val()))
            setAlldata(Object.values( datasnap.val()))
             
        })

    },[])

    const Submit = () => {
        console.log({ name, email })
        const val = ({ name, email })
        //  Firebase.database().ref("user").push(val)
    }
//  console.log(Alldata)
//  const mylist = Alldata.map((all)=>{
// return <li>{all.age}</li>
//  })
    return (


        <div style={{ textAlign: "center", marginTop: 20 }}>
            <input onChange={(e) => setname(e.target.value)} />
            <input onChange={(e) => setemail(e.target.value)} />
            <button onClick={Submit}> submit</button>

            {/* <ul>{mylist}</ul> */}

            {
                Alldata.map((all)=>{
               return <ul>
                   <li>{all.age}</li>
                   <li>{all.bloodgroup}</li>
                   <li>{all.name}</li>
                   <li>{all.gender}</li>
                   <li>{all.address}</li>
               </ul>
                })
            }
            {/* <h1>{Alldata}</h1> */}
        </div>
    )
}

export default Contact
