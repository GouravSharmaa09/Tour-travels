import React, { useState, useRef, useEffect } from 'react';

const FAQS = [
  {
    q: 'What is Shree Karni Tourism?',
    a: 'Shree Karni Tourism offers Rajasthan tour packages, taxi services, and custom travel experiences across Rajasthan.'
  },
  {
    q: 'How can I book a tour package?',
    a: 'You can book a tour package directly from the website by clicking the Book Now button on any package, or contact us via WhatsApp or email.'
  },
  {
    q: 'Do you offer custom itineraries?',
    a: 'Yes! All our packages are flexible and can be customized as per your requirements.'
  },
  {
    q: 'How do I contact support?',
    a: 'You can use the Inquiry Form, WhatsApp chat, or email us at info@shreekarnitourism.com.'
  },
  {
    q: 'What destinations do you cover?',
    a: 'We cover all major destinations in Rajasthan including Jaipur, Jodhpur, Udaipur, Jaisalmer, Pushkar, and more.'
  },
];

export function ChatBotButton({ onClick }) {
  return (
    <button onClick={onClick} style={{ background: '#ff6600', color: 'white', border: 'none', borderRadius: '50%', width: 40, height: 40, boxShadow: '0 2px 8px rgba(0,0,0,0.2)', fontSize: 20, cursor: 'pointer', marginLeft: 12 }} title="Chat with us">
      <span role="img" aria-label="chat">💬</span>
    </button>
  );
}

export function ChatBotWindow({ open, onClose }) {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am Shree Karni chat Bot. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(msgs => [...msgs, { from: 'user', text: input }]);
    // Simple scripted response
    const found = FAQS.find(faq => input.toLowerCase().includes(faq.q.toLowerCase().split(' ')[0]));
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: 'bot', text: found ? found.a : 'Sorry, I can help with info about our tours, packages, and services. Try asking about booking, destinations, or contact.' }
      ]);
    }, 700);
    setInput('');
  }

  function handleFAQClick(faq) {
    setMessages(msgs => [...msgs, { from: 'user', text: faq.q }]);
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: 'bot', text: faq.a }
      ]);
    }, 700);
  }

  if (!open) return null;
  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 4000 }}>
      <div style={{ width: 320, height: 420, background: 'white', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ background: '#ff6600', color: 'white', padding: '12px 16px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Shree Karni Bot
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', fontSize: 22, cursor: 'pointer' }}>&times;</button>
        </div>
        <div style={{ flex: 1, padding: 12, overflowY: 'auto', background: '#f8f5f0' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ marginBottom: 8, textAlign: msg.from === 'bot' ? 'left' : 'right' }}>
              <div style={{ display: 'inline-block', background: msg.from === 'bot' ? '#fff' : '#ff6600', color: msg.from === 'bot' ? '#333' : 'white', borderRadius: 16, padding: '8px 14px', maxWidth: 220, fontSize: 15 }}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div style={{ borderTop: '1px solid #eee', padding: 8, background: '#fafafa' }}>
          <form onSubmit={handleSend} style={{ display: 'flex', gap: 6 }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              style={{ flex: 1, borderRadius: 8, border: '1px solid #ccc', padding: '6px 10px', fontSize: 15 }}
            />
            <button type="submit" style={{ background: '#ff6600', color: 'white', border: 'none', borderRadius: 8, padding: '0 16px', fontWeight: 'bold', fontSize: 15 }}>Send</button>
          </form>
          <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {FAQS.map((faq, idx) => (
              <button key={idx} onClick={() => handleFAQClick(faq)} style={{ background: '#eee', border: 'none', borderRadius: 8, padding: '4px 10px', fontSize: 13, cursor: 'pointer' }}>{faq.q}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// For backward compatibility
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  return <>
    <ChatBotButton onClick={() => setOpen(true)} />
    <ChatBotWindow open={open} onClose={() => setOpen(false)} />
  </>;
} 