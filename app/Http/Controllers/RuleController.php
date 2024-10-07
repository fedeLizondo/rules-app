<?php

namespace App\Http\Controllers;

use App\Http\Requests\RuleRequest;
use App\Models\Rule;
use Illuminate\Http\Request;

class RuleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Path/index', []);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RuleRequest $request)
    {
        dd($request);
        $rule = Rule::create($request->validated());
        return;//  inertia('Rule/index', ["id" => $rule->path_id, "rules" => Rule::all()]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return inertia('Rule/index', ["id" => $id]);
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
