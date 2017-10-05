@extends('layouts.master')

@section('title')
   Shopping Cart
@endsection

@section('content')
	  <div class='row'>
    <div class='col-sm-6 col-md-5 col-md-offset-4 col-sm-offset-4'>
      <div class="alert alert-success">
        {{ Session::get('success')}}
      </div>
    </div>
        
    <div class='col-sm-6 col-md-5 col-md-offset-4 col-sm-offset-4'>
      <form  action="{{ url('/checkout')}}"  id="payment-form" method="post">
        <div class='form-row'>
          <div class='col-xs-12 form-group required'>
            <label class='control-label'>Name on Card</label>
            <input class='form-control' id="name" size='4' type='text'>
          </div>
        </div>
        <div class='form-row'>
          <div class='col-xs-12 form-group card required'>
            <label class='control-label'>Card Number</label>
            <input autocomplete='off' class='form-control card-number' id="number" size='20' type='text'>
          </div>
        </div>
        <div class='form-row'>
          <div class='col-xs-4 form-group cvc required'>
            <label class='control-label'>CVC</label>
            <input autocomplete='off' class='form-control card-cvc' id="cvc" placeholder='ex. 311' size='4' type='text'>
          </div>
          <div class='col-xs-4 form-group expiration required'>
            <label class='control-label'>Expiration</label>
            <input class='form-control card-expiry-month' id="month" placeholder='MM' size='2' type='text'>
          </div>
          <div class='col-xs-4 form-group expiration required'>
            <label class='control-label'> </label>
            <input class='form-control card-expiry-year' id="year" placeholder='YYYY' size='4' type='text'>
          </div>
        </div>
        <div class='form-row'>
          <div class='col-md-12'>
            <div class='form-control total btn btn-info'>
              Total:
              <span class='amount'>${{ $totalPrice }}</span>
            </div>
          </div>
        </div><br>
        {{ csrf_field()}}
        <div class='form-row'>
          <div class='col-md-12 form-group'>
            <button class='form-control btn btn-primary submit-button' type='submit'>Pay »</button>
          </div>
        </div>
        <div class='form-row'>
          <div class='col-md-12 error form-group hide'>
            <div class='alert-danger alert' id="card-errors">
              Please correct the errors and try again.
            </div>
          </div>
        </div>
      </form>
    </div>
        <div class='col-md-4'></div>
    </div>
</div>
@endsection

@section('scripts')
  <script src="https://js.stripe.com/v3/"></script>
  <script src="{{ asset('js/checkout.js')}}"></script>
@endsection
