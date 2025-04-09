"use client";
import { DatePicker, SelectInput } from "@/components/input";
import { RadialGroup } from "@/components/input/RadialGroup";
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
import { File, FileX } from "lucide-react";
const tableData = [
  {
    id: 1,
    dependencia: "Secretaría de Educación",
    lineasCaptura: 213,
    datosInforme: "Ordinario",
  },
  {
    id: 2,
    dependencia: "Agricultura, Ganadería y Desarrollo Rural",
    lineasCaptura: 76,
    datosInforme: "Complementario",
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

export default function EstadisticosPagadasPage() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "dependencia",
        header: "Dependencia",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "lineasCaptura",
        header: "Líneas de captura",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "datosInforme",
        header: "Datos de Informe",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
    ],
    []
  );
  return (
    <>
      <section className="py-4">
        <h1 className="font-bold">Estadístico LÍneas de Captura Pagadas</h1>
        <h2>Periodo Lineas de Captura Pagadas</h2>
        <div className="d-flex flex gap-3 py-4 items-end">
          <div className="d-flex flex gap-3">
            <DatePicker label="Fecha de Inicio:*" />
            <DatePicker label="Fecha de Fin:*" />
          </div>
          <RadialGroup
            options={[
              { id: 1, value: "dependencia", displayValue: "Por Dependencia" },
              { id: 2, value: "global", displayValue: "Global" },
            ]}
          />
          <SelectInput label={"Datos de informe"} placeholder={"Seleccionar"} />
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
