"use client";
import { DatePicker, SelectInput } from "@/components/input";
import { RadialGroup } from "@/components/input/RadialGroup";
import { EditableTable } from "@/components/table";
import { Button } from "@/components/ui/button";
import { File, FileX } from "lucide-react";
import React, { useMemo } from "react";

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
        header: "Lineas de captura",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "datosInforme",
        header: "Datos de informe",
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
          <SelectInput
            label={"Datos de informe:"}
            placeholder={"Seleccionar"}
          />
          <Button>Generar estadísticos</Button>
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
