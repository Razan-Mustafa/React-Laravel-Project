<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Category;
use App\Models\Package;
use App\Models\User;

class AdminCategoryController extends Controller
{
    public function index()
    {
        $adminCategories = Category::all();
        $adminUser = User::all();
        $adminBooking = Booking::all();
        $adminPackage = Package::all();



        return view('admin/admin_categories', compact('adminCategories', 'adminUser', 'adminPackage', 'adminBooking'));
    }

    public function create()
    {

        return view('admin/admin_categories_create');
    }




    public function store(Request $request)
    {
        // Create a new category with the form data
        $adminCategories = new Category();
        $adminCategories->name = $request->input('name');
        $adminCategories->image = $request->input('image');
        $adminCategories->description = $request->input('description');
        $adminCategories->save();

        $categoryId = $adminCategories->id;

        // Category::create($request->all());
        return redirect()->route('admin_categories.index', ['adminCategories' => $categoryId])->with('success', 'Category created successfully');
    }

    public function edit(Category $adminCategory)
    {
        return view('admin/admin_categories_edit', compact('adminCategory'));
    }

    public function update(Request $request, Category $adminCategory)
    {
        // $adminCategory->update($request->all());

        $adminCategory->update([
            'name' => $request->input('name'),
            'image' => $request->input('image'),
            'description' => $request->input('description'),
        ]);

        return redirect(route('admin_categories.index'))->with('success', 'Category updated successfully.');
    }



    public function destroy($id)
    {
        $adminCategory = Category::find($id);
        $adminCategory->delete();
        return redirect()->route('admin_categories.index', ['adminCategory' => $id])->with('success', 'Category deleted successfully');
    }
}
