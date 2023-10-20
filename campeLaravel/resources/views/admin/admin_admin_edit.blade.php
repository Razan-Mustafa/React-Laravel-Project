@extends('layout.admin_master')


@section('title', 'Edit Category')


@section('content')

    <div class="main-content">
        <section class="section">
            <div class="section-header">
                <h1>Edit Category</h1>
            </div>
            <div class="section-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form action="{{ route('admin_admin.update', ['admin_admin' => $admin_admin->id]) }} " method="POST" enctype="multipart/form-data">

                                    @csrf
                                    @method('PUT')

                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" name="name"
                                            value="{{ $admin_admin->name }}">
                                    </div>

                                    <div class="form-group">
                                        <label for="email">email</label>
                                        <input type="email" class="form-control" id="email" name="email"
                                            value="{{ $admin_admin->email }}">
                                    </div>

                                    <div class="form-group">
                                        <label for="password">password</label>
                                        <input type="password" class="form-control" id="password" name="password"
                                            value="{{ $admin_admin->password }}">
                                    </div>

                                    <div class="form-group">
                                        <label for="image">Image URL</label>
                                        <input type="file" class="form-control" id="image" name="image"
                                            value="{{ $admin_admin->image }}">
                                    </div>

                                    <div class="form-group">
                                        <label for="image">Current Image</label>
                                        <img src="{{ asset('image/' . $admin_admin->image) }}" alt="{{ $admin_admin->name }}"
                                            width="70px" height="60px">
                                    </div>


                                    <button type="submit" class="btn btn-primary">Update Category</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

@endsection
