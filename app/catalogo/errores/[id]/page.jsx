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
    id: "1234",
    tipoValidacion: "Validación de Estructura Excel",
    descripcionError:
      "El archivo solo cuenta con encabezado y no contiene información válida",
  },
  {
    id: "2345",
    tipoValidacion: "Validación de Estructura Excel",
    descripcionError:
      "El archivo contiene información incompleta, verifique la(s) siguiente(s) fila(s): [número]",
  },
  {
    id: "3456",
    tipoValidacion: "Validación de Estructura Excel",
    descripcionError:
      "El rango de columnas no es correcto, por favor complete la información",
  },
  {
    id: "5678",
    tipoValidacion: "Validaciones de Registro",
    descripcionError: "Las siglas no existen en el catálogo de dependencias",
  },
  {
    id: "7890",
    tipoValidacion: "Validaciones de Registro",
    descripcionError: "Ya existen registros con los datos del archivo",
  },
  {
    id: "8901",
    tipoValidacion: "Validaciones de Obligatoriedad",
    descripcionError: "El concepto debe ser obligatorio",
  },
  {
    id: "9012",
    tipoValidacion: "Validaciones de Obligatoriedad",
    descripcionError:
      "Valide que los conceptos sean obligatorios con valor (S)",
  },
  {
    id: "9013",
    tipoValidacion: "Validaciones de Obligatoriedad",
    descripcionError: "Al menos un concepto debe ser obligatorio con valor (S)",
  },
  {
    id: "9014",
    tipoValidacion: "Siglas y Nombres",
    descripcionError:
      "Deben ser letras en mayúsculas, longitud de 2 a 20 y sin espacios",
  },
  {
    id: "9015",
    tipoValidacion: "Siglas y Nombres",
    descripcionError: "Longitud de 10 a 400 caracteres",
  },
];

export default function CatalogoErrores() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID Error",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "tipoValidacion",
        header: "Tipo de Validación",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "descripcionError",
        header: "Descripción del Error",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "editar",
        header: "Editar",
        cell: ({ getValue }) => <>Test</>,
      },
    ],
    []
  );
  return (
    <>
      <section>
        <h1>Catálogo de Errores</h1>
        <Button>+ Nuevo</Button>
        <div>
          <EditableTable columns={columns} data={tableData} hasPagination />
        </div>
      </section>
      <Dialog open={true}>
        <DialogContent className="max-w-screen-lg">
          <DialogHeader>
            <DialogTitle>Registrar/Actualizar Errores</DialogTitle>
          </DialogHeader>
          <Modal />
        </DialogContent>
      </Dialog>
    </>
  );
}
