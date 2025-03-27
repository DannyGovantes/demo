import { InputField, SelectInput } from "@/components/input";
import { Button } from "@/components/ui/button";
import React from "react";

export function Modal() {
  return (
    <>
      <h3>Los campos marcados con asterisco son obligatorios</h3>
      <div className="d-flex flex gap-4">
        <InputField label={"Id Error:*"} disabled placeHolder={"1234"} />
        <SelectInput
          label={"Tipo de Validación:*"}
          placeholder={"Validación de Estructura Excel"}
        />
        <InputField label={"Descripción:*"} />
      </div>
      <div className="text-end">
        <Button className="mr-4">Cancelar</Button>
        <Button>Guardar</Button>
      </div>
    </>
  );
}
