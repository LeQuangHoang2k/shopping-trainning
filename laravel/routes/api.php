<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ThirdPartyController;
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
Route::post('register-facebook', [ThirdPartyController::class, 'registerFacebook']);
Route::post('register-google', [ThirdPartyController::class, 'registerGoogle']);
Route::post('login', [AuthController::class, 'login']);
Route::post('login-facebook', [ThirdPartyController::class, 'loginFacebook']);
Route::post('login-google', [ThirdPartyController::class, 'loginGoogle']);
Route::post('logout',  [AuthController::class, 'logout']);

Route::resource('products', ProductController::class);


Route::post('logout',  [AuthController::class, 'logout']);
Route::post('refresh',  [AuthController::class, 'refresh']);
Route::post('me',  [AuthController::class, 'me']);

Route::get('/test',  [AuthController::class, 'test']);

// Route::post('login-facebook', [LoginController::class, 'loginFacebook']);
// Route::post('login-google', [LoginController::class, 'loginGoogle']);

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
