"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "./ui/checkbox"

export const columns: ColumnDef<Deal>[] = [
  {
    accessorKey: "checkbox",
    header: () => <Checkbox></Checkbox>,
    cell: ({ row }) => {
        
   
        return <Checkbox checked={row.getValue('checkbox')}></Checkbox>
      },
  },
  {
    accessorKey: "add",
    header: "add",
  },
  {
    accessorKey: "object",
    header: "Object",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "status",
    header: "Amount",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
