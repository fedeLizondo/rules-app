import { Table } from "@tanstack/react-table"

import React from "react"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePaginationOnlyCount<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
      
        {table.getFilteredRowModel().rows.length} row(s)
      </div>
    </div>
  )
}
