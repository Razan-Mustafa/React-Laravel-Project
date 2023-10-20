<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Category;
use App\Models\Package;
use App\Models\User;



class AdminPackageController extends Controller
{
    public function index()
    {
        $adminCategories = Category::all();
        $adminUser = User::all();
        $adminBooking = Booking::all();
        $adminPackage = Package::all();
        return view('admin/admin_package', compact('adminCategories', 'adminUser', 'adminPackage', 'adminBooking'));

        
    }

    public function create()
    {
        $categories = Category::all();

        return view('admin/admin_package_create ', compact('categories'));
    }




    public function store(Request $request)
    {

        $adminPackage = Package::create($request->all());
        $packageId = $adminPackage->id;
        $adminPackage->save();


        return redirect()->route('admin_package.index', ['adminPackage' => $packageId])->with('success', 'Package created successfully');
    }

    public function edit(Package $adminPackage)
    {

        $categories = Category::all();

        return view('admin/admin_package_edit', compact('adminPackage', 'categories'));
    }

    public function update(Request $request, Package $adminPackage)
    {

        $adminPackage->update($request->all());



        return redirect(route('admin_package.index'))->with('success', 'Package updated successfully.');
    }



    public function destroy($id)
    {
        $adminPackage = Package::find($id);
        $adminPackage->delete();
        return redirect()->route('admin_package.index', ['adminPackage' => $id])->with('success', 'Package deleted successfully');
    }
}
