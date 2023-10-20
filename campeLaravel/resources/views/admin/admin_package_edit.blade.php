@extends('layout.admin_master')


@section('title', 'Edit Package')


@section('content')

    <div class="main-content">
        <section class="section">
            <div class="section-header">
                <h1>Edit Package</h1>
            </div>
            <div class="section-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form action="{{ route('admin_package.update', ['admin_package' => $adminPackage->id]) }}"
                                    method="POST">

                                    @csrf
                                    @method('PUT')

                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" name="name"
                                            value="{{ $adminPackage->name }}">
                                    </div>


                                    <div class="form-group">
                                        <label for="category_id">Category</label>
                                        <select class="form-control" id="category_id" name="category_id">
                                            @foreach ($categories as $category)
                                                <option value="{{ $category->id }}"
                                                    {{ $adminPackage->category_id == $category->id ? 'selected' : '' }}>
                                                    {{ $category->name }}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>


                                    <div class="form-group">
                                        <label for="price">price</label>
                                        <input type="number" class="form-control" id="price" name="price"
                                            value="{{ $adminPackage->price }}">
                                    </div>

                                    <div class="form-group">
                                        <label for="number_of_person">number_of_person</label>
                                        <input type="number" class="form-control" id="number_of_person"
                                            name="number_of_person" value="{{ $adminPackage->number_of_person }}">
                                    </div>

                                    <div class="form-group">
                                        <label for="image">Image URL</label>
                                        <input type="file" class="form-control" id="image" name="image"
                                            value="{{ $adminPackage->image }}">
                                    </div>

                                    <div class="form-group">
                                        <label for="image">Current Image</label>
                                        <img src="{{ asset('image/' . $adminPackage->image) }}"
                                            alt="{{ $adminPackage->name }}" width="70px" height="60px">
                                    </div>


                                    <div class="form-group">
                                        <label for="description">Category Description</label>
                                        <textarea name="description" id="description" class="form-control">{{ $adminPackage->description }}</textarea>
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
