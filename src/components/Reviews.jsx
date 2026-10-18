import { useState, useEffect } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Замініть "1" на ваш номер варіанта
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Помилка при завантаженні відгуків:', error));
  }, []);

  return (
    <section>
      <h2>Відгуки роботодавців</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {reviews.map(review => (
          <div key={review.id} style={{ padding: '15px', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--text-h)' }}>{review.name}</h4>
            <a href={`mailto:${review.email}`} style={{ fontSize: '14px', color: 'var(--accent)' }}>{review.email}</a>
            <p style={{ marginTop: '10px' }}>{review.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}