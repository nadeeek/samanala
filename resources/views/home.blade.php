@extends('layouts.master')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
        <h1>My Profile</h1>
        <hr>
        <h3>My Orders</h3>
        @foreach($orders as $order)
            <div class="panel panel-default">
              <div class="panel-body">
                <ul class="list-group">
                @foreach($order->cart->items as $item)
                  <li class="list-group-item">
                  <span class="badge">{{ $item['price']}}$</span>
                  {{ $item['item']['title'] }} | {{ $item['qty']}} Units
                  </li>
                @endforeach
                </ul>
              </div>
              <div class="panel-footer">
                <strong>Total Price : {{ $order->cart->totalPrice}}$</strong>
              </div>
            </div>
        @endforeach
        </div>
    </div>
</div>
@endsection
