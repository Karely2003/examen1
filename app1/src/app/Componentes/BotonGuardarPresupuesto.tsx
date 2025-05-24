'use client';
import React from 'react';
import { useContextGasto } from '../Provider/ProviderGastos';

export default function BotonGuardarPresupuesto({ nuevo }: { nuevo: number }) {
  const { setPresupuesto } = useContextGasto();

  return (
    <button className='btn btn-success' onClick={() => setPresupuesto(nuevo)}>
      Guardar Presupuesto
    </button>
  );
}