import React from 'react';
import AppAuthLayout from '@/Layouts/AppAuthLayout';
import { Dash } from '@/components/dashboard';

export default function Dashboard() {
    return (
        <>
            <AppAuthLayout title='Dashboard'>
                {
                    <Dash />
                }
            </AppAuthLayout>
        </>
    );
}
