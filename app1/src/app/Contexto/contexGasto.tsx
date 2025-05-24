import { createContext } from 'react';
import { Gasto } from '../Modelos/Gastos';

export const contextGasto = createContext({
  presupuesto: 0,
  setPresupuesto: (valor: number) => {},
  gastos: [] as Gasto[],
  agregarGasto: (gasto: Gasto) => {},
  cargarGastos: () => {}
});