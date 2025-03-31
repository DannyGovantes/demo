"use client";
import { DatePicker, SelectInput } from "@/components/input";
import { RadialGroup } from "@/components/input/RadialGroup";
import { EditableTable, HeaderSearchFilter } from "@/components/table";
import { Button } from "@/components/ui/button";
import { File, FileX } from "lucide-react";
import React, { useMemo } from "react";

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

export default function TramitesActivosPage() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "dependencia",
        header: ({ table, column }) => (
          <>
            <HeaderSearchFilter
              title={"Dependencia"}
              table={table}
              id={column.id}
            />
          </>
        ),
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "tramitesActivos",
        header: "Tramites activos",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
    ],
    []
  );
  return (
    <>
      <section className="py-4">
        <h1 className="font-bold">Estadístico Detalle tramites activos</h1>
        <div className="d-flex flex justify-between py-4 items-end">
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
        <div className="flex justify-end items-center gap-3">
          <Button>Mostrar Estadísticos</Button>
          <File />
          <FileX />
        </div>
      </section>
    </>
  );
}
