'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const route = useRouter();

  function login() {
    if (usuario === 'admin' && clave === 'admin123') {
      route.push('/Presupuesto');
    } else {
      alert('Usuario o clave incorrecta');
    }
  }

  return (
    <div className='container mt-5'>
      <h2>Inicio de Sesión</h2>
      <input className='form-control mb-2' type='text' placeholder='Usuario' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      <input className='form-control mb-2' type='password' placeholder='Clave' value={clave} onChange={(e) => setClave(e.target.value)} />
      <button className='btn btn-primary' onClick={login}>Iniciar Sesión</button>
    </div>
  );
}
