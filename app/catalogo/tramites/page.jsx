"use client";
import { CheckboxInput, SelectInput } from "@/components/input";
import { EditableTable, HeaderSearchFilter } from "@/components/table";
import { Button } from "@/components/ui/button";
import { FilePenLine, Trash2 } from "lucide-react";
import React, { useMemo } from "react";
const tableData = [
  {
    id: 1,
    tramiteDependencia: "ARTF-2021-004-004-A",
    variante: "1",
    nombreTramite: "Revalidación Licencia Federal Digital Ferroviaria",
    tramitePrivado: false,
    fechaInicioVigencia: "22/11/2021",
    fechaFinVigencia: "31/12/2021",
    vigencia: "No",
    estatus: "Prevalidado",
    aprobarEstatus: true,
  },
  {
    id: 2,
    tramiteDependencia: "ARTF-2021-004-002-A",
    variante: "1",
    nombreTramite: "Expedición Licencia Federal Digital Ferroviaria",
    tramitePrivado: false,
    fechaInicioVigencia: "22/11/2021",
    fechaFinVigencia: "31/12/2021",
    vigencia: "No",
    estatus: "Aprobado",
    aprobarEstatus: true,
  },
  {
    id: 3,
    tramiteDependencia: "ARF-2021-004-005-A",
    variante: "1",
    nombreTramite: "Duplicado Licencia Federal Digital Ferroviaria",
    tramitePrivado: false,
    fechaInicioVigencia: "22/11/2021",
    fechaFinVigencia: "31/12/2021",
    vigencia: "No",
    estatus: "Rechazado",
    aprobarEstatus: true,
  },
];

export default function CatalogoTramite() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "tramiteDependencia",
        header: ({ table, column }) => (
          <>
            <HeaderSearchFilter
              title={"Trámite Dependencia"}
              table={table}
              id={column.id}
            />
          </>
        ),
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "variante",
        header: "Variante",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "nombreTramite",
        header: ({ table, column }) => (
          <>
            <HeaderSearchFilter
              title={"Nombre Trámite"}
              table={table}
              id={column.id}
            />
          </>
        ),

        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "tramitePrivado",
        header: "Trámite Privado",
        cell: ({ row }) => (
          <>
            <CheckboxInput name={row.id} />
          </>
        ),
      },
      {
        accessorKey: "fechaInicioVigencia",
        header: "Fecha Inicio Vigencia",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "fechaFinVigencia",
        header: "Fecha Fin Vigencia",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "vigencia",
        header: "Vigencia",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "estatus",
        header: "Estatus",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "aprobarEstatus",
        header: "Aprobar Estatus",
        cell: ({ getValue }) => (
          <>
            <span className={`bg-green-300 text-slate-800 p-1 rounded`}>
              Validar
            </span>
          </>
        ),
      },
      {
        accessorKey: "action",
        header: "Editar | Eliminar",
        cell: ({ getValue }) => (
          <>
            <div className="d-flex flex gap-2">
              <FilePenLine />
              <Trash2 />
            </div>
          </>
        ),
      },
    ],
    []
  );
  return (
    <>
      <section>
        <h1 className="font-bold">Catálogo de Trámites</h1>
        <Button className="my-4">+ Nuevo</Button>
        <div className="d-flex flex gap-3 py-4">
          <SelectInput
            label={"Dependencias"}
            placeholder={"Agencia Reguladora del Transporte Ferroviario"}
          />
          <SelectInput label={"Trámites"} placeholder={"Seleccionar trámite"} />
        </div>
        <div>
          <EditableTable columns={columns} data={tableData} hasPagination />
        </div>
      </section>
    </>
  );
}
