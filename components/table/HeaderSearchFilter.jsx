import { Input } from "../ui/input";

export const HeaderSearchFilter = ({ title, table, id }) => {
  return (
    <>
      <div className="group relative">
        <span className="text-shade-500 absolute start-1 top-0 z-10 block -translate-y-1/2 text/xs bg-white px-1 rounded-md">
          {title}
        </span>
        <Input
          placeholder={`Buscar`}
          value={table.getColumn(id)?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn(id)?.setFilterValue(event.target.value)
          }
          className="h-9 w-[150px] lg:w-[250px] my-3"
        />
      </div>
    </>
  );
};
