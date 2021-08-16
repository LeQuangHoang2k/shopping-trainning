<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Discount\DiscountController;
use App\Http\Controllers\Order\OrderController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\ThirdParty\ThirdPartyController;
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
Route::resource('/register', RegisterController::class);

Route::post('login', [AuthController::class, 'login']);
Route::post('logout',  [AuthController::class, 'logout']);
Route::post('refresh',  [AuthController::class, 'refresh']);
// Route::post('me',  [AuthController::class, 'me']);

Route::post('register-facebook', [ThirdPartyController::class, 'registerFacebook']);
Route::post('register-google', [ThirdPartyController::class, 'registerGoogle']);
Route::post('login-facebook', [ThirdPartyController::class, 'loginFacebook']);
Route::post('login-google', [ThirdPartyController::class, 'loginGoogle']);

Route::resource('products', ProductController::class);
Route::resource('orders', OrderController::class);
Route::resource('discounts', DiscountController::class);

Route::get('/test',  [AuthController::class, 'test']);

// Route::post('login-facebook', [LoginController::class, 'loginFacebook']);
// Route::post('login-google', [LoginController::class, 'loginGoogle']);

//products
// Route::get('/product',  [ProductsController::class, 'index']);
//Route::get('/product/{id}',  [ProductsController::class, 'show']);
//Route::post('/product/{id}',  [ProductsController::class, 'create']);
//Route::put('/product/{id}',  [ProductsController::class, 'update']);
//Route::patch('/product/{id}',  [ProductsController::class, 'edit']);
//Route::delete('/product/{id}',  [ProductsController::class, 'destroy']);
