<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

//users 
Route::post('/login',  [AuthController::class, 'login']);

//products
//Route::get('/product',  [ProductsController::class, 'index']);
//Route::get('/product/{id}',  [ProductsController::class, 'show']);
//Route::post('/product/{id}',  [ProductsController::class, 'create']);
//Route::put('/product/{id}',  [ProductsController::class, 'update']);
//Route::patch('/product/{id}',  [ProductsController::class, 'edit']);
//Route::delete('/product/{id}',  [ProductsController::class, 'destroy']);

Route::resource('products', ProductsController::class);

//test
Route::get('/test',  [AuthController::class, 'test']);
