<?php

namespace App\Http\Controllers;

use App\Http\Requests\auth\RegisterRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{

    public function store(RegisterRequest $request)
    {
        // dd("register");
        // print_r("register");
        // $validator = Validator::make($request->all(), [
        //     'title' => 'required',
        //     'body' => 'required',
        // ]);

        // if ($validator->fails()) {
        //     return redirect('post/create')
        //                 ->withErrors($validator)
        //                 ->withInput();
        // }
        $request->validated();
        // print_r($request);
    }
}
