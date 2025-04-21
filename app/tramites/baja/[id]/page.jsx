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
    dependencia:
      "Agencia Nacional de Seguridad Industrial y Protección al Medio Ambiente del Sector Hidrocarburos",
    tramitesBaja: 12,
  },
  {
    id: 2,
    dependencia: "Agencia Reguladora del Transporte Ferroviario",
    tramitesBaja: 2,
  },
  {
    id: 3,
    dependencia: "Archivo General de la Nación",
    tramitesBaja: 7,
  },
  {
    id: 4,
    dependencia: "Auditoría Superior de la Federación",
    tramitesBaja: 1,
  },
  {
    id: 5,
    dependencia:
      "Autoridad Federal para el Desarrollo de las Zonas Económicas Especiales",
    tramitesBaja: 2,
  },
  {
    id: 6,
    dependencia: "Banco del Ahorro Nacional y Servicios Financieros",
    tramitesBaja: 6,
  },
  {
    id: 7,
    dependencia: "Banco Nacional de Obras y Servicios Públicos, S.N.C.",
    tramitesBaja: 1,
  },
  {
    id: 8,
    dependencia: "Caminos y Puentes Federales de Ingresos y Servicios Conexos",
    tramitesBaja: 1,
  },
  {
    id: 9,
    dependencia: "Canal 11",
    tramitesBaja: 4,
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
export default function TramitesBajaPage() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "dependencia",
        header: "Dependencia",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "tramitesBaja",
        header: "Tramites dados de baja",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
    ],
    []
  );
  return (
    <>
      <section className="py-4">
        <h1 className="font-bold">
          Estadístico y Detalle Trámites dados de baja
        </h1>
        <h2>Periodo de Baja de Trámites</h2>
        <div className="d-flex flex justify-between gap-3 py-4">
          <div className="d-flex flex gap-3">
            <DatePicker label="Fecha de Inicio:*" />
            <DatePicker label="Fecha de Fin:*" />
          </div>

          <Button> Generar estadisticos</Button>
        </div>

        <div className="py-4">
          <EditableTable columns={columns} data={tableData} hasPagination />
        </div>
      </section>
      <section>
        <div className="text-end">
          <Button>Mostrar estadisticos</Button>
        </div>
      </section>
      <Dialog open={true}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Trámites Dados de Baja por Dependencia</DialogTitle>
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
