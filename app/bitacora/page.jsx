"use client";
import { DatePicker } from "@/components/input";
import { EditableTable } from "@/components/table";
import { Button } from "@/components/ui/button";
import { File, FileX } from "lucide-react";
import React, { useMemo } from "react";

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
        <div className="d-flex flex justify-between items-end gap-3 py-4 items-end">
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
      <section className="py-4">
        <div className="flex justify-end items-center gap-3">
          <Button>Mostrar Estadísticos</Button>
          <File />
          <FileX />
        </div>
      </section>
    </>
  );
}
