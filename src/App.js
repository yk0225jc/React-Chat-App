import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'


const App = ()=>{
    return(
        <ChatEngine
            height = "100vh"
            projectID = "d93c642f-81b2-44f6-b87b-d1d27ed80199"
            userName = "JiamengZhou"
            userSecret = "123123" // Password
            renderChatFeed= {(chatAppProps) => <ChatFeed {... chatAppProps} />}
    />
    )
}



export default App;