@extends('layouts.app')

@section('title', 'Sistema')

@section('content')
<div class="container" style="top:10px;">
    <div class="col-md-12">
		<!-- Search area -->
		<div class="card">
		  <div class="card-header">
		    Featured
		  </div>
		  <div class="card-block">
			<!-- Form -->
			<div class="row">
				<div class="col-md-12">
				  	<div class="form-group row">
					  <label for="example-text-input" class="col-2 col-form-label">Text</label>
					  <div class="col-10">
					    <input class="form-control" type="text" value="Artisanal kale" id="example-text-input">
					  </div>
					</div>
					<div class="form-group row">
					  <label for="example-search-input" class="col-2 col-form-label">Search</label>
					  <div class="col-10">
					    <input class="form-control" type="search" value="How do I shoot web" id="example-search-input">
					  </div>
					</div>
					<div class="form-group row">
					  <label for="example-email-input" class="col-2 col-form-label">Email</label>
					  <div class="col-10">
					    <input class="form-control" type="email" value="bootstrap@example.com" id="example-email-input">
					  </div>
					</div>
				</div>
		    </div>
			<!-- Form !end -->

			<div class="row">
				<div class="col-md-12">
					<div class="card">
					  <div class="card-header">
					    Featured
					  </div>
					  <div class="card-block">
					  	<table class="table table-striped">
						  <thead>
						    <tr>
						      <th>#</th>
						      <th>First Name</th>
						      <th>Last Name</th>
						      <th>Username</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <th scope="row">1</th>
						      <td>Mark</td>
						      <td>Otto</td>
						      <td>@mdo</td>
						    </tr>
						    <tr>
						      <th scope="row">2</th>
						      <td>Jacob</td>
						      <td>Thornton</td>
						      <td>@fat</td>
						    </tr>
						    <tr>
						      <th scope="row">3</th>
						      <td>Larry</td>
						      <td>the Bird</td>
						      <td>@twitter</td>
						    </tr>
						  </tbody>
						</table>
					</div>
				</div>
			</div>
		  </div>
		</div>
		<!-- Search area !end -->
    </div>
</div>
@endsection