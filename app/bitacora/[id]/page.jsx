"use client";
import { DatePicker } from "@/components/input";
import { EditableTable } from "@/components/table";
import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
import { Bar, BarChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const tableData = [
  {
    id: 1,
    usuario: "Usuario A",
    ultimaFechaAcceso: "01/10/2023",
    productosGenerado: 4,
  },
  {
    id: 2,
    usuario: "Usuario B",
    ultimaFechaAcceso: "24/10/2023",
    productosGenerado: 5,
  },
  {
    id: 3,
    usuario: "Usuario C",
    ultimaFechaAcceso: "02/10/2023",
    productosGenerado: 2,
  },
  {
    id: 4,
    usuario: "Usuario D",
    ultimaFechaAcceso: "01/10/2023",
    productosGenerado: 1,
  },
  {
    id: 5,
    usuario: "Usuario E",
    ultimaFechaAcceso: "02/10/2023",
    productosGenerado: 4,
  },
  {
    id: 6,
    usuario: "Usuario F",
    ultimaFechaAcceso: "15/10/2023",
    productosGenerado: 9,
  },
  {
    id: 7,
    usuario: "Usuario G",
    ultimaFechaAcceso: "12/10/2023",
    productosGenerado: 8,
  },
  {
    id: 8,
    usuario: "Usuario H",
    ultimaFechaAcceso: "24/10/2023",
    productosGenerado: 9,
  },
  {
    id: 9,
    usuario: "Usuario I",
    ultimaFechaAcceso: "02/10/2023",
    productosGenerado: 5,
  },
  {
    id: 10,
    usuario: "Usuario J",
    ultimaFechaAcceso: "23/10/2023",
    productosGenerado: 1,
  },
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
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
export default function BitacoraPage() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "usuario",
        header: "Usuario",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "ultimaFechaAcceso",
        header: "Última Fecha de Acceso",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "productosGenerado",
        header: "Productos Generados",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
    ],
    []
  );
  return (
    <>
      <section className="py-4">
        <h1 className="font-bold">Bitácora de Acceso al Sistema</h1>
        <h2>Periodo Fecha de Acceso al Sistema</h2>
        <div className="d-flex flex justify-between gap-3 py-4 items-end">
          <div className="d-flex flex gap-3">
            <DatePicker label="Fecha de Inicio:*" />
            <DatePicker label="Fecha de Fin:*" />
          </div>

          <Button> Generar Bitácora</Button>
        </div>

        <div className="py-4">
          <EditableTable columns={columns} data={tableData} hasPagination />
        </div>
      </section>

      <Dialog open={true}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Líneas de Captura Pagadas por Dependencia</DialogTitle>
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
