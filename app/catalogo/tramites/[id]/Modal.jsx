"use client";
import {
  CheckboxInput,
  DatePicker,
  InputField,
  SelectInput,
} from "@/components/input";
import { EditableTable } from "@/components/table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useMemo } from "react";
const dataTable = [
  {
    id: 1,
    dependencia: "ARTF",
    claveTramite: "ARTF-2021-004-004-A",
    variante: "1",
    descripcionTramite: "Revalidación Licencia Federal Digital Ferroviaria",
    estatus: "Prevalidado",
  },
];
const dataTable2 = [
  {
    id: 1,
    aplicaActualizacion: false,
    aplicaRecargos: false,
    aplicaMultaCorreccion: false,
    aplicaCompensacion: false,
    aplicaSaldoFavor: false,
  },
];

export function Modal() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "dependencia",
        header: "Dependencia",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "claveTramite",
        header: "Clave del Trámite",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "variante",
        header: "Variante",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "descripcionTramite",
        header: "Descripción Del Trámite",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "estatus",
        header: "Estatus",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
    ],
    []
  );
  const secondColumns = useMemo(
    () => [
      {
        accessorKey: "aplicaActualizacion",
        header: "Aplica Actualización",
        cell: ({ getValue, row }) => (
          <>
            <CheckboxInput name={row.id} />
          </>
        ),
      },
      {
        accessorKey: "aplicaRecargos",
        header: "Aplica Recargos",
        cell: ({ getValue, row }) => (
          <>
            <CheckboxInput name={row.id} />
          </>
        ),
      },
      {
        accessorKey: "aplicaMultaCorreccion",
        header: "Aplica Multa Corrección",
        cell: ({ getValue, row }) => (
          <>
            <CheckboxInput name={row.id} />
          </>
        ),
      },
      {
        accessorKey: "aplicaCompensacion",
        header: "Aplica Compensación",
        cell: ({ getValue, row }) => (
          <>
            <CheckboxInput name={row.id} />
          </>
        ),
      },
      {
        accessorKey: "aplicaSaldoFavor",
        header: "Aplica Saldo a Favor",
        cell: ({ getValue, row }) => (
          <>
            <CheckboxInput name={row.id} />
          </>
        ),
      },
    ],
    []
  );
  return (
    <>
      <h3>Los campos marcados con asterisco son obligatorios</h3>
      <Separator />
      <h4 className="font-bold">Trámite</h4>
      <EditableTable columns={columns} data={dataTable} />
      <div className="d-flex flex gap-4 items-end">
        <DatePicker label="Fecha de Inicio:" />
        <DatePicker label="Fecha de Fin:" />
        <SelectInput label={"Tipo Vigencia:*"} placeholder={"M-Meses"} />
        <InputField label={"Vigencia:*"} isVertical />
        <CheckboxInput name={"reservado"} label={"Es reservado:"} isVertical />
      </div>
      <Separator />
      <p>Conceptos</p>
      <div className="d-flex flex items-center gap-4">
        <Button>700200</Button> +
      </div>
      <Separator />
      <div className="d-flex flex justify-between gap-4">
        <SelectInput isHorizontal label={"Clave Contable:*"} />
        <SelectInput isHorizontal label={"Agrupador:*"} />
        <SelectInput isHorizontal label={"Tipo Agrupador:*"} />
      </div>
      <InputField isHorizontal label={"Nombre del Monto:*"} />
      <div className="d-flex flex justify-between gap-4">
        <CheckboxInput
          isHorizontal
          label={"Es Obligatorio: "}
          name={"obligatorio"}
        />
        <CheckboxInput isHorizontal label={"Es Variable:"} name={"variable"} />
        <InputField isHorizontal label={"Cuota Unitaria:*"} />
      </div>
      <Separator />
      <div>
        <p>Accesorios:</p>
        <EditableTable columns={secondColumns} data={dataTable2} />
      </div>
      <div className="text-end">
        <Button className="mr-4">Cancelar</Button>
        <Button>Guardar</Button>
      </div>
    </>
  );
}
