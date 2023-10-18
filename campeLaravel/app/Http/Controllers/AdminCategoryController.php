<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminCategoryController extends Controller
{
    public function index()
    {
        $adminCategories = AdminCategory::all();
        return view('admin_categories.index', compact('adminCategories'));
    }

    public function create()
    {
        return view('admin_categories.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules for images
            'description' => 'nullable',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('admin_category_images');
            $validatedData['image'] = $imagePath;
        }

        AdminCategory::create($validatedData);

        return redirect(route('admin_categories.index'))->with('success', 'Category created successfully.');
    }

    public function edit(AdminCategory $adminCategory)
    {
        return view('admin_categories.edit', compact('adminCategory'));
    }

    public function update(Request $request, AdminCategory $adminCategory)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules for images
            'description' => 'nullable',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('admin_category_images');
            $validatedData['image'] = $imagePath;
        }

        $adminCategory->update($validatedData);

        return redirect(route('admin_categories.index'))->with('success', 'Category updated successfully.');
    }

    public function destroy(AdminCategory $adminCategory)
    {
        $adminCategory->delete();

        return redirect(route('admin_categories.index'))->with('success', 'Category deleted successfully.');
    }
}
