'use client';
import React, { useContext, useEffect, useState } from 'react';
import { contextGasto } from '../Contexto/contexGasto';
import { Gasto } from '../Modelos/Gastos';

export default function ProviderGasto({ children }: { children: React.ReactNode }) {
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const url = 'http://localhost:5000/gasto';

  async function cargarGastos() {
    try {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      setGastos(data);
    } catch (error) {
      alert('Error al cargar los gastos');
    }
  }

  async function agregarGasto(gasto: Gasto) {
    try {
      const respuesta = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gasto)
      });
      await respuesta.json();
      alert('Gasto agregado correctamente');
      cargarGastos();
    } catch (error) {
      alert('Error al agregar gasto');
    }
  }

  useEffect(() => {
    cargarGastos();
  }, []);

  return (
    <contextGasto.Provider value={{ presupuesto, setPresupuesto, gastos, agregarGasto, cargarGastos }}>
      {children}
    </contextGasto.Provider>
  );
}

export function useContextGasto() {
  return useContext(contextGasto);
}