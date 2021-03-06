<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

// User Management
Route::get('/home', 'HomeController@index')->name('home');

//prodcut Managemet
Route::get('/store', 'ProductsController@index');
Route::get('/add_to_cart/{id}', 'ProductsController@addToCart' );
Route::get('/cart', 'ProductsController@getCart' );
Route::get('/checkout', 'ProductsController@getCheckout' )->middleware('auth');
Route::post('/checkout', 'ProductsController@postCheckout' )->middleware('auth');
