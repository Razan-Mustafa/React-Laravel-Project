@extends('layout.admin_master')



@section('title', 'Create Category')

@section('content')

    <div class="main-content">
        <section class="section">
            <div class="section-header">
                <h1>Create admin</h1>
            </div>
            <div class="section-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form action="{{ route('admin_admin.store') }}" method="POST">
                                    @csrf

                                    <div class="form-group">
                                        <label for="name">Category Name</label>
                                        <input type="text" name="name" id="name" class="form-control" required>
                                    </div>


                                    <div class="form-group">
                                        <label for="image">Image URL</label>

                                        <input type="file"name="image" id="image" class="form-control">
                                    </div>


                                    <div class="form-group">
                                        <label for="email">email</label>
                                        <input type="email" name="email" id="email" class="form-control" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="password">password</label>
                                        <input type="password" name="password" id="password" class="form-control" required>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Create admin</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
