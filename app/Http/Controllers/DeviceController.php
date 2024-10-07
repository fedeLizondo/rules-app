<?php

namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Http\Request;

class DeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$devices = Device::all();
        $sub = [
            [
            "mac" => "5A-5D-C1-07-39-4A",
            "hostname" => "Samsung C3560",
            "ip" => "156.23.199.86"

        ], [
            "mac" => "09-2C-DF-29-54-5A",
            "hostname" => "Nokia X",
            "ip" => "0.172.21.229"
        ], [
            "mac" => "D0-03-7E-30-E4-8C",
            "hostname" => "Huawei Mate 30 RS Porsche Design",
            "ip" => "55.91.51.214"
        ], [
            "mac" => "8A-99-42-A7-D5-D5",
            "hostname" => "Samsung B520",
            "ip" => "155.137.233.183"
        ], [
            "mac" => "31-B3-B7-F0-6B-79",
            "hostname" => "Ericsson GO 118",
            "ip" => "170.75.216.179"
        ], [
            "mac" => "DC-15-D5-62-F6-50",
            "hostname" => "Nokia 1.3",
            "ip" => "245.189.57.60"
        ], [
            "mac" => "E7-1B-45-66-0C-A8",
            "hostname" => "BLU Grand X LTE",
            "ip" => "246.89.78.117"
        ], [
            "mac" => "17-DF-1A-10-AD-82",
            "hostname" => "Dell Mini 3i",
            "ip" => "237.173.80.233"
        ], [
            "mac" => "6C-FD-60-74-86-73",
            "hostname" => "Honor 9X Pro",
            "ip" => "7.195.190.148"
        ], [
            "mac" => "89-A8-AC-4D-14-61",
            "hostname" => "Huawei Children's Watch 4X",
            "ip" => "27.159.253.108"
        ], [
            "mac" => "D0-D5-D5-6B-66-CA",
            "hostname" => "BlackBerry KEY2",
            "ip" => "161.122.245.89"
        ], [
            "mac" => "CB-61-5E-23-52-E4",
            "hostname" => "Meizu PRO 5",
            "ip" => "23.40.55.173"
        ], [
            "mac" => "1A-30-69-4C-16-5B",
            "hostname" => "i-mate Ultimate 6150",
            "ip" => "97.68.40.175"
        ], [
            "mac" => "54-25-34-0F-D8-4C",
            "hostname" => "Innostream INNO 80",
            "ip" => "0.216.198.102"
        ], [
            "mac" => "F1-15-92-22-FE-96",
            "hostname" => "Meizu MX4",
            "ip" => "23.32.245.208"
        ], [
            "mac" => "B6-18-9B-95-7D-36",
            "hostname" => "Coolpad Mega",
            "ip" => "102.102.174.230"
        ], [
            "mac" => "6D-9C-EF-E2-0F-B5",
            "hostname" => "QMobile Noir A500",
            "ip" => "75.106.131.230"
        ], [
            "mac" => "D5-73-12-F7-06-1A",
            "hostname" => "verykool s757",
            "ip" => "249.38.20.145"
        ], [
            "mac" => "44-6E-E0-CA-B7-05",
            "hostname" => "Sagem my850C",
            "ip" => "111.208.14.53"
        ], [
            "mac" => "8C-BE-6D-52-D6-F7",
            "hostname" => "alcatel OT-280",
            "ip" => "39.151.111.80"
        ]];
        return inertia('Device/index', ['devices' => $sub]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
