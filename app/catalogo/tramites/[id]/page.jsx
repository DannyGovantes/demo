"use client";
import { SelectInput } from "@/components/input";
import { EditableTable } from "@/components/table";
import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Modal } from "./Modal";
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
        header: "Trámite Dependencia",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "variante",
        header: "Variante",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "nombreTramite",
        header: "Nombre Trámite",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "tramitePrivado",
        header: "Trámite Privado",
        cell: ({ getValue }) => <>{getValue()}</>,
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
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "action",
        header: "Editar | Eliminar",
        cell: ({ getValue }) => <>Test</>,
      },
    ],
    []
  );
  return (
    <>
      <section>
        <h1 className="font-bold">Catálogo de trámites</h1>
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
      <Dialog open={true}>
        <DialogContent className="max-w-screen-lg h-full overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>Líneas de Captura Pagadas por Dependencia</DialogTitle>
          </DialogHeader>
          <Modal />
        </DialogContent>
      </Dialog>
    </>
  );
}
