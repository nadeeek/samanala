@extends('layouts.master')

@section('title')
   Shopping Cart
@endsection

@section('content')
	@foreach($products->chunk(3) as $productChunk)
		<div class="row">
		@foreach($productChunk as $product)
			<div class="col-sm-6 col-md-4">
			<div class="thumbnail">
				<img src="{{ $product->image_path }}" alt="..."  class="img-thumbnail img-responsive">
				<div class="caption">
					<h3>{{ $product->title }}</h3>
					<p class="description">{{ $product->description }}</p>
					<div class="clearfix">
					<div class="pull-left price">${{ $product->price }}</div>
					<a href="{{ url('/add_to_cart/'.$product->id) }}" class="btn btn-success pull-right">Add to Cart</a>
					</div>
				</div>
			</div>
		</div>
		@endforeach
	</div>
	@endforeach
	

@endsection
