import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputField({
  label,
  disabled,
  placeHolder,
  isHorizontal = false,
}) {
  return (
    <div
      className={`d-flex ${
        isHorizontal ? "flex" : "flex-col"
      } w-full items-center gap-1.5`}
    >
      <Label htmlFor={label}>{label}</Label>
      <Input id={label} disabled={disabled} placeHolder={placeHolder} />
    </div>
  );
}
