import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Автоматична перевірка часу доби (денний час: 07:00 - 21:00)
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Додавання/видалення класу light-mode на <body>
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="resume-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <button 
          onClick={toggleTheme} 
          style={{ 
            padding: '8px 16px', 
            borderRadius: '6px', 
            border: '1px solid var(--border)', 
            backgroundColor: 'var(--code-bg)', 
            color: 'var(--text-h)', 
            cursor: 'pointer' 
          }}
        >
          {theme === 'dark' ? '☀️ Увімкнути денний режим' : '🌙 Увімкнути нічний режим'}
        </button>
      </div>
      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Reviews />
      </main>
      <Footer />
      <ContactForm />
    </div>
  )
}