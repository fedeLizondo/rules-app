import React, { useEffect, useState } from 'react'
import AppAuthLayout from '../../Layouts/AppAuthLayout'
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from "@/components/ui/button"



import useTypedPage from "@/Hooks/useTypedPage"
import useRoute from "@/Hooks/useRoute"
import AddRuleButton from '@/components/AddRuleButton';

const fakedata = [
    { "id": 1, "url": "https://reuters.com/aliquam/quis/turpis/eget/elit/sodales/scelerisque.png?in=mattis&purus=egestas&eu=metus&magna=aenean&vulputate=fermentum&luctus=donec&cum=ut&sociis=mauris&natoque=eget&penatibus=massa&et=tempor&magnis=convallis&dis=nulla&parturient=neque&montes=libero&nascetur=convallis&ridiculus=eget&mus=eleifend&vivamus=luctus&vestibulum=ultricies&sagittis=eu&sapien=nibh&cum=quisque&sociis=id&natoque=justo&penatibus=sit&et=amet&magnis=sapien&dis=dignissim&parturient=vestibulum&montes=vestibulum&nascetur=ante&ridiculus=ipsum&mus=primis&etiam=in&vel=faucibus&augue=orci&vestibulum=luctus&rutrum=et&rutrum=ultrices&neque=posuere&aenean=cubilia&auctor=curae&gravida=nulla&sem=dapibus&praesent=dolor&id=vel&massa=est&id=donec&nisl=odio&venenatis=justo&lacinia=sollicitudin&aenean=ut&sit=suscipit&amet=a&justo=feugiat&morbi=et&ut=eros&odio=vestibulum&cras=ac&mi=est&pede=lacinia&malesuada=nisi", "type": "get", "status": "rejected", "date": "2024-02-11T16:12:57Z", "IP": "154.220.124.252" },
    { "id": 2, "url": "https://loc.gov/volutpat/convallis.html?nascetur=mi&ridiculus=nulla&mus=ac&vivamus=enim&vestibulum=in&sagittis=tempor&sapien=turpis&cum=nec&sociis=euismod&natoque=scelerisque&penatibus=quam&et=turpis&magnis=adipiscing&dis=lorem&parturient=vitae&montes=mattis&nascetur=nibh&ridiculus=ligula&mus=nec&etiam=sem&vel=duis&augue=aliquam&vestibulum=convallis&rutrum=nunc&rutrum=proin&neque=at&aenean=turpis&auctor=a&gravida=pede&sem=posuere&praesent=nonummy&id=integer&massa=non&id=velit&nisl=donec&venenatis=diam&lacinia=neque&aenean=vestibulum&sit=eget&amet=vulputate&justo=ut&morbi=ultrices&ut=vel&odio=augue&cras=vestibulum&mi=ante&pede=ipsum&malesuada=primis&in=in&imperdiet=faucibus&et=orci&commodo=luctus&vulputate=et&justo=ultrices&in=posuere&blandit=cubilia&ultrices=curae&enim=donec&lorem=pharetra&ipsum=magna&dolor=vestibulum&sit=aliquet&amet=ultrices&consectetuer=erat&adipiscing=tortor&elit=sollicitudin&proin=mi&interdum=sit&mauris=amet&non=lobortis&ligula=sapien&pellentesque=sapien&ultrices=non&phasellus=mi&id=integer&sapien=ac&in=neque&sapien=duis&iaculis=bibendum", "type": "post", "status": "accepted", "date": "2023-12-10T08:29:22Z", "IP": "58.56.122.102" },
    { "id": 3, "url": "https://storify.com/primis/in.jsp?rhoncus=nulla&aliquam=mollis&lacus=molestie&morbi=lorem&quis=quisque&tortor=ut&id=erat&nulla=curabitur&ultrices=gravida&aliquet=nisi&maecenas=at&leo=nibh&odio=in&condimentum=hac&id=habitasse&luctus=platea&nec=dictumst&molestie=aliquam&sed=augue&justo=quam&pellentesque=sollicitudin&viverra=vitae&pede=consectetuer&ac=eget&diam=rutrum&cras=at&pellentesque=lorem&volutpat=integer&dui=tincidunt&maecenas=ante&tristique=vel&est=ipsum&et=praesent&tempus=blandit&semper=lacinia&est=erat&quam=vestibulum&pharetra=sed&magna=magna&ac=at&consequat=nunc&metus=commodo&sapien=placerat&ut=praesent&nunc=blandit&vestibulum=nam&ante=nulla&ipsum=integer&primis=pede&in=justo&faucibus=lacinia&orci=eget&luctus=tincidunt&et=eget&ultrices=tempus&posuere=vel&cubilia=pede&curae=morbi&mauris=porttitor&viverra=lorem", "type": "post", "status": "rejected", "date": "2024-03-27T19:38:09Z", "IP": "24.235.251.243" },
    { "id": 4, "url": "https://tmall.com/dapibus/at/diam/nam/tristique/tortor.xml?morbi=et&odio=magnis&odio=dis&elementum=parturient&eu=montes&interdum=nascetur&eu=ridiculus&tincidunt=mus&in=etiam&leo=vel&maecenas=augue&pulvinar=vestibulum&lobortis=rutrum&est=rutrum&phasellus=neque&sit=aenean&amet=auctor&erat=gravida&nulla=sem&tempus=praesent&vivamus=id&in=massa&felis=id&eu=nisl&sapien=venenatis&cursus=lacinia&vestibulum=aenean&proin=sit&eu=amet&mi=justo&nulla=morbi&ac=ut&enim=odio&in=cras&tempor=mi&turpis=pede&nec=malesuada&euismod=in&scelerisque=imperdiet&quam=et&turpis=commodo&adipiscing=vulputate&lorem=justo&vitae=in&mattis=blandit&nibh=ultrices&ligula=enim&nec=lorem&sem=ipsum&duis=dolor&aliquam=sit&convallis=amet&nunc=consectetuer&proin=adipiscing&at=elit&turpis=proin&a=interdum&pede=mauris&posuere=non&nonummy=ligula&integer=pellentesque", "type": "post", "status": "rejected", "date": "2024-03-02T23:26:50Z", "IP": "84.237.39.128" },
    { "id": 5, "url": "https://indiegogo.com/hac/habitasse/platea/dictumst/morbi/vestibulum.json?non=non&mauris=velit&morbi=nec&non=nisi&lectus=vulputate&aliquam=nonummy&sit=maecenas&amet=tincidunt&diam=lacus&in=at&magna=velit&bibendum=vivamus&imperdiet=vel&nullam=nulla&orci=eget&pede=eros&venenatis=elementum&non=pellentesque&sodales=quisque&sed=porta&tincidunt=volutpat&eu=erat&felis=quisque&fusce=erat&posuere=eros&felis=viverra&sed=eget&lacus=congue&morbi=eget&sem=semper&mauris=rutrum&laoreet=nulla&ut=nunc&rhoncus=purus&aliquet=phasellus&pulvinar=in&sed=felis&nisl=donec&nunc=semper&rhoncus=sapien&dui=a&vel=libero&sem=nam&sed=dui&sagittis=proin&nam=leo&congue=odio&risus=porttitor&semper=id&porta=consequat&volutpat=in&quam=consequat&pede=ut&lobortis=nulla&ligula=sed&sit=accumsan&amet=felis&eleifend=ut&pede=at&libero=dolor&quis=quis&orci=odio&nullam=consequat&molestie=varius&nibh=integer&in=ac&lectus=leo&pellentesque=pellentesque&at=ultrices&nulla=mattis&suspendisse=odio", "type": "get", "status": "rejected", "date": "2023-10-28T07:38:00Z", "IP": "135.25.2.153" },
    { "id": 6, "url": "http://businessinsider.com/posuere/cubilia/curae/nulla/dapibus/dolor.json?eget=est&nunc=quam&donec=pharetra&quis=magna&orci=ac&eget=consequat&orci=metus&vehicula=sapien&condimentum=ut&curabitur=nunc&in=vestibulum&libero=ante&ut=ipsum&massa=primis&volutpat=in&convallis=faucibus&morbi=orci&odio=luctus&odio=et&elementum=ultrices&eu=posuere&interdum=cubilia&eu=curae&tincidunt=mauris&in=viverra", "type": "post", "status": "rejected", "date": "2024-07-15T10:04:33Z", "IP": "1.160.246.6" },
    { "id": 7, "url": "http://sphinn.com/sit.json?ultrices=id&erat=ornare&tortor=imperdiet", "type": "post", "status": "rejected", "date": "2024-02-10T04:04:19Z", "IP": "242.65.232.206" },
    { "id": 8, "url": "https://comsenz.com/arcu/libero/rutrum/ac/lobortis/vel/dapibus.png?integer=et&non=magnis&velit=dis&donec=parturient&diam=montes&neque=nascetur&vestibulum=ridiculus&eget=mus&vulputate=etiam&ut=vel&ultrices=augue&vel=vestibulum&augue=rutrum&vestibulum=rutrum&ante=neque&ipsum=aenean&primis=auctor&in=gravida&faucibus=sem&orci=praesent&luctus=id&et=massa&ultrices=id&posuere=nisl&cubilia=venenatis&curae=lacinia&donec=aenean&pharetra=sit&magna=amet&vestibulum=justo&aliquet=morbi&ultrices=ut&erat=odio&tortor=cras&sollicitudin=mi&mi=pede&sit=malesuada&amet=in&lobortis=imperdiet&sapien=et&sapien=commodo&non=vulputate&mi=justo&integer=in&ac=blandit&neque=ultrices&duis=enim&bibendum=lorem&morbi=ipsum&non=dolor&quam=sit&nec=amet&dui=consectetuer&luctus=adipiscing&rutrum=elit&nulla=proin&tellus=interdum&in=mauris&sagittis=non&dui=ligula&vel=pellentesque&nisl=ultrices&duis=phasellus&ac=id&nibh=sapien&fusce=in&lacus=sapien&purus=iaculis&aliquet=congue&at=vivamus&feugiat=metus&non=arcu&pretium=adipiscing&quis=molestie&lectus=hendrerit&suspendisse=at&potenti=vulputate&in=vitae&eleifend=nisl&quam=aenean&a=lectus&odio=pellentesque&in=eget&hac=nunc&habitasse=donec&platea=quis&dictumst=orci&maecenas=eget&ut=orci&massa=vehicula&quis=condimentum&augue=curabitur&luctus=in&tincidunt=libero&nulla=ut&mollis=massa&molestie=volutpat&lorem=convallis&quisque=morbi", "type": "post", "status": "rejected", "date": "2023-11-15T09:38:01Z", "IP": "45.165.250.138" },
    { "id": 9, "url": "https://quantcast.com/magna/ac/consequat/metus.xml?cum=nisl&sociis=duis&natoque=ac&penatibus=nibh&et=fusce&magnis=lacus&dis=purus&parturient=aliquet&montes=at&nascetur=feugiat&ridiculus=non&mus=pretium&vivamus=quis&vestibulum=lectus&sagittis=suspendisse&sapien=potenti&cum=in&sociis=eleifend&natoque=quam&penatibus=a&et=odio&magnis=in&dis=hac&parturient=habitasse&montes=platea&nascetur=dictumst&ridiculus=maecenas&mus=ut&etiam=massa&vel=quis&augue=augue&vestibulum=luctus&rutrum=tincidunt&rutrum=nulla&neque=mollis&aenean=molestie&auctor=lorem&gravida=quisque&sem=ut&praesent=erat&id=curabitur&massa=gravida&id=nisi&nisl=at&venenatis=nibh&lacinia=in&aenean=hac&sit=habitasse&amet=platea&justo=dictumst&morbi=aliquam&ut=augue&odio=quam&cras=sollicitudin&mi=vitae&pede=consectetuer&malesuada=eget&in=rutrum&imperdiet=at&et=lorem&commodo=integer&vulputate=tincidunt&justo=ante&in=vel&blandit=ipsum&ultrices=praesent&enim=blandit&lorem=lacinia&ipsum=erat&dolor=vestibulum&sit=sed&amet=magna&consectetuer=at&adipiscing=nunc&elit=commodo&proin=placerat", "type": "get", "status": "rejected", "date": "2023-11-05T14:40:14Z", "IP": "92.122.113.97" },
    { "id": 10, "url": "http://wiley.com/lorem.png?orci=amet&luctus=consectetuer&et=adipiscing&ultrices=elit&posuere=proin&cubilia=interdum&curae=mauris&mauris=non&viverra=ligula&diam=pellentesque&vitae=ultrices&quam=phasellus&suspendisse=id&potenti=sapien&nullam=in&porttitor=sapien&lacus=iaculis&at=congue&turpis=vivamus&donec=metus&posuere=arcu&metus=adipiscing&vitae=molestie&ipsum=hendrerit&aliquam=at&non=vulputate&mauris=vitae&morbi=nisl&non=aenean&lectus=lectus&aliquam=pellentesque&sit=eget&amet=nunc&diam=donec", "type": "get", "status": "accepted", "date": "2023-12-15T11:01:06Z", "IP": "11.1.144.105" },
    { "id": 11, "url": "http://paginegialle.it/sem/praesent/id/massa.json?at=sit&feugiat=amet", "type": "get", "status": "accepted", "date": "2024-04-27T20:56:03Z", "IP": "18.247.32.220" },
    { "id": 12, "url": "https://goo.gl/fermentum/justo/nec/condimentum/neque/sapien/placerat.jpg?egestas=tellus&metus=in&aenean=sagittis&fermentum=dui&donec=vel&ut=nisl&mauris=duis&eget=ac&massa=nibh&tempor=fusce&convallis=lacus&nulla=purus&neque=aliquet&libero=at&convallis=feugiat&eget=non&eleifend=pretium&luctus=quis&ultricies=lectus&eu=suspendisse&nibh=potenti&quisque=in&id=eleifend&justo=quam&sit=a&amet=odio&sapien=in", "type": "post", "status": "rejected", "date": "2024-08-09T11:06:51Z", "IP": "56.209.154.53" },
    { "id": 13, "url": "https://digg.com/donec.jpg?sapien=non&quis=velit&libero=donec&nullam=diam&sit=neque&amet=vestibulum&turpis=eget&elementum=vulputate&ligula=ut&vehicula=ultrices&consequat=vel&morbi=augue", "type": "post", "status": "accepted", "date": "2024-01-29T01:52:25Z", "IP": "102.236.4.214" },
    { "id": 14, "url": "http://diigo.com/etiam.jsp?amet=sit&consectetuer=amet&adipiscing=diam&elit=in&proin=magna&risus=bibendum&praesent=imperdiet&lectus=nullam&vestibulum=orci&quam=pede&sapien=venenatis&varius=non&ut=sodales&blandit=sed&non=tincidunt&interdum=eu&in=felis&ante=fusce&vestibulum=posuere&ante=felis&ipsum=sed&primis=lacus&in=morbi&faucibus=sem&orci=mauris&luctus=laoreet&et=ut&ultrices=rhoncus&posuere=aliquet&cubilia=pulvinar&curae=sed&duis=nisl&faucibus=nunc&accumsan=rhoncus&odio=dui&curabitur=vel&convallis=sem&duis=sed&consequat=sagittis&dui=nam&nec=congue&nisi=risus&volutpat=semper&eleifend=porta&donec=volutpat&ut=quam&dolor=pede&morbi=lobortis&vel=ligula&lectus=sit&in=amet&quam=eleifend&fringilla=pede&rhoncus=libero&mauris=quis&enim=orci&leo=nullam&rhoncus=molestie&sed=nibh&vestibulum=in&sit=lectus&amet=pellentesque&cursus=at&id=nulla", "type": "get", "status": "accepted", "date": "2024-08-03T05:54:07Z", "IP": "227.45.72.18" },
    { "id": 15, "url": "http://clickbank.net/amet/lobortis/sapien/sapien/non/mi.html?laoreet=in&ut=imperdiet&rhoncus=et&aliquet=commodo&pulvinar=vulputate&sed=justo&nisl=in&nunc=blandit&rhoncus=ultrices&dui=enim&vel=lorem&sem=ipsum&sed=dolor&sagittis=sit&nam=amet&congue=consectetuer&risus=adipiscing&semper=elit&porta=proin&volutpat=interdum&quam=mauris&pede=non&lobortis=ligula&ligula=pellentesque&sit=ultrices&amet=phasellus&eleifend=id&pede=sapien&libero=in&quis=sapien&orci=iaculis&nullam=congue&molestie=vivamus&nibh=metus&in=arcu&lectus=adipiscing&pellentesque=molestie&at=hendrerit&nulla=at&suspendisse=vulputate&potenti=vitae&cras=nisl&in=aenean&purus=lectus&eu=pellentesque&magna=eget&vulputate=nunc&luctus=donec&cum=quis&sociis=orci&natoque=eget&penatibus=orci&et=vehicula&magnis=condimentum&dis=curabitur&parturient=in&montes=libero&nascetur=ut&ridiculus=massa&mus=volutpat&vivamus=convallis&vestibulum=morbi&sagittis=odio&sapien=odio&cum=elementum&sociis=eu&natoque=interdum&penatibus=eu&et=tincidunt&magnis=in&dis=leo&parturient=maecenas&montes=pulvinar&nascetur=lobortis&ridiculus=est&mus=phasellus&etiam=sit&vel=amet&augue=erat&vestibulum=nulla&rutrum=tempus&rutrum=vivamus&neque=in&aenean=felis&auctor=eu", "type": "get", "status": "accepted", "date": "2024-07-03T15:36:39Z", "IP": "106.106.57.83" },
    { "id": 16, "url": "http://4shared.com/tortor/sollicitudin/mi/sit/amet.xml?pede=lacinia&ullamcorper=aenean&augue=sit&a=amet&suscipit=justo&nulla=morbi&elit=ut&ac=odio&nulla=cras&sed=mi&vel=pede&enim=malesuada&sit=in&amet=imperdiet&nunc=et&viverra=commodo&dapibus=vulputate&nulla=justo&suscipit=in&ligula=blandit", "type": "post", "status": "accepted", "date": "2023-10-05T21:20:22Z", "IP": "76.235.252.35" },
    { "id": 17, "url": "https://w3.org/posuere/cubilia/curae/nulla.xml?non=id&pretium=lobortis&quis=convallis&lectus=tortor&suspendisse=risus&potenti=dapibus&in=augue&eleifend=vel&quam=accumsan&a=tellus&odio=nisi&in=eu&hac=orci&habitasse=mauris&platea=lacinia&dictumst=sapien&maecenas=quis&ut=libero&massa=nullam&quis=sit&augue=amet&luctus=turpis&tincidunt=elementum&nulla=ligula&mollis=vehicula&molestie=consequat&lorem=morbi&quisque=a&ut=ipsum&erat=integer&curabitur=a&gravida=nibh&nisi=in&at=quis&nibh=justo&in=maecenas&hac=rhoncus&habitasse=aliquam&platea=lacus&dictumst=morbi&aliquam=quis&augue=tortor&quam=id&sollicitudin=nulla&vitae=ultrices&consectetuer=aliquet&eget=maecenas&rutrum=leo&at=odio&lorem=condimentum&integer=id&tincidunt=luctus&ante=nec&vel=molestie&ipsum=sed&praesent=justo&blandit=pellentesque&lacinia=viverra&erat=pede&vestibulum=ac&sed=diam&magna=cras&at=pellentesque&nunc=volutpat&commodo=dui&placerat=maecenas&praesent=tristique&blandit=est&nam=et&nulla=tempus&integer=semper&pede=est&justo=quam&lacinia=pharetra&eget=magna&tincidunt=ac&eget=consequat&tempus=metus&vel=sapien&pede=ut&morbi=nunc&porttitor=vestibulum&lorem=ante", "type": "get", "status": "rejected", "date": "2024-07-05T19:11:13Z", "IP": "157.144.67.229" },
    { "id": 18, "url": "http://acquirethisname.com/justo/lacinia/eget.aspx?nec=vitae&nisi=nisl&volutpat=aenean&eleifend=lectus&donec=pellentesque&ut=eget&dolor=nunc&morbi=donec&vel=quis&lectus=orci&in=eget&quam=orci&fringilla=vehicula&rhoncus=condimentum&mauris=curabitur&enim=in&leo=libero&rhoncus=ut&sed=massa&vestibulum=volutpat&sit=convallis&amet=morbi&cursus=odio&id=odio&turpis=elementum&integer=eu&aliquet=interdum&massa=eu&id=tincidunt&lobortis=in&convallis=leo&tortor=maecenas&risus=pulvinar&dapibus=lobortis&augue=est&vel=phasellus&accumsan=sit&tellus=amet&nisi=erat&eu=nulla&orci=tempus&mauris=vivamus&lacinia=in&sapien=felis&quis=eu&libero=sapien&nullam=cursus&sit=vestibulum&amet=proin&turpis=eu&elementum=mi&ligula=nulla&vehicula=ac&consequat=enim&morbi=in&a=tempor&ipsum=turpis&integer=nec&a=euismod&nibh=scelerisque&in=quam&quis=turpis&justo=adipiscing&maecenas=lorem&rhoncus=vitae&aliquam=mattis&lacus=nibh&morbi=ligula&quis=nec&tortor=sem&id=duis&nulla=aliquam&ultrices=convallis&aliquet=nunc&maecenas=proin&leo=at&odio=turpis&condimentum=a&id=pede&luctus=posuere&nec=nonummy&molestie=integer&sed=non&justo=velit&pellentesque=donec&viverra=diam&pede=neque&ac=vestibulum&diam=eget&cras=vulputate&pellentesque=ut&volutpat=ultrices&dui=vel&maecenas=augue&tristique=vestibulum&est=ante&et=ipsum&tempus=primis&semper=in&est=faucibus", "type": "post", "status": "rejected", "date": "2024-05-06T18:24:42Z", "IP": "233.218.250.238" },
    { "id": 19, "url": "https://51.la/in.jpg?enim=lacinia&leo=eget&rhoncus=tincidunt&sed=eget&vestibulum=tempus&sit=vel&amet=pede&cursus=morbi&id=porttitor&turpis=lorem&integer=id&aliquet=ligula&massa=suspendisse&id=ornare&lobortis=consequat&convallis=lectus&tortor=in&risus=est&dapibus=risus&augue=auctor&vel=sed&accumsan=tristique&tellus=in&nisi=tempus&eu=sit&orci=amet&mauris=sem&lacinia=fusce", "type": "post", "status": "rejected", "date": "2023-09-21T05:25:06Z", "IP": "226.126.43.234" },
    { "id": 20, "url": "http://biblegateway.com/id/turpis/integer/aliquet/massa/id/lobortis.html?nec=aenean&molestie=auctor&sed=gravida&justo=sem&pellentesque=praesent&viverra=id&pede=massa&ac=id&diam=nisl&cras=venenatis&pellentesque=lacinia&volutpat=aenean&dui=sit&maecenas=amet&tristique=justo&est=morbi&et=ut&tempus=odio&semper=cras&est=mi&quam=pede&pharetra=malesuada&magna=in&ac=imperdiet&consequat=et&metus=commodo&sapien=vulputate&ut=justo&nunc=in&vestibulum=blandit&ante=ultrices&ipsum=enim&primis=lorem&in=ipsum&faucibus=dolor&orci=sit&luctus=amet&et=consectetuer&ultrices=adipiscing&posuere=elit&cubilia=proin", "type": "post", "status": "accepted", "date": "2024-04-19T06:39:54Z", "IP": "79.184.140.195" }
]
const Rule = ({ jetstream, auth, errorBags, errors, id }) => {

    const selected = fakedata[id - 1] ?? fakedata[0];
    const url = new URL(selected.url);
    console.log("Data", url, url.searchParams, Object.fromEntries(url.searchParams), Object.keys(Object.fromEntries(url.searchParams)).map(k => {
        return {
            "value": "" + k,
            "label": "" + k
        }
    }));
    const newSelected = React.useMemo(() => {
        return {
            ...selected,
            "keys": {
                "BODY": [],
                "PARAM": [],
                "QUERY": Object.keys(Object.fromEntries(url.searchParams)).map(k => {
                    return {
                        "value": "" + k,
                        "label": "" + k
                    }
                }) ?? [],
                "HEADER": []
            } ?? {}
        }
    }, [id])



    const page = useTypedPage();
    const route = useRoute();

    return (
        <AppAuthLayout title='Reglas'>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <div className="flex flex-col">
                    <main className="mt-4 grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-6 lg:grid-cols-1 xl:grid-cols-1">
                        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                                <Card
                                    className="sm:col-span-4" x-chunk="dashboard-05-chunk-0"
                                >
                                    <CardHeader className="pb-3">
                                        <CardTitle>Reglas!</CardTitle>
                                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                                            Ingrese la validación para un valor
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter className="flex justify-end">
                                        <AddRuleButton path={newSelected} />
                                    </CardFooter>
                                </Card>
                                <Card
                                    className="sm:col-span-4" x-chunk="dashboard-05-chunk-0"
                                >
                                    <CardHeader className="pb-3">
                                        <CardTitle>Path</CardTitle>
                                        <CardDescription className="text-balance leading-relaxed text-wrap break-words">
                                            {selected.url}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AppAuthLayout>
    )
};

export default Rule
