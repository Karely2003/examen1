'use client';
import React from 'react';
import { useContextGasto } from '../Provider/ProviderGastos';
import { Gasto } from '../Modelos/Gastos';

export default function BotonGuardarGasto({ gasto }: { gasto: Gasto }) {
  const { agregarGasto } = useContextGasto();

  return (
    <button className='btn btn-primary' onClick={() => agregarGasto(gasto)}>
      Guardar Gasto
    </button>
  );
}