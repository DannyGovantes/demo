"use client";
import { DatePicker, SelectInput } from "@/components/input";
import { RadialGroup } from "@/components/input/RadialGroup";
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
    tramitesActivos: 12,
  },
  {
    id: 2,
    dependencia: "Agencia Reguladora del Transporte Ferroviario",
    tramitesActivos: 2,
  },
  {
    id: 3,
    dependencia: "Archivo General de la Nación",
    tramitesActivos: 7,
  },
  {
    id: 4,
    dependencia: "Auditoría Superior de la Federación",
    tramitesActivos: 1,
  },
  {
    id: 5,
    dependencia:
      "Autoridad Federal para el Desarrollo de las Zonas Económicas Especiales",
    tramitesActivos: 2,
  },
  {
    id: 6,
    dependencia: "Banco del Ahorro Nacional y Servicios Financieros",
    tramitesActivos: 6,
  },
  {
    id: 7,
    dependencia: "Banco Nacional de Obras y Servicios Públicos, S.N.C.",
    tramitesActivos: 1,
  },
  {
    id: 8,
    dependencia: "Caminos y Puentes Federales de Ingresos y Servicios Conexos",
    tramitesActivos: 1,
  },
  {
    id: 9,
    dependencia: "Canal 11",
    tramitesActivos: 4,
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
export default function TramitesActivosPage() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "dependencia",
        header: "Dependencia",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "tramitesActivos",
        header: "Trámites activos",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
    ],
    []
  );
  return (
    <>
      <section className="py-4">
        <h1 className="font-bold">Estadístico Detalle Trámites Activos</h1>
        <div className="d-flex flex justify-between py-4">
          <div className="d-flex flex gap-3">
            <DatePicker label="Fecha de Inicio:*" />
            <DatePicker label="Fecha de Fin:*" />
          </div>

          <RadialGroup
            options={[
              {
                id: 1,
                value: "fechaIncorporacion",
                displayValue: "Fecha de Incorporación",
              },
              {
                id: 2,
                value: "fechaVigencia",
                displayValue: "Fecha de Vigencia",
              },
            ]}
          />
          <div className="d-flex flex">
            <Button> Generar Estadísticos</Button>
          </div>
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
              Trámites Activos por Fecha de Incorporación
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
