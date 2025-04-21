import React from "react";
import Link from "next/link";
// import { Icons } from "@/components/icons";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { House } from "lucide-react";
import Image from "next/image";
const components = [
  {
    title: "Estadísticos",
    href: "/estadisticos",
    description: "Pantalla para el estado de líneas de captura.",
  },
  {
    title: "Estadísticos Pagadas",
    href: "/estadisticos/pagadas",
    description: "Pantalla para el estado de líneas de captura pagadas.",
  },
  {
    title: "Estadísticos Pagadas Modal",
    href: "/estadisticos/pagadas/1",
    description:
      "Pantalla para el estado de líneas de captura pagadas (con modal).",
  },
  {
    title: "Estadísticos Desfase",
    href: "/estadisticos/desfase",
    description: "Pantalla para el estado de líneas de captura desfase.",
  },
  {
    title: "Estadísticos Desfase Modal",
    href: "/estadisticos/desfase/1",
    description:
      "Pantalla para el estado de líneas de captura desfase (con modal).",
  },
];
const components2 = [
  {
    title: "Trámites",
    href: "/tramites",
    description: "Pantalla para el control de trámites.",
  },
  {
    title: "Trámites Activos",
    href: "/tramites/activos",
    description: "Pantalla para el periodo fecha trámites activos.",
  },
  {
    title: "Trámites Activos Modal",
    href: "/tramites/activos/1",
    description: "Pantalla para el periodo fecha trámites activos con (modal).",
  },
  {
    title: "Trámites Baja",
    href: "/tramites/baja",
    description: "Pantalla para el periodo de baja de trámites.",
  },
  {
    title: "Trámites Baja Modal",
    href: "/tramites/baja/1",
    description: "Pantalla para el periodo de baja de trámites (modal).",
  },
];
const components3 = [
  {
    title: "Bitácora",
    href: "/bitacora",
    description: "Pantalla para el periodo de acceso al sistema.",
  },
  {
    title: "Bitácora con Modal",
    href: "/bitacora/1",
    description: "Pantalla para el periodo de acceso al sistema (modal).",
  },
  {
    title: "Catálogo de Trámites",
    href: "/catalogo/tramites",
    description: "Pantalla para el catálogo de trámites.",
  },
  {
    title: "Catálogo de Trámites Actualización",
    href: "/catalogo/tramites/1",
    description: "Pantalla para el catálogo de trámites (Actualización).",
  },
];

export function Navbar() {
  return (
    <>
      <header className="bg-slate-100 sticky top-0 z-50">
        <div className="max-w-[1110px] mx-auto bg-slate-100">
          <div className="max-w-[1110px] mx-auto  bg-shade-100">
            <div className="flex items-end justify-between ">
              <div className="w-/12 text-left">
                {/* <a href="index.html" target="_self">
                  <img
                    src={"/gob.svg"}
                    className="img-fluid w-full max-w-96 max-h-16 my-1"
                    alt="SHCP | SAT"
                    title="SHCP | SAT"
                  />
                </a> */}
              </div>
              <div className="w-12/12 text-right">
                <a href="index.html" target="_self">
                  <img
                    src={"/logo_shcp_sat.svg"}
                    className="img-fluid w-full max-w-96 max-h-16 my-1"
                    alt="SHCP | SAT"
                    title="SHCP | SAT"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shade-200">
          <div className="max-w-[1110px] mx-auto ">
            <div className="flex items-center justify-between py-3">
              {/* Left Section */}
              <div className="col-md-3 text-xs-center text-sm-center text-md-left"></div>

              <div className="col-md-6 mainTitInter text-xs-center text-sm-center">
                <h1 className="text-3xl font-bold">
                  Derechos, Productos y Aprovechamiento Federales con Línea de
                  Captura
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <NavigationMenu className={"w-full"}>
        <NavigationMenuList className={"d-flex justify-between"}>
          <div className="ml-10">
            <House />
          </div>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Obtener formato de pago
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <span
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Demo de Presentación DPAs
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Este es un demo desarrollado con propósitos de
                        presentación y carece de funcionalidad
                      </p>
                    </span>
                  </NavigationMenuLink>
                </li>
                <ListItem href="" title="Ruta 1">
                  Este es un ejemplo de ruta.
                </ListItem>
                <ListItem href="" title="Ruta 2">
                  Este es otro ejemplo de ruta
                </ListItem>
                <ListItem href="" title="Ruta 3">
                  Más ejemplos de rutas.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Consulta pagos DPA&apos;s
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components2.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Estadísticos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Administración</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components3.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
