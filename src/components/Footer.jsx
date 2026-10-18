import { useEffect, useState } from 'react';

export default function Footer() {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    // Зчитуємо системну інформацію
    const platform = navigator.platform;
    const agent = navigator.userAgent;
    
    // Зберігаємо дані в localStorage
    localStorage.setItem('os', platform);
    localStorage.setItem('browser', agent);
    
    // Отримуємо дані для відображення
    setSysInfo({
      os: localStorage.getItem('os'),
      browser: localStorage.getItem('browser')
    });
  }, []);

  return (
    <footer>
      <h2>Сертифікати</h2>
      <img 
        src="/Certificate.png" 
        alt="Зображення мого сертифікату." 
        style={{ maxWidth: '100%', height: 'auto' }} 
      />
      <div style={{ marginTop: '20px', padding: '15px', borderTop: '1px solid var(--border)' }}>
        <h4>Системна інформація:</h4>
        <p><strong>ОС:</strong> {sysInfo.os}</p>
        <p><strong>Браузер:</strong> {sysInfo.browser}</p>
      </div>
    </footer>
  );
}