@extends('layout.admin_master')


@section('title', 'Edit Product')


@section('content')

    <div class="main-content">
        <section class="section">
            <div class="section-header">
                <h1>Edit Product</h1>
            </div>
            <div class="section-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form action="{{ route('admin_product.update', ['admin_product' => $adminProduct->id]) }}"
                                    method="POST">

                                    @csrf
                                    @method('PUT')

                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" name="name"
                                            value="{{ $adminProduct->name }}">
                                    </div>


                                    <div class="form-group">
                                        <label for="package_id">package</label>
                                        <select class="form-control" id="package_id" name="package_id">
                                            @foreach ($Packages as $package)
                                                <option value="{{ $package->id }}"
                                                    {{ $adminProduct->package_id == $package->id ? 'selected' : '' }}>
                                                    {{ $package->name }}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>




                                    <div class="form-group">
                                        <label for="image">Image URL</label>
                                        <input type="file" class="form-control" id="image" name="image"
                                            value="{{ $adminProduct->image }}">
                                    </div>

                                    <div class="form-group">
                                        <label for="image">Current Image</label>
                                        <img src="{{ asset('image/' . $adminProduct->image) }}"
                                            alt="{{ $adminProduct->name }}" width="70px" height="60px">
                                    </div>



                                    <button type="submit" class="btn btn-primary">Update Product</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

@endsection
