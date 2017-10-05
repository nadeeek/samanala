<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Cart;
use App\Order;
use Session;
use Auth;
use Stripe\Stripe;
use Stripe\Charge;

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

    public function postCheckout(Request $request)
    {
         if(!Session::has('cart')){
            return view('shop.shopping-cart');
        }

        $oldCart = Session::get('cart');
        $cart = new Cart($oldCart);

        // Set your secret key: remember to change this to your live secret key in production
        // See your keys here: https://dashboard.stripe.com/account/apikeys
        Stripe::setApiKey("sk_test_s164uvn2x5liagTzDd68FACO");

        try{
                // Charge the user's card:
            // $charge = Charge::create(array(
            //   "amount" => $cart->totalPrice * 100,
            //   "currency" => "usd",
            //   "description" => "Example charge",
            //   "source" => $request->input('stripeToken'),
            // ));

            $order = new Order();
            $order->cart = serialize($cart);
            $order->address = $request->input('address');
            $order->name = $request->input('name');
            $order->payment_id = 123;

            Auth::user()->orders()->save($order);


            }catch(Exception $e){
                     return redirect(url('/checkout'))->with('error', $e->getMessage());
                   }

           Session::forget('cart');
           return redirect(url('/store'))->with('success', 'Successfully purchased prodcuts!');
    }

}
