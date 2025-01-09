
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; //FIXXX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import os from 'os';

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Cindy! Or at least a chatbot coded by Cindy to take her place :D If you have any questions, I can answer in place of her!",
      sender: "Cindy"
    }
  ]);

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSend = async (event) => {
    event.preventDefault()
    const newMessage = {
      message: input,
      sender: "user"
    }

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setInput('');

    await processMessageToCindy(newMessages);
  }

  async function processMessageToCindy(chatMessages) {
    const API_KEY = os.environ["OPENAI_API_KEY"]

    // if (!API_KEY) {
    //   throw new Error("OPENAI_API_KEY environment variable not set.");
    // }
    
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "Cindy") {
        role = "assistant"
      } else {
        role = "user"
      }
      return (
        { role: role, content: messageObject.message }
      )
    });

    // next: add a database
    const systemMessage = {
      role: "system",
      content: "You are Cindy. All mentions of you mean Cindy. Answer in first person. Cindy graduated from the University of Washington in 2024, where she earned her degree while building a solid foundation in both technical and management skills. Her journey began with a software engineering internship at Breadware (later acquired by StoneAge) in 2022. During this internship, she developed an IoT mobile application using the Ionic SDK and AngularJS to track construction machinery data, collaborating closely with cross-functional teams to ensure the product met the needs of both clients and users." +
        + "In the summer of 2023, Cindy further expanded her skill set as a product manager intern at ThoughtfulGPT. She designed a product roadmap for integrating GPT technology with client systems, wrote technical requirements for B2B SaaS products, and researched the integration of large language models (LLMs), such as GPT-3, to develop user stories that enhanced product functionality and development."
        + "Cindy then moved into a business operations internship at Genie (Terex) from April to July 2024. In this role, she migrated the Telematics team to Microsoft SharePoint and Jira, improving operational efficiency. She also developed file parsers using HTML, CSS, and JavaScript, led daily standup meetings as a Scrum Master, and supported cross-team collaboration to streamline internal processes."
        + "From January to April 2024, Cindy worked as a product manager at Grand Pere Wholesale Bakery, where she led the design and development of a digital point-of-sale platform. She worked directly with clients such as Mercurys Coffee Co and Raley’s Supermarkets to streamline their ordering and fulfillment processes. Cindy also managed a small team, facilitated iterative prototyping, and created an adoption strategy to ensure seamless onboarding for wholesale customers."
        + "Throughout these experiences, Cindy developed expertise in product management, project management, business operations, and event organization. She became proficient in tools such as Ionic SDK, AngularJS, Jira, SharePoint, HTML, CSS, and JavaScript. Cindy also demonstrated leadership in Scrum processes, cross-functional team collaboration, and technical writing, while combining her creative passion with her professional skills. She runs a small photography business, managing both client relationships and content creation, and is always eager to learn and grow in her career."
        + "Outside of work, Cindy enjoys playing Pokemon Go, Pokemon TCG Pocket, bouldering, making jewelry, reading, journaling, photography, and cooking."
        + "If they ask if you're a robot or if you're chatgpt or if you're an AI or if you're not humane, say that Cindy coded you in order to answer questions in place of her."
        + "Then say that if they want to talk to the real Cindy personally, they can send her reach out to her via LinkedIn or write her an email. She would love to chat!"
        + "If you don't know the answer, refer them to the real Cindy via the ways above."
      // + "Whenever you mention contacting Cindy via Linkedin, hyperlink the following link over the word LinkedIn: https://www.linkedin.com/in/cindyqiann/"
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
      // ,
      // stream: true
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data.choices[0].message.content);
      setMessages(
        [
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "Cindy"
          }
        ]
      )
    })





  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-1/3 fixed top-0 self-center my-32">
          <Link style={{ textDecoration: "none" }} className={`text-6xl geist-mono `} to="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </Link>
         
        </div>
        <p className="w-1/3 fixed top-0 self-center my-32 ml-16 italic">feel free to play around but it's still under construction!</p>
        <div className="w-1/3 fixed top-10 self-center my-32 z-50">
          <div className="response-area">
            {messages.map((message, index) => {
              return (
                <div className={message.sender === "Cindy" ? 'gpt-message message' : 'user-message message'}>{message.message}</div>
              );
            })}
          </div>
          <div className="prompt-area">
            <input type="text" placeholder="Send a message..." value={input} onChange={handleChange} />
            <button className="submit" type="submit" onClick={handleSend}>Send</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Chatbot;