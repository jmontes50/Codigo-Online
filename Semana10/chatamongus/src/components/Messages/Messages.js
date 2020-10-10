import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import './Messages.css';

export default function Messages({messages, name}) {
  return (
    <ScrollToBottom classname="messages">
      {messages.map((message, i) => (
          <Message message={message} key={i} name={name}/>
      ))}
    </ScrollToBottom>
  )
}
