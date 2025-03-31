"use client";
import { DatePicker } from "@/components/input";

import { EditableTable } from "@/components/table";
import { Button } from "@/components/ui/button";
import { File, FileX } from "lucide-react";
import React, { useMemo } from "react";

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
        <div className="d-flex flex gap-3 justify-between items-end py-4">
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
        <div className="flex justify-end items-center gap-3">
          <Button>Mostrar Estadísticos</Button>
          <File />
          <FileX />
        </div>
      </section>
    </>
  );
}
