@extends('layout.admin_master')



@section('title', 'Create Package')

@section('content')

    <div class="main-content">
        <section class="section">
            <div class="section-header">
                <h1>Create Package</h1>
            </div>
            <div class="section-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form action="{{ route('admin_package.store') }}" method="POST">
                                    @csrf
                                    <div class="form-group">
                                        <label for="name">package Name</label>
                                        <input type="text" name="name" id="name" class="form-control" required>
                                    </div>


                                    <div class="form-group">
                                        <label for="category">Category</label>
                                        <select class="form-control" id="category" name="category_id">
                                            @foreach ($categories as $category)
                                                <option value="{{ $category->id }}">{{ $category->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="price">price</label>
                                        <input type="number" name="price" id="price" class="form-control" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="number_of_person">number_of_person</label>
                                        <input type="number" name="number_of_person" id="number_of_person" class="form-control" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="image">Image URL</label>

                                        <input type="file"name="image" id="image" class="form-control">
                                    </div>

                                    <div class="form-group">
                                        <label for="description">package Description</label>
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
