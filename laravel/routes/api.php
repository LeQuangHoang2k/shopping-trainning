<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RegisterController;
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

// Route::middleware(['cors'])->group(function () {
//     Route::post('/hogehoge', 'Controller@hogehoge');
// });

//users 
Route::resource('/register',  RegisterController::class);
Route::post('/login',  [LoginController::class, 'login']);
Route::resource('products', ProductController::class);

Route::get('/test',  [AuthController::class, 'test']);

// Route::middleware(['cors'])->group(function () {
//     // Route::post('/hogehoge', 'Controller@hogehoge');
// });

//products
// Route::get('/product',  [ProductsController::class, 'index']);
//Route::get('/product/{id}',  [ProductsController::class, 'show']);
//Route::post('/product/{id}',  [ProductsController::class, 'create']);
//Route::put('/product/{id}',  [ProductsController::class, 'update']);
//Route::patch('/product/{id}',  [ProductsController::class, 'edit']);
//Route::delete('/product/{id}',  [ProductsController::class, 'destroy']);

