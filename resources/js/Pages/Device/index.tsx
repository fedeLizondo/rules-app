import React from 'react'
import AppAuthLayout from '../../Layouts/AppAuthLayout'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fakedata = [{
    "mac": "5A-5D-C1-07-39-4A",
    "name": "Samsung C3560",
    "ip_address": "156.23.199.86"
  }, {
    "mac": "09-2C-DF-29-54-5A",
    "name": "Nokia X",
    "ip_address": "0.172.21.229"
  }, {
    "mac": "D0-03-7E-30-E4-8C",
    "name": "Huawei Mate 30 RS Porsche Design",
    "ip_address": "55.91.51.214"
  }, {
    "mac": "8A-99-42-A7-D5-D5",
    "name": "Samsung B520",
    "ip_address": "155.137.233.183"
  }, {
    "mac": "31-B3-B7-F0-6B-79",
    "name": "Ericsson GO 118",
    "ip_address": "170.75.216.179"
  }, {
    "mac": "DC-15-D5-62-F6-50",
    "name": "Nokia 1.3",
    "ip_address": "245.189.57.60"
  }, {
    "mac": "E7-1B-45-66-0C-A8",
    "name": "BLU Grand X LTE",
    "ip_address": "246.89.78.117"
  }, {
    "mac": "17-DF-1A-10-AD-82",
    "name": "Dell Mini 3i",
    "ip_address": "237.173.80.233"
  }, {
    "mac": "6C-FD-60-74-86-73",
    "name": "Honor 9X Pro",
    "ip_address": "7.195.190.148"
  }, {
    "mac": "89-A8-AC-4D-14-61",
    "name": "Huawei Children's Watch 4X",
    "ip_address": "27.159.253.108"
  }, {
    "mac": "D0-D5-D5-6B-66-CA",
    "name": "BlackBerry KEY2",
    "ip_address": "161.122.245.89"
  }, {
    "mac": "CB-61-5E-23-52-E4",
    "name": "Meizu PRO 5",
    "ip_address": "23.40.55.173"
  }, {
    "mac": "1A-30-69-4C-16-5B",
    "name": "i-mate Ultimate 6150",
    "ip_address": "97.68.40.175"
  }, {
    "mac": "54-25-34-0F-D8-4C",
    "name": "Innostream INNO 80",
    "ip_address": "0.216.198.102"
  }, {
    "mac": "F1-15-92-22-FE-96",
    "name": "Meizu MX4",
    "ip_address": "23.32.245.208"
  }, {
    "mac": "B6-18-9B-95-7D-36",
    "name": "Coolpad Mega",
    "ip_address": "102.102.174.230"
  }, {
    "mac": "6D-9C-EF-E2-0F-B5",
    "name": "QMobile Noir A500",
    "ip_address": "75.106.131.230"
  }, {
    "mac": "D5-73-12-F7-06-1A",
    "name": "verykool s757",
    "ip_address": "249.38.20.145"
  }, {
    "mac": "44-6E-E0-CA-B7-05",
    "name": "Sagem my850C",
    "ip_address": "111.208.14.53"
  }, {
    "mac": "8C-BE-6D-52-D6-F7",
    "name": "alcatel OT-280",
    "ip_address": "39.151.111.80"
  }]

const Rule = ({ jetstream, auth, errorBags, errors, deposits, locations, selected }) => {
    return (
        <AppAuthLayout title='Dispositivos'>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <div className="flex flex-col">
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-6 lg:grid-cols-4 xl:grid-cols-4">
                        {fakedata.map(data => {
                            return (
                                <Card className='p-2'>
                                    <CardTitle className='text-center' >{data.name}</CardTitle>

                                    <CardContent>

                                        <CardDescription className='my-1'>
                                            <div className='flex mt-1'>
                                                <p>IP:</p> <Badge> {data.ip_address} </Badge>
                                            </div>
                                            <div className='flex mt-1'>
                                                <p>MAC:</p> <Badge> {data.mac} </Badge>
                                            </div>
                                        </CardDescription>
                                    </CardContent>

                                </Card>
                            );

                        })}
                    </main>
                </div>
            </div>
        </AppAuthLayout>

    )
};

export default Rule
