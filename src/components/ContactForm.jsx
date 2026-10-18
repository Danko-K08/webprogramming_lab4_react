import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2 style={{ marginTop: 0 }}>Зворотний зв'язок</h2>
        {/* Замініть ВАШ_ЕНДПОЙНТ на посилання з Formspree */}
        <form action="https://formspree.io/f/ВАШ_ЕНДПОЙНТ" method="POST" style={formStyle}>
          <input type="text" name="name" placeholder="Ваше ім'я" required style={inputStyle} />
          <input type="email" name="email" placeholder="Ваш Email" required style={inputStyle} />
          <input type="tel" name="phone" placeholder="Номер телефону" required style={inputStyle} />
          <textarea name="message" placeholder="Ваше повідомлення" required rows="4" style={inputStyle} />
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button type="submit" style={btnStyle}>Надіслати</button>
            <button type="button" onClick={() => setIsOpen(false)} style={btnStyle}>Закрити</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
};
const modalStyle = {
  backgroundColor: 'var(--bg)', padding: '25px', borderRadius: '12px', minWidth: '320px', border: '1px solid var(--border)'
};
const formStyle = { display: 'flex', flexDirection: 'column', gap: '12px' };
const inputStyle = {
  padding: '10px', borderRadius: '6px', border: '1px solid var(--border)', backgroundColor: 'var(--code-bg)', color: 'var(--text)', fontFamily: 'var(--sans)'
};
const btnStyle = {
  padding: '10px 15px', borderRadius: '6px', border: 'none', backgroundColor: 'var(--accent)', color: '#fff', cursor: 'pointer', flex: 1, fontFamily: 'var(--heading)'
};