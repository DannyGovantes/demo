"use client";
import { DatePicker } from "@/components/input";

import { EditableTable } from "@/components/table";
import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
import { Bar, BarChart } from "recharts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChartContainer } from "@/components/ui/chart";
const tableData = [
  {
    id: 1,
    totalLineas: 4,
    desfaseDias: 1,
  },
  {
    id: 2,
    totalLineas: 5,
    desfaseDias: 3,
  },
  {
    id: 3,
    totalLineas: 12,
    desfaseDias: 2,
  },
  {
    id: 4,
    totalLineas: 15,
    desfaseDias: 5,
  },
  {
    id: 5,
    totalLineas: 18,
    desfaseDias: 8,
  },
];
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
};
export default function EstadisticosDesfasePage() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "totalLineas",
        header: "Total Líneas de Captura",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "desfaseDias",
        header: "Desfase (días)",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
    ],
    []
  );
  return (
    <>
      <section className="py-4">
        <h1 className="font-bold">Estadístico Desfase Fecha de Pago</h1>
        <h2>Periodo de Fechas de Registro</h2>
        <div className="d-flex flex justify-between py-4 items-end">
          <div className="d-flex flex gap-3">
            <DatePicker label="Fecha de Inicio:*" />
            <DatePicker label="Fecha de Fin:*" />
          </div>
          <Button>Generar Estadísticos</Button>
        </div>
        <div className="py-4">
          <EditableTable columns={columns} data={tableData} hasPagination />
        </div>
      </section>
      <section>
        <div className="text-end">
          <Button>Mostrar Estadísticos</Button>
        </div>
      </section>
      <Dialog open={true}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              Desfase en días frente a Total de líneas de captura con desfase de
              pago
            </DialogTitle>
          </DialogHeader>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </DialogContent>
      </Dialog>
    </>
  );
}
