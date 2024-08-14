import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"

import { Rule } from "./data/schema";
import { DataTableColumnHeader } from "./data-table-column-header"
import React, { useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

export const getColumns = (route:any): ColumnDef<Rule>[] => [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Id" />
        ),
        cell: ({ row }) => <div className=""><Badge variant="outline"> {row.getValue("id")}</Badge></div>,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "url",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Path"/>
        ),
        cell: ({ row }) => {
            return (
                <div className="max-w-prose text-wrap font-medium break-words">
                        {row.getValue("url")}
                </div>
            )
        },
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "type",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Tipo" />
        ),
        cell: ({ row }) => {
            const quantity = row.original.quantity;
            return (
                <div className="p-0 flex">
                    <Badge variant='outline' className='mx-1 px-1'>{row.getValue('type')}</Badge>
                </div>

            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        enableSorting: true,
        enableHiding: false,
    },
    /*{
        accessorKey: "date",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Fecha" />
        ),
        cell: ({ row }) => {

            return (
                <div className="flex flex-col" >
                    < div className="flex flex-wrap items-center" >
                        {row.getValue("date")}
                    </div >
                </div >
            )
        },
        enableSorting: false,
        enableHiding: false,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue("id"))
        },
    },*/
    {
        accessorKey: "action",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Action" />
        ),
        cell: ({ row }) => {

            return (
                <Link href={route('rules.show',{id: row.getValue("id")})}> <Button>Ver Reglas</Button> </Link>
            )
        },
        enableSorting: false,
        enableHiding: false,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    }
]

/*,
 {
   id: "actions",
   cell: ({ row }) => <DataTableRowActions row={row} />,
 },
*/
