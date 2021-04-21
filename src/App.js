import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Loginform from './components/LoginForm';
import './App.css'

const projectID = '0d5f40c9-2140-45e5-b36b-f913e10cee0f';

const App = ()=>{

    if(!localStorage.getItem('username')) return <Loginform />


    return (
        <ChatEngine
          height="100vh"
          projectID={projectID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
      );
    };



export default App;