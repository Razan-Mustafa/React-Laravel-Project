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
                                <form
                                    action="{{ route('admin_categories.update', ['admin_category' => $adminCategory->id]) }}"
                                    method="POST">

                                    @csrf
                                    @method('PUT')

                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" name="name"
                                            value="{{ $adminCategory->name }}">
                                    </div>

                                    <div class="form-group">
                                        <label for="image">Image URL</label>
                                        <input type="file" class="form-control" id="image" name="image"
                                            value="{{ $adminCategory->image }}">
                                    </div>
                                    <div class="form-group">
                                        <label for="image">Current Image</label>
                                        <img src="{{ asset('image/' . $adminCategory->image) }}"
                                            alt="{{ $adminCategory->name }}" width="70px" height="60px">
                                    </div>

                                    <div class="form-group">
                                        <label for="description">Category Description</label>
                                        <textarea name="description" id="description" class="form-control">{{ $adminCategory->description }}</textarea>
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
