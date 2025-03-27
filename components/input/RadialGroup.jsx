import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadialGroup({ options }) {
  return (
    <RadioGroup defaultValue="comfortable">
      {options.length > 0
        ? options?.map(({ id, value, displayValue }) => {
            return (
              <div key={id} className="flex items-center space-x-2">
                <RadioGroupItem value={value} id={id} />
                <Label htmlFor={id}>{displayValue}</Label>
              </div>
            );
          })
        : null}
    </RadioGroup>
  );
}
