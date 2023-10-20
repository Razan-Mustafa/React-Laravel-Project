<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Category;
use App\Models\Package;
use App\Models\User;

class AdminController extends Controller
{
    public function index()
    {
        $admin = Admin::all();
        $adminCategories = Category::all();
        $adminUser = User::all();
        $adminBooking = Booking::all();
        $adminPackage = Package::all();

        return view('admin/admin_admin', compact('admin', 'adminCategories', 'adminUser', 'adminPackage', 'adminBooking'));


    }

    public function create()
    {


        return view('admin/admin_admin_create ');
    }




    public function store(Request $request)
    {

        

        $admin = Admin::create($request->all());
        $adminId = $admin->id;
        $admin->save();


        return redirect()->route('admin_admin.index', ['admin' => $adminId])->with('success', 'Admin created successfully');
    }

    public function edit(Admin $admin_admin)
    {
        return view('admin/admin_admin_edit', compact('admin_admin'));
    }

    public function update(Request $request, Admin $admin_admin)
    {
        $admin_admin->update($request->all());

        return redirect(route('admin_admin.index'))->with('success', 'Admin updated successfully.');
    }



    public function destroy($id)
    {
        $admin = Admin::find($id);
        $admin->delete();
        return redirect()->route('admin_admin.index', ['admin' => $id])->with('success', 'Admin deleted successfully');
    }
}
