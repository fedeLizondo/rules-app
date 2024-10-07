import useRoute from '@/Hooks/useRoute';
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input';
import { useForm } from '@inertiajs/react';
import { Label } from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react'

import { toast } from 'sonner';
import InputError from '@/Components/InputError';
import { ComboBox } from './ComboBox';


const Place = [
    {
        value: "BODY",
        label: "Body",
    },
    {
        value: "PARAM",
        label: "Param",
    },
    {
        value: "QUERY",
        label: "Query",
    },
    {
        value: "HEADER",
        label: "Header",
    },
];

// Regex, Range, WhiteList, BlackList
const Type = [
    {
        value: "BLACKLIST",
        label: "Black List",
    },
    {
        value: "RANGE",
        label: "Range",
    },
    {
        value: "REGEX",
        label: "Regex",
    },
    {
        value: "WHITELIST",
        label: "white List",
    },
];


function AddRuleButton({ path }) {
    console.log(path)
    const route = useRoute();
    const [open, setOpen] = useState(false);

    const { data, setData, post, errors, reset } = useForm({
        path_id: path.id,
        place: '',
        type: '',
        key: '',
        value: ''
    });


    const handleSubmit = (e) => {

        e.preventDefault();
        post(route('rules.store'), {
            onSuccess: () => {
                toast('Se creó: una nueva regla');
                setOpen(false);
                reset();
            },
            onError: () => { toast.error('Ocurrió un error, intente luego.') }
        });
    };

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button> Agregar </Button>
            </DrawerTrigger>
            <DrawerContent>
                <form onSubmit={handleSubmit}>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle> Crear una Regla</DrawerTitle>
                            <DrawerDescription>Ingresa informacion sobre la nueva regla</DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                            <div className="flex flex-col items-center justify-center">
                                <div className='w-full'>
                                    <ComboBox value={data.place} setValue={e => setData('place', e)} values={Place} />
                                    <InputError message={errors.place}></InputError>
                                </div>

                                <div className='w-full pt-2'>
                                    <Label>Tipo </Label>
                                    <ComboBox value={data.type} setValue={e => setData('type', e)} values={Type} />
                                    <InputError message={errors.type}></InputError>
                                </div>

                                <div className='w-full pt-2'>
                                    <Label>Key </Label>
                                    <ComboBox value={data.key} setValue={e => setData('key', e)} values={path.keys["QUERY"]} />
                                    <InputError message={errors.type}></InputError>
                                </div>

                                <div className='w-full pt-4'>
                                    <Label>Value </Label>
                                    <Input type='text' value={data.value} onChange={e => setData('value',e.target.value)} />
                                    <InputError message={errors.value}></InputError>
                                </div>

                                {/*
                                    <div className='w-full'>
                                    <Label>Place</Label>
                                    <Input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
                                    <InputError message={errors.name}></InputError>
                                </div>
                                <div className='w-full pt-2'>
                                    <Label>Descripción</Label>
                                    <Input type='text' value={data.description || ""} onChange={e => setData('description', e.target.value)} />
                                    <InputError message={errors.description}></InputError>
                                </div>
                                <div className='m-0 w-full pt-2 pb-2'>
                                    <Label className='pb-4'>Prioridad {data.priority} { `(${getPriorityName(data.priority)})`}</Label>
                                    <Input type='text' value={data.priority | 0} onChange={e => setData('priority', Math.min(parseInt(e.target.value.replace(/\D/, '')) | 0, maxPriorityNumber))} />
                                    <InputError message={errors.priority}></InputError>
                                </div>

                                <div className='w-full pt-4'>
                                    <Label>Capacidad </Label>
                                    <Input type='text' value={data.units | 0} onChange={e => setData('units', parseInt(e.target.value.replace(/\D/, '')) | 0)} />
                                    <InputError message={errors.units}></InputError>
                                </div>
*/}
                            </div>
                        </div>
                        <DrawerFooter>
                            <Button type='submit'>Crear</Button>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancelar</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </form>
            </DrawerContent>
        </Drawer>
    )
}

export default AddRuleButton
