<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Cart;
use Session;


class ProductsController extends Controller
{
    public function index()
    {
    	$products = Product::all();
    	return view('shop.index')->with('products', $products);
    }

    public function addToCart(Request $request, $id)
    {
    	$product = Product::find($id);

    	$oldCart = Session::has('cart') ? Session::get('cart') : null;


    	$cart = new Cart($oldCart);
    	$cart->add($product, $product->id);

    	$request->session()->put('cart', $cart);

    	//dd($request->session()->get('cart'));

    	return redirect(url('/cart'))->with('success', 'Product added to Cart');
    }

    public function getCart()
    {
    	if(!Session::has('cart')){
    		return view('shop.shopping-cart')->with('products', null);
    	}

    	$oldCart = Session::get('cart');
    	$cart = new Cart($oldCart);
    	// dd($cart->items);
    	return view('shop.shopping-cart', ['products' => $cart->items, 'totalPrice' => $cart->totalPrice]);
    }

    public function getCheckout()
    {
    	if(!Session::has('cart')){
    		return view('shop.shopping-cart')->with('products', null);
    	}

    	$oldCart = Session::get('cart');
    	$cart = new Cart($oldCart);
    	$totalPrice = $cart->totalPrice;
    	// dd($cart->items);
    	return view('shop.checkout', ['totalPrice' => $cart->totalPrice]);

    }

}
