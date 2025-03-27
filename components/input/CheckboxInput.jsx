"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";

export function CheckboxInput({ label, name, isVertical = false }) {
  return (
    <div
      className={`d-flex${
        isVertical ? "flex-col" : "flex"
      } items-center space-x-2`}
    >
      <Label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
      <Checkbox id={name} />
    </div>
  );
}
