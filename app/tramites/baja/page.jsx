"use client";
import { DatePicker } from "@/components/input";
import { EditableTable, HeaderSearchFilter } from "@/components/table";
import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
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
export default function TramitesBajaPage() {
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
        accessorKey: "tramitesBaja",
        header: "Trámites dados de baja",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
    ],
    []
  );
  return (
    <>
      <section className="py-4">
        <h1 className="font-bold">
          Estadístico y Detalle Trámites Dados de Baja
        </h1>
        <h2>Periodo de Baja de Trámites</h2>
        <div className="d-flex flex justify-between gap-3 py-4">
          <div className="d-flex flex gap-3">
            <DatePicker label="Fecha de Inicio:*" />
            <DatePicker label="Fecha de Fin:*" />
          </div>

          <Button> Generar Estadísticos</Button>
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
    </>
  );
}
