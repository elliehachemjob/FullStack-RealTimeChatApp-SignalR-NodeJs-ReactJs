import React, { useRef,useEffect, 
  useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import axios from "axios"
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import {
  messageSave,
  storedMessages,
  clearMessages
} from './messagesReducer';
import { Widget, addResponseMessage,addUserMessage,renderCustomComponent} from "react-chat-widget";
import flippedimage from "./flippedImage.png"
import normalimage from "./normalPlugit.png"

import {
  Field,
  Control,
  Input,
  Icon,
  Container,
  Button,
  Card,
  Level,
  Title,
  Section,
  Label,
  Checkbox,
  Loader
} from "rbx";
import { faAddressBook, faArrowRight, faCheck, faEnvelope, faEnvelopeOpenText, faLock, faRegistered, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

var FileSaver = require('file-saver');


const App = () => {


const testButton = ()=>{


}


  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const reduxMessages = useSelector(storedMessages);
  const [chatBox,setChatBox] = useState([<span ></span> ])
  const [newBox,setNewBox] = useState([<span ></span> ])

//for widget
const [isWidget, setisWidget] = useState(false);
const [isonline, setIsOnline] = useState(false);
const [ispending, setIsPending] = useState(false);
const [messges2, setMessages2] = useState([]);
const [isRender, setIsRender] =useState(false)
const [adminResponder, setAdminResponder] = useState()
const [clientResponder, setClientResponder] = useState()

const [isSending, setIsSending] = useState(false)
//for widget end 


const handleNewUserMessage = (e) => {

  setIsSending(false)

//  console.log(`okay ${JSON.stringify(reduxMessages)}`)
//  const newStorage = reduxMessages.map((m) =>m.message);
 
//  const messageStringified = JSON.stringify(newStorage)

//  console.log(`okay 2  ${newStorage}`)

    setIsRender(true)
     sendMessage("Client",e);
    // sending messages worked as for save first and last message is not saved for now but that is okay we will fix that late
      setMessages2([...messges2, e])
     console.log(` this is ${messges2}`)
 //this is where the admin will send back his msgs 

//  const hi = "hiiii"
 
  //  addResponseMessage(
    
  //   responder
    
  //  );
 

  //  messges2.forEach((message) => addUserMessage(message));


  

//  console.log(`this is redux messages saved ${JSON.stringify(reduxMessages)}`)



//  {reduxMessages.map((m) =>
//   <div  className='user-message'>
//       <div className='message bg-primary'>{m.message}</div>
//       <div className='from-user'>{m.user}</div>

//   </div>



// )}




// reduxMessages.map((m) => {
//   addUserMessage(m.message)
// });







 };



 const ComponentToRender = () => {
   
  return (
    <div className="App">
      <h1>hi </h1>
    </div>
  );
};




const CustomMessageBox = () => {

//  console.log(`the length is ${ typeof(responder)}`)
if(adminResponder)
return (  
          
  <div className="rcw-responder">{adminResponder}</div> 
)
else{
  return(
  <div>{adminResponder}</div> )
}
}



const CustomMessageBoxAdmin = () => {

  //  console.log(`the length is ${ typeof(responder)}`)
  if(adminResponder)
  return (  
            
    <div >{adminResponder}</div> 
  )
  else{
    return(
    <div>{adminResponder}</div> )
  }
  }








useEffect(() => {
 

 if(isSending==5){
  renderCustomComponent(CustomMessageBoxAdmin)}
  else{
    renderCustomComponent(CustomMessageBoxAdmin)
  }

 
}, [adminResponder,setAdminResponder]);




  
//  useEffect(() => {
//   // reduxMessages.map((m) => {
//   //   addUserMessage(m.message);
//   // });



// }, []);

 





//for widget 

const getCustomLauncher = (handleToggle) => {
  if (isWidget) {
    return (
      <img
        src={normalimage}
        alt="imageNot working"
        className="rcw-launcher "
        onClick={() => {
          handleToggle();
          setisWidget(false);
        }}
      />
    );
  } else {
    return (
      <img
      src={flippedimage}
      alt="imageNot working"
        className="rcw-launcher "
        onClick={() => {
          handleToggle();
          setisWidget(true);
        }}
      />
    );
  }
};






//for widget end 






  // console.log(` the new id is ${Id}`)
  // console.log(`okay the value ${JSON.stringify(reduxMessages)}`)
  const dispatch = useDispatch();










  const Chat = () => {
    let message = "YOUR ID WONT SHOW TO OTHERS give it to others to recieve messages"


   
    

  
    const generateDownload = ()=>{

      const toExport = []

      {reduxMessages.map((m) =>
    
        toExport.push(`${m.message} \n ${m.user} \n \n`)
    
    )}
  

      
    var blob = new Blob([toExport], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "messages");

    }






  return (



    
  <div>

  <div>
      <button   className='btn5'  variant='danger' onClick={() => closeConnection()}>Leave Chat</button>
      <button   className='btn6'  variant='danger' onClick={() => getId(message)}>Get Id</button>
      <button   className='btn7'  variant='danger' onClick={()=>{dispatch(clearMessages())}}>Clear Messages</button>
      <button   className='btn8'  variant='danger' onClick={generateDownload}>Download Messages</button>
      <button   className='btn9'  variant='danger' onClick={()=>{setChatBox(chatBox=>[...chatBox , 
             <div className="className='chat'"> <MessageBox/>
             <SendPrivateMsgForm/></div>
            
          ])}}>Test Button</button>
      {/* <button   className='btn9'  variant='danger' onClick={()=>{setChat(chatBox=>[...chatBox , <Chat/>])}}>Test Button</button> */}
      
  </div>
  
  <div className='chat'>
      <MessageBox/>
      <SendMsgForm/>
      <SendPrivateMsgForm/>
     

  </div>
  <div className="niceAppend">
      {chatBox}
      </div>
</div>)}







const MessageBox = () => {
 



  
    const messageRef = useRef();

    useEffect(() => {

        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight});
        }
    }, [messages]);
  
  
  return <div ref={messageRef} className='message-box' >
      {reduxMessages.map((m) =>
          <div  className='user-message'>
              <div className='message bg-primary'>{m.message}</div>
              <div className='from-user'>{m.user}</div>

          </div>
    
      )}

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
         <div classaName="niceAppend">
          <input className="css-input6" type="user" placeholder="Send Private Message..."
              onChange={e => setMessage(e.target.value)} value={message} />
               <input className="css-input6" type="user" placeholder="message to which user Provide User's Id?..."
              onChange={e => setUser(e.target.value)} value={user} />
              <button  className="btn3" onClick={()=>{  sendPrivateMessage(user,message); setMessage(''); setUser('');   }} variant="primary" type="submit" disabled={!message}> Send </button>
              
              </div>
              )
}


  const SignUpForm = () => {
  

    let UpperCase = /^(?=.*[A-Z])/;
    let lowerCase = /^(?=.*[a-z])/;
    let numbers = /^(?=.*[0-9])/;
    let special = /^(?=.*[$@$!%*#?&])/;




    const LoginForm = () => {


      const loginHandler = ()=>{

        // if (!password.match(UpperCase) || !password.match(lowerCase) || !password.match(numbers) || !password.match(special) || password.length <= 9 || password === ""  ) {
        //   alert("password must contain Upper/lower case,Numbers,Special Charachters")}
  
     
  
        axios
        .post(
          `http://localhost:1589/api/users/login`,
          {
            Email: user1,
            Auth:password1,
            IsAdmin:0
          },
       
        )
        .then((res) => {
          console.log(` data is ${JSON.stringify(res)}`)  
          if(res.data==="Logged In Successfully"){
            alert("sucess")
            joinRoom(user1)
          }
          else if (res.data==="Make sure email and password are correct"){
            alert("Make sure email and password are correct ")
            
          }

        })
        .catch((e) => {

          console.log(e);
        });
         }
 




      const [user1, setUser1] = useState();
      const [password1, setPassword1] = useState();
      // const [loading, setLoading] = useState(false);
      const [timer, setTimer] = useState(null);
      // useEffect(
      //   () => {
      //     // this will clear Timeout when component unmont like in willComponentUnmount
      //     return () => {
      //       clearTimeout(timer);
      //     };
      //   },
      //   [] //useEffect will run only one time
      // );
      return (
        <Level>
          <Level.Item textAlign="centered">
            <Container
              style={{
                maxWidth: 400,
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position:"relative",
                bottom:310,
                right:50
              }}
            >
              <Card>
                <Section backgroundColor="primary">
                  <Title style={{ color: "white" }}>Plugit Support Login</Title>
                </Section>
                <Card.Content>
                  <Field>
                    <Control iconLeft iconRight>
                      <Input
                      //  disabled={loading}
                        type="email" placeholder="Email" value={user1} onChange={e => setUser1(e.target.value)}/>
                      <Icon size="small" align="left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Icon>
                      <Icon size="small" align="right">
                        <FontAwesomeIcon icon={faCheck} />
                      </Icon>
                    </Control>
                  </Field>
                  <Field>
                    <Control iconLeft>
                      <Input
                        // disabled={loading}
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword1(e.target.value)}
                        value={password1}
                      />
                      
                      <Icon size="small" align="left">
                        <FontAwesomeIcon icon={faLock} />
                      </Icon>
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <Label>
                        <Checkbox
                        //  disabled={loading}
                          /> Remember me
                      </Label>
                      <Label>
                      <Link style={{paddingLeft:175 ,top:120,right:85 ,position:'relative'}} to="/SignUpForm">Create New Account</Link>
                      </Label>
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <Button
                        // state={loading ? "loading" : undefined}
                        onClick={() => {
                          loginHandler()
                          // setLoading(true);
                        }}
                        color="primary"
                      >
                        Login
                      </Button>
                    </Control>
                  </Field>
                </Card.Content>
              </Card>
            </Container>
          </Level.Item>
        </Level>
      );
    };




    const SignUpForm = () => {



      const signUpHandler = ()=>{

        // if (!password.match(UpperCase) || !password.match(lowerCase) || !password.match(numbers) || !password.match(special) || password.length <= 9 || password === ""  ) {
        //   alert("password must contain Upper/lower case,Numbers,Special Charachters")}
  
  
      
  
        axios
        .post(
          `http://localhost:1589/api/users`,
          {
            Email: user2,
            Auth:password2,
            IsAdmin:0
          },
       
        )
        .then((res) => {
          console.log(` data is ${JSON.stringify(res)}`)  
          if(res.data==="Added Successfully"){
            alert("register success")
            joinRoom(user2)
          }   
          else if(res.data==="Email Already Exist"){
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



      const [user2 ,setUser2] = useState();
      const [password2, setPassword2] = useState();
      const [sendEmailVerification ,setSendEmailVerification] = useState()
      // const [loading, setLoading] = useState(false);
      const [timer, setTimer] = useState(null);


      // useEffect(
      //   () => {
      //     // this will clear Timeout when component unmont like in willComponentUnmount
      //     return () => {
      //       clearTimeout(timer);
      //     };
      //   },
      //   [] //useEffect will run only one time
      // );
      return (
        <Level>
          <Level.Item textAlign="centered">
            <Container
              style={{
                maxWidth: 400,
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position:"relative",
                bottom:300,
                right:50
              }}
            >
              <Card>
                <Section backgroundColor="primary">
                  <Title style={{ color: "white" }}>Plugit Support Sign Up</Title>
                </Section>
                <Card.Content>
                  <Field>
                    <Control iconLeft iconRight>
                      <Input  
                      // enabled={loading}
                      type="email" placeholder="Email" onChange={(e)=>{setUser2(e.target.value)}}/>
                      <Icon size="small" align="left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Icon>
                      <Icon size="small" align="right">
                        <FontAwesomeIcon icon={faCheck} />
                      </Icon>
                    </Control>
                  </Field>
                  <Field>
                    <Control iconLeft>
                      <Input
                       
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword2(e.target.value)}
                        value={password2}
                      />
                      <Icon size="small" align="left">
                        <FontAwesomeIcon icon={faLock} />
                      </Icon>
                    </Control>
                  </Field>
                  <Field>
                    <Control iconLeft>
                      <Input
                      
                        type="email"
                        placeholder="Send Email Verification"
                        onChange={e => setSendEmailVerification(e.target.value)}
                        value={sendEmailVerification}
                      />
                      <Icon size="small" align="left">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Icon>
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <Label>
                        <Checkbox 
                        // disabled={loading}
                         /> Remember me
                      </Label>
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <Button
                        // state={loading ? "loading" : undefined}
                        onClick={() => {
                          signUpHandler()
                          // setLoading(true);
                        }}
                        color="primary"
                      >
                        SignUp
                      </Button>
                    </Control>
                  </Field>
                </Card.Content>
              </Card>
            </Container>
          </Level.Item>
        </Level>
      );
    };



    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/SignUpForm">
          <SignUpForm/>
        </Route>
        <Route exact path="/">
         <LoginForm/>
        </Route>
      </Switch>
    </BrowserRouter>

      
        
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

        
         




        


      connection.on("ReceiveMessage", (user, message,id,isAdmin) => {



         //store in redux persistance here
        // setMessages((messages) => [...messages, { user, message } ])
      // dispatch(messageSave([...messages, { user, message } ]))

        // dispatch(messageSave([...reduxMessages, { user, message,id } ]))
        dispatch(messageSave([...reduxMessages, { user, message,id } ]))
        if(isAdmin === "Admin") {
         setAdminResponder(message)}
         else if (isAdmin === "Client"){
          setClientResponder(message)}

        // console.log(`this is the message ${message}`)
        //  console.log(`the user is  ${user}`)

        
   
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


  const sendMessage = async (isAdmin,message) => {
    try {
      await connection.invoke("SendMessage", isAdmin,message); 
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

  
  const getId = async (message) => {
    try {
      await connection.invoke("GetId", message); 
      console.log(`worked getid ${message}`)
      
    } catch (e) {
      console.log(e);
    }
  };




  const  ChatContent=()=> {



    const messagesEndRef = useRef(null);
    const chatItms = [
      {
        key: 1,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Hi Ali, How are you?",
      },
      {
        key: 2,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        type: "other",
        msg: "I am fine.",
      },
      {
        key: 3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        type: "other",
        msg: "What about you?",
      },
      {
        key: 4,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "I am fine.",
      },
  
    ];
  
    const [chat, setChat] = useState(reduxMessages);

    const [msg, setMsg] = useState();
    const activePointRef = useRef(msg);


    // const scrollToBottom = () => {
    //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    // };
  
    
  
    const onStateChange = (e) => {
      setMsg(e.target.value);
      activePointRef.current = e.target.value;
      // console.log(`aaaaaaaaaaaaaaaa ${msg}`);
      // console.log(`aaaaaaaaaaaaaaaaaaaaaaa ${chat.length}`);
    };
  
  
  
    // const abc = (e) => {
  
  
  
  
  
    //   console.log(e);
    //   console.log(`ffffffffffffffff is ${activePointRef.current}`);
    //   console.log(`ffffffffffffffff is ${chat.length}`);
    //   console.log(`the value is ${JSON.stringify(reduxMessages)}`)

    //   if (e.keyCode == 13) {
        
    //     let _chat = [ ...chat]
    //     _chat.push({
    //       user:"admin",
    //       message: "okay",
    //     });
    //     setChat(_chat)
        
    //     dispatch(messageSave(_chat))
    //     console.log(reduxMessages)

    //     // setChat([...chatItms]);
    //     // scrollToBottom();
    //     setMsg("");
    //     activePointRef.current = "";
    //   }
    // };
    // useEffect(() => {
    //   window.addEventListener("keydown", (e) => {
    //     abc(e);
    //   });
  
    //   // scrollToBottom();
    // }, []);
  


    const sendButtonHandler = ()=>{
        // let _chat = []
        //       _chat.push({
        //       user:"admin",
        //       message: msg
        //     });

        //     dispatch(messageSave(_chat))

        //     setMsg("");

 sendMessage("Admin",msg)
            
          }
        
    
    




    const messageRef = useRef();

    useEffect(() => {

        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight});
        }
    }, [messages]);
  


    const generateDownload = ()=>{

      const toExport = []

      {reduxMessages.map((m) =>
    
        toExport.push(`${m.message} \n ${m.user} \n \n`)
    
    )}
  

      
    var blob = new Blob([toExport], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "messages");

    }

    
    return (
      
      <div className="main__chatcontent">
      {newBox}
      <button   className='btn8'  variant='danger' onClick={generateDownload}>Download Messages</button>

        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <p>Ali Ahmad</p>

            </div>
          </div>
  
          <div className="blocks">
            <div className="settings"></div>
          </div>
        </div>
        <div className="content__body">

          {/* <div className="chat__items">
          {reduxMessages.map((itm, index) => {
            console.log(`the value is ${JSON.stringify(reduxMessages)}`)
              return (
                <div
                style={{ animationDelay: `0.8s` }} 
              >
          
                <div className={itm.user==="admin"? 'chat__item__content' : 'chat__item__content_client'}>
                  <div className="chat__msg">{itm.message}</div>
                </div>


              </div>
  
  
              );

            })}


  
            
            <div ref={messagesEndRef} />
         
            
          </div> */}
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <input
              type="text"
              placeholder="Type a message here"
              onChange={onStateChange}
              value={msg}
            />
     <FontAwesomeIcon  className ="inputIcon" onClick={sendButtonHandler} icon={faArrowRight} />
          </div>
        </div>
      </div>
    );
  }
  

  
  const  CustomChatContent=()=> {

   

    const messagesEndRef = useRef(null);
   
  
    const [chat, setChat] = useState(reduxMessages);

    const [msg, setMsg] = useState();
    const activePointRef = useRef(msg);

 

useEffect(() => {
 
  let _chat = []
  _chat.push({
  user:"admin",
  message: msg

});


dispatch(messageSave(_chat))

 
}, [adminResponder,setAdminResponder]);



   
        
    return (
      

  
          <div className="chat__items">
          {reduxMessages.map((itm, index) => {
            // console.log(`the value is ${JSON.stringify(reduxMessages)}`)
              return (
                  <div >{itm.message}</div>
  
              );
            })}

  </div>

        
    );
  }
  

  








   const ChatList=()=> {
    const  allChatUsers = [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        id: 1,
        name: "Ali Ahmad",
        active: true,
        isOnline: true,
      },
      {
        image:
          "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        id: 2,
        name: "Hasan Hawei",
        active: false,
        isOnline: false,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
        id: 3,
        name: "Mohamemd Hachem",
        active: false,
        isOnline: false,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
        id: 4,
        name: "Abas Khansa",
        active: false,
        isOnline: true,
      },
     
    ];
   
  
    const [allChats,setAllChats] = useState(allChatUsers)
  
  
  
    const selectChat = (e) => {
      for (
        let index = 0;
        index < e.currentTarget.parentNode.children.length;
        index++
      ) {
        e.currentTarget.parentNode.children[index].classList.remove("active");
      }
      e.currentTarget.classList.add("active");
    };




    const [newChat , setNewChat] =useState(<ChatContent/>)


   


  
      return (
        <div className="main__chatlist">
          <div className="chatlist__heading">
            <h2>Chats</h2>
          </div>
          <div className="chatList__search">
            <div className="search_wrap">
              <input type="text" placeholder="Search Here" required />
              <button className="search-btn">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div className="chatlist__items">
            {allChats.map((item, index) => {
              return (
                <div
                key={item.id}
                style={{ animationDelay: index + 1 }}
                onClick={()=>{setNewBox(newBox=>[...newBox , 
                  <div> 
                  <ChatContent /></div>
                 
               ])}}   
               
               className='chatlist__item' >
                  <div className="avatar">
                <div className="avatar-img">
                </div>
                <span className="active"></span>
              </div>
        
                <div className="userMeta">
                  <p>{item.name}</p>
                  <span className="activeTime">32 mins ago</span>
                </div>
              </div>
  
              );
  
              
            })}
  
  
  
  
  
          </div>
          </div>
  
      );
   
  }
  









  return (
    <div >
     

      { 
     
        !connection ? (
          <div>
          <SignUpForm joinRoom={joinRoom} /> 
          </div>
        ) : (
                 
                  <div>
               <Widget
                   handleNewUserMessage={handleNewUserMessage}
                   launcher={(handleToggle) => getCustomLauncher(handleToggle)}
                   title="Plugit Chat Support"
                   subtitle="Welcome To Yoonit Customer Service"
                   senderPlaceHolder="press send button or enter to send a message"

                 /> 

<div className="__main">
<div className="main__chatbody">
<ChatList/>

  <ChatContent/>
  </div>
 </div>


                 </div>


          
        ) 
      }
    </div>
  );
};

export default App;

// in case we want to add the admin panel here

// <div className="__main">
// <div className="main__chatbody">
//   </div>
//   </div>