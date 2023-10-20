@extends('layout.admin_master')



@section('title', 'Create Category')

@section('content')

    <div class="main-content">
        <section class="section">
            <div class="section-header">
                <h1>Create Category</h1>
            </div>
            <div class="section-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form action="{{ route('admin_categories.store') }}" method="POST">
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
                                        <label for="description">Category Description</label>
                                        <textarea name="description" id="description" class="form-control"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Create Category</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
