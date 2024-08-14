import useRoute from '@/Hooks/useRoute'
import useTypedPage from '@/Hooks/useTypedPage'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { router } from '@inertiajs/core'
import { Link } from '@inertiajs/react'
import {
    HardDrive,
    Home,
    LineChart,
    ListChecks,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"
import React from 'react'

function Header() {
    const page = useTypedPage();
    const route = useRoute();

    function logout(e: React.FormEvent) {
        e.preventDefault();
        router.post(route('logout'));
    }

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href={route('dashboard')}
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            <LineChart className="h-5 w-5 transition-all group-hover:scale-110" />
                            <span className="sr-only">Dashboard</span>
                        </Link>
                        <Link
                            href={route('devices.index')}
                            className={`flex items-center gap-4 px-2.5 ${route().current('device') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            <HardDrive className="h-5 w-5" />
                            Dispositivos
                        </Link>
                        <Link
                            href={route('rules.index')}
                            className={`flex items-center gap-4 px-2.5 ${route().current('rules') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            <ListChecks className="h-5 w-5" />
                            Reglas
                        </Link>
                        <Link
                            href="#"
                            className={`flex items-center gap-4 px-2.5 ${route().current('dashboard') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            <Package className="h-5 w-5" />
                            Packets
                        </Link>
                        <Link
                            href="#"
                            className={`flex items-center gap-4 px-2.5 ${route().current('users') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            <Users2 className="h-5 w-5" />
                            Roles
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <Settings className="h-5 w-5" />
                            Settings
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>

            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="#">Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    {
                        /*

                                            <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="#">Orders</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Recent Orders</BreadcrumbPage>
                    </BreadcrumbItem>
                        */
                    }

                </BreadcrumbList>
            </Breadcrumb>





            <div className="relative ml-auto flex-1 md:grow-0">
                {
                    /*
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                />
                */
                }
            </div>


            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full"
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/124599?v=4"
                            width={36}
                            height={36}
                            alt="Avatar"
                            className="overflow-hidden rounded-full"
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                        {page.props.auth.user?.name}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link className='w-full text-left' href={route('profile.show')}>
                            Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <form onSubmit={logout}>
                        <DropdownMenuItem>
                            <button className='w-full text-left text-red-600' type='submit' >Log Out</button>
                        </DropdownMenuItem>
                    </form>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}

export default Header
