'use client';
import Link from 'next/link';
import React from 'react';
import { useContextGasto } from '../Provider/ProviderGastos';

export default function NavBar() {
  const { gastos } = useContextGasto();

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>GastosApp</a>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' href='/Presupuesto'>Presupuesto</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/Gastos'>Registrar Gasto</Link>
            </li>
          </ul>
          <span className='navbar-text'>Gastos registrados: {gastos.length}</span>
        </div>
      </div>
    </nav>
  );
}