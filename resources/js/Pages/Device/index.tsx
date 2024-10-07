import React from 'react'
import AppAuthLayout from '../../Layouts/AppAuthLayout'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Rule = ({ jetstream, auth, errorBags, errors, devices }) => {
    return (
        <AppAuthLayout title='Dispositivos'>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <div className="flex flex-col">
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-6 lg:grid-cols-4 xl:grid-cols-4">
                        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-4">
                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                                {devices.map(data => {
                                    return (
                                        <Card className='p-2'>
                                            <CardTitle className='text-center' >{data.hostname}</CardTitle>

                                            <CardContent>

                                                <CardDescription className='my-1 flex flex-row flex-wrap'>
                                                    <div className='flex-no-wrap m-1'>
                                                        <p>IP:</p> <Badge> {data.ip} </Badge>
                                                    </div>
                                                    <div className='flex-no-wrap m-1'>
                                                        <p>M.A.C:</p>   <Badge>   {data.mac} </Badge>
                                                    </div>
                                                </CardDescription>
                                            </CardContent>

                                        </Card>
                                    );

                                })}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AppAuthLayout>

    )
};

export default Rule
