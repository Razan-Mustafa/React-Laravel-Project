@extends('layout.admin_master')



@section('title', 'Create Product')

@section('content')

    <div class="main-content">
        <section class="section">
            <div class="section-header">
                <h1>Create Product</h1>
            </div>
            <div class="section-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form action="{{ route('admin_product.store') }}" method="POST">
                                    @csrf
                                    <div class="form-group">
                                        <label for="name">product Name</label>
                                        <input type="text" name="name" id="name" class="form-control" required>
                                    </div>


                                    <div class="form-group">
                                        <label for="Package">Package</label>
                                        <select class="form-control" id="Package" name="package_id">
                                            @foreach ($Packages as $package)
                                                <option value="{{ $package->id }}">{{ $package->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>


                                    <div class="form-group">
                                        <label for="image">Image URL</label>

                                        <input type="file"name="image" id="image" class="form-control">
                                    </div>



                                    <button type="submit" class="btn btn-primary">Create Product</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
