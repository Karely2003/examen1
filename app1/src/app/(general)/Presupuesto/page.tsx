'use client';
import { useContextGasto } from '@/app/Provider/ProviderGastos';
import { useState } from 'react';

export default function PresupuestoPage() {
  const { presupuesto, setPresupuesto, gastos } = useContextGasto();
  const [nuevo, setNuevo] = useState(0);

  const totalGastado = gastos.reduce((acc, g) => acc + g.monto, 0);
  const porcentaje = presupuesto > 0 ? (totalGastado / presupuesto) * 100 : 0;

  function definirPresupuesto() {
    setPresupuesto(nuevo);
  }

  return (
    <div className='container mt-5'>
      <h2>Presupuesto Mensual</h2>
      <input type='number' className='form-control mb-2' placeholder='Ingrese presupuesto' onChange={(e) => setNuevo(parseFloat(e.target.value))} />
      <button className='btn btn-success mb-3' onClick={definirPresupuesto}>Definir Presupuesto</button>

      <div>
        <h5>Presupuesto: L {presupuesto}</h5>
        <h5>Gastado: L {totalGastado}</h5>
        {
          porcentaje >= 100 ? <div className='alert alert-danger'>Has superado el límite del presupuesto, debes ajustar gastos</div> :
          porcentaje >= 80 ? <div className='alert alert-warning'>¡Alerta! Estás alcanzando el límite del presupuesto</div> : null
        }
      </div>
    </div>
  );
}
