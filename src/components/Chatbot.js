

import React from 'react'; //import React library

export function Chatbot(props) {
  
    return (
        <>
        <div>
            {messages.map((message, index) => (
            <div key={index}>
                <h3>{message.role}</h3>
                <p>{message.content}</p>
            </div>
            ))}
        </div>
        <form>
            <input
            type="text"
            name="input"
            placeholder="Type your message..."
            />
            <button type="submit">
            Send
            </button>
        </form>
        </>
    );

}
