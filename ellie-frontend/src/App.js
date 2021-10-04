import React, { useState,useRef,useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import axios from "axios"
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import {
  messageSave,
  selectCount,
} from './messagesReducer';

const App = () => {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const reduxMessages = useSelector(selectCount);
  const newInfo = JSON.stringify(reduxMessages)
  const Id = newInfo[8]
  console.log(` the new id is ${Id}`)
  console.log(`okay the value ${JSON.stringify(reduxMessages)}`)
  const dispatch = useDispatch();



  // console.log(`count is ${count}`)


  const Chat = () => <div>




  <div>
      <button   className='btn5'  variant='danger' onClick={() => closeConnection()}>Leave Chat</button>
  </div>
  <div className='chat'>
      <MessageBox/>
      <SendMsgForm/>
      <SendPrivateMsgForm/>
  </div>
</div>




const MessageBox = () => {
 

  const id = JSON.stringify(reduxMessages)
  

  return <div className='message-box' >
      {reduxMessages.map((m) =>
          <div  className='user-message'>
              <div className='message bg-primary'>{m.message}</div>
              <div className='from-user'>{m.user}</div>

          </div>


    
      )}

 <div>{JSON.stringify(reduxMessages[1].id)}</div>
    


<div> 

{/* {reduxMessages.map((m) =>
  <div>{m.id}</div>
        
      )} */}
</div>

  </div>


}


const SendMsgForm = () => {
  const [message, setMessage] = useState('');



  return(
         <div>

          <input className="css-input6" type="user" placeholder="Send your message..."
              onChange={e => setMessage(e.target.value)} value={message} />
              <button  className="btn3" onClick={()=>{  sendMessage(message); setMessage('');}} variant="primary" type="submit" disabled={!message}> Send </button>
              </div>
              )
}


const SendPrivateMsgForm = () => {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState("")


  return(
         <div>

          <input className="css-input6" type="user" placeholder="Send Private Message..."
              onChange={e => setMessage(e.target.value)} value={message} />
               <input className="css-input6" type="user" placeholder="message to which user Provide User's Id?..."
              onChange={e => setUser(e.target.value)} value={user} />
              <button  className="btn3" onClick={()=>{  sendPrivateMessage(user,message); setMessage(''); setUser('');   }} variant="primary" type="submit" disabled={!message}> Send </button>
              
              </div>
              )
}


  const SignUpForm = () => {

    const [user, setUser] = useState();
    const [password, setPassword] = useState("hi");
    const [sendEmailVerification ,setSendEmailVerification] = useState()

    



    let UpperCase = /^(?=.*[A-Z])/;
    let lowerCase = /^(?=.*[a-z])/;
    let numbers = /^(?=.*[0-9])/;
    let special = /^(?=.*[$@$!%*#?&])/;

    const signUpHandler = ()=>{

      // if (!password.match(UpperCase) || !password.match(lowerCase) || !password.match(numbers) || !password.match(special) || password.length <= 9 || password === ""  ) {
      //   alert("password must contain Upper/lower case,Numbers,Special Charachters")}


    

      axios
      .post(
        `http://localhost:5000/register`,
        {
          email: user,
          password:password
        },
     
      )
      .then((res) => {
        console.log(` data is ${res.data}`)  
        if(res.data===1){
          alert("register success")
          joinRoom(user)
        }   
        else{
         alert("email already exist")
        }
      })
      .catch((e) => {
        console.log(e)
        if(e){
          alert("already exist")
        }
      });
       }

      



      const loginHandler = ()=>{

        // if (!password.match(UpperCase) || !password.match(lowerCase) || !password.match(numbers) || !password.match(special) || password.length <= 9 || password === ""  ) {
        //   alert("password must contain Upper/lower case,Numbers,Special Charachters")}
  
     
  
        axios
        .post(
          `http://localhost:5000/login`,
          {
            email: user,
            password:password
          },
       
        )
        .then((res) => {
      
          if(res.data===1){
            alert("sucess ")
            joinRoom(user)
          }
          else{
            alert("email is not found ")
            
          }

        })
        .catch((e) => {

          console.log(e);
        });
         }
 

    return (
          <div className="form">
            <button onClick={()=>{dispatch(messageSave())}}/>
            <input className="css-input1"placeholder="email" onChange={e => setUser(e.target.value)} />
            <input className="css-input2"placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <input className="css-input3" placeholder="email" onChange={e => setUser(e.target.value)} />
            <input className="css-input4" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <input className="css-input5" placeholder="Send Email Veirifcation" onChange={e => setSendEmailVerification(e.target.value)} />
        <button  className="btn1"  onClick ={signUpHandler}  variant="primary" type="submit" disabled={!user || !password || !sendEmailVerification}>Sign Up</button>
        <button   className="btn2" onClick={loginHandler}  variant="primary" type="submit" disabled={!user || !password }>Login</button>
        </div>
    )
    
}





  const joinRoom = async (user) => {

    axios
    .post(
      `https://localhost:44382/chat/negotiate?negotiateVersion=1`,

    )
    .then((res) => {
       const data = JSON.stringify(res)
      console.log(`this is the id ${data}`)
    
    })
    .catch((e) => {

      console.log(e);
    });



    try {
    
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:44382/chat") 
        .build();

        
         




        


      connection.on("ReceiveMessage", (user, message,id) => {



         //store in redux persistance here
        // setMessages((messages) => [...messages, { user, message } ])
      // dispatch(messageSave([...messages, { user, message } ]))

        dispatch(messageSave([...reduxMessages, { user, message,id } ]))
      });

     

      connection.onclose((e) => {
  
        setConnection();
        setUsers([]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { user }) ; 



      






      setConnection(connection);



    } catch (e) {
      console.log(e);
    }
  };


  const sendMessage = async (message) => {
    try {
      await connection.invoke("SendMessage", message); 
      console.log("message sent")
    } catch (e) {
      console.log(e);
    }
  };


  const sendPrivateMessage = async (user,message) => {
    try {
      console.log("done ")
      await connection.invoke("SendPrivateMessage", user, message); 
      console.log("private message sent ")
      console.log(user)
    } catch (e) {
      console.log(e);
    }
  };




  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="app">
      <h2>Real Time Chat App</h2>
      <hr className="line" />
      { 
     
        !connection ? (
          <SignUpForm joinRoom={joinRoom} /> 
        ) : (
          <Chat
            sendMessage={sendMessage}
            messages={messages}
            users={users}
            closeConnection={closeConnection}
          />
        ) 
      }
    </div>
  );
};

export default App;
