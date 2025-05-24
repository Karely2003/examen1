'use client';
import { useContextGasto } from '@/app/Provider/ProviderGastos';
import { useState } from 'react';

export default function GastoPage() {
  const { agregarGasto, gastos } = useContextGasto();
  const [categoria, setCategoria] = useState('');
  const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState('');

  function guardar() {
    if (categoria && monto && fecha) {
      agregarGasto({ categoria, monto, fecha });
    }
  }

  return (
    <div className='container mt-5'>
      <h2>Registro de Gastos</h2>
      <input className='form-control mb-2' placeholder='Categoría' onChange={(e) => setCategoria(e.target.value)} />
      <input className='form-control mb-2' type='number' placeholder='Monto' onChange={(e) => setMonto(parseFloat(e.target.value))} />
      <input className='form-control mb-2' type='date' onChange={(e) => setFecha(e.target.value)} />
      <button className='btn btn-primary' onClick={guardar}>Guardar Gasto</button>

      <div className='mt-4'>
        <h4>Gastos Registrados</h4>
        <ul className='list-group'>
          {gastos.map((gasto, index) => (
            <li key={index} className='list-group-item'>
              {gasto.fecha} - {gasto.categoria} - L {gasto.monto}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
