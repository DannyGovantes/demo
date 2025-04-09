"use client";
import { DatePicker, InputField, SelectInput } from "@/components/input";
import { EditableTable } from "@/components/table";
import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
const tableData = [
  {
    id: 1,
    lineaCaptura: "16146130XXXXXXXXX",
    aplicacionEmisora: "DPA's",
    fechaSolicitud: "20-feb-25",
    fechaEmision: "20-feb-25",
    fechaVigencia: "22-mar-25",
    rfcContribuyente: "ABAAyymmddHHd",
    bancoPago: "BBVA",
    fechaPago: "25-mar-25",
    importe: 1200.0,
  },
  {
    id: 2,
    lineaCaptura: "16146130XXXXXXXXX",
    aplicacionEmisora: "DPA's",
    fechaSolicitud: "14-ene-25",
    fechaEmision: "15-ene-25",
    fechaVigencia: "14-feb-25",
    rfcContribuyente: "AVAAyymmddHHd",
    bancoPago: "BBVA",
    fechaPago: "17-feb-25",
    importe: 450.0,
  },
  {
    id: 3,
    lineaCaptura: "16146130XXXXXXXXX",
    aplicacionEmisora: "PAGMIN",
    fechaSolicitud: "28-ene-24",
    fechaEmision: "28-ene-24",
    fechaVigencia: "27-feb-24",
    rfcContribuyente: "ADAAyymmddHHd",
    bancoPago: "BBVA",
    fechaPago: "01-mar-24",
    importe: 850.0,
  },
  {
    id: 4,
    lineaCaptura: "16146130XXXXXXXXX",
    aplicacionEmisora: "DPA's",
    fechaSolicitud: "19-ene-25",
    fechaEmision: "19-enn-25",
    fechaVigencia: "18-feb-25",
    rfcContribuyente: "AEAAyymmddHHd",
    bancoPago: "BBVA",
    fechaPago: "21-feb-25",
    importe: 2370.0,
  },
  {
    id: 5,
    lineaCaptura: "16146130XXXXXXXXX",
    aplicacionEmisora: "PAGMIN",
    fechaSolicitud: "08-feb-25",
    fechaEmision: "08-feb-25",
    fechaVigencia: "10-mar-25",
    rfcContribuyente: "AABAyymmddHHd",
    bancoPago: "BBVA",
    fechaPago: "13-mar-25",
    importe: 513.0,
  },
];
export default function EstadisticosPage() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "lineaCaptura",
        header: "Línea de captura",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "aplicacionEmisora",
        header: "Aplicación Emisora",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "fechaSolicitud",
        header: "Fecha Solicitud ",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "fechaEmision",
        header: "Fecha Emisión ",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "fechaVigencia",
        header: "Fecha Vigencia",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "rfcContribuyente",
        header: "RFC Contribuyente ",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "bancoPago",
        header: "Banco Pago ",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "fechaPago",
        header: "Fecha Pago ",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
      {
        accessorKey: "importe",
        header: "Importe",
        cell: ({ getValue }) => <>{getValue()}</>,
      },
    ],
    []
  );
  return (
    <section className="container py-2">
      <h1 className="font-bold">Estadísticos</h1>
      <h2>Estado líneas de captura</h2>

      <div className="d-flex flex justify-between items-end gap-3 py-4">
        <SelectInput placeholder={"BBVA"} label={"Institución Financiera:"} />

        <div className=" d-flex flex gap-3">
          <DatePicker label="Fecha de Inicio:" />
          <DatePicker label="Fecha de Final:" />
        </div>
      </div>
      <div className="d-flex flex gap-3 py-4">
        <InputField label={"Línea de Captura:"} />
        <InputField label={"RFC:"} />
        <InputField label={"Aplicación:"} />
      </div>
      <Button>Generar Reporte </Button>
      <div className="py-4">
        <EditableTable columns={columns} data={tableData} />
      </div>
    </section>
  );
}
