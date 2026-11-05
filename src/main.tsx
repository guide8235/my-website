import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>ยินดีต้อนรับเข้าสู่เว็บไซต์</h1>
      <p>เว็บไซต์ทำงานเรียบร้อยแล้ว</p>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
