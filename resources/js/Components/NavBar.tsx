import {
    Forklift,
    HardDrive,
    Home,
    LineChart,
    ListCheck,
    ListChecks,
    Package,
    Package2,
    Settings,
    ShoppingCart,
    Users2,
    Warehouse,
} from "lucide-react"

import { Link } from "@inertiajs/react"
import React from "react"
import useTypedPage from "@/Hooks/useTypedPage"
import useRoute from "@/Hooks/useRoute"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export default function NavBar() {
    const page = useTypedPage();
    const route = useRoute();

    return (
        <aside className="fixed inset-y-0 left-0 z-0 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href={route('dashboard')}
                            className={`flex h-9 w-9 items-center justify-center rounded-lg  ${route().current('dashboard') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground md:h-8 md:w-8`}

                        //className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                        >
                            <LineChart className="h-4 w-4 transition-all group-hover:scale-110" />
                            <span className="sr-only">Dashboard</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Dashboard</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href={route('devices.index')}
                            className={`flex h-9 w-9 items-center justify-center rounded-lg  ${route().current('devices.index') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground md:h-8 md:w-8`}
                        >
                            <HardDrive className="h-5 w-5" />
                            <span className="sr-only">Dispositivos</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Dispositivos</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href={route('rules.index')}
                            className={`flex h-9 w-9 items-center justify-center rounded-lg  ${route().current('rules.index') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground md:h-8 md:w-8`}
                        >
                            <ListChecks className="h-5 w-5" />
                            <span className="sr-only">Reglas</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Reglas</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Package className="h-5 w-5" />
                            <span className="sr-only">Packets</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Packets</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Users2 className="h-5 w-5" />
                            <span className="sr-only">Customers</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Customers</TooltipContent>
                </Tooltip>
                {/*
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <LineChart className="h-5 w-5" />
                            <span className="sr-only">Analytics</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Analytics</TooltipContent>
                </Tooltip>*/
                }
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Settings className="h-5 w-5" />
                            <span className="sr-only">Settings</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
            </nav>
        </aside>
    )
}
