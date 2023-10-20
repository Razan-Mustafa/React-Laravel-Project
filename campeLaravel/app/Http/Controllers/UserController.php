<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
      
    }
    
    public function profile($id)
    {
        // dd($id); 
        $user = User::where('id',$id)->get();
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        return response()->json($user);
    }


    public function register(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'email' => 'email|required|unique:users',
                'password' => 'required|min:8',
                // 'phone' => 'required|min:10|max:10',
                // 'image' => 'required|max:5048',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }


        $user = new User();

        // if($request->hasFile('image')){
        //     $image = $request->file('image');
        //     $filename = time().'.'.$image->getClientOriginalExtension();
        //     $destinationPath = public_path('/img');
        //     $image->move($destinationPath, $filename);
        //     $user->image = $filename;
        // }

        $user->name = $request->name;
        $user->email = $request->email;
        // $user->phone = $request->phone;
        // $user->address = $request->address;
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response($user, 201);
    }


 public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed
            $user = Auth::user();

            // You can return user data or a success message
            return response()->json(['user' => $user]);
        }

        // Authentication failed
        return response()->json(['error' => 'Invalid credentials'], 401);
    }







    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::where('id',$id)->get();
        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function EditProfile(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->address = $request->address;
    
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/img');
            $image->move($destinationPath, $filename);
            $user->image = $filename; // Update the user's image field in the database
        }
    
        $user->save();
        return response()->json($user);
    }
    
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
