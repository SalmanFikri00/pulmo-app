<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/dashboard');
});

Route::get('/dashboard', [UserController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/lc-detection', [UserController::class, 'lcdetection'])->middleware(['auth', 'verified'])->name('lcdetection');

Route::middleware('auth')->group(function () {
    Route::get('/riwayat', function () {
        return Inertia::render('Riwayat');
    });
    Route::get('/jadwal', function () {
        return Inertia::render('Jadwal');
    });
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
