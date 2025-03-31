import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

export function SelectInput({ label, placeholder, isHorizontal = false }) {
  return (
    <div
      className={`d-flex ${
        isHorizontal ? "flex" : "flex-col"
      } w-full items-center gap-2`}
    >
      <Label>{label}</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="gestionDocumental">
              Gestión Documental
            </SelectItem>
            <SelectItem value="contratos">Contratos</SelectItem>
            <SelectItem value="administracionProyectos">
              Administración de Proyectos
            </SelectItem>
            <SelectItem value="catalogos">Catálogos</SelectItem>
            <SelectItem value="convenios">Convenios</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
