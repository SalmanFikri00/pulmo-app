<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index (Request $request ){

            $user = $request->user();

            if($user->role == "doctor"){
                return Inertia::render('Doctor');
            }else{
                return Inertia::render('Dashboard');
            };

        }

    public function lcdetection () {

            return Inertia::render('LungCancerDetection');

    }

}
