<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([

            [
                'name' => 'Pocket Watch',
                'image' => '../img/1-1.jpg',
                'category_id' => 1,
            ],
            [
                'name' => 'Pocket Watch',
                'image' => '../img/1-1.jpg',
                'category_id' => 1,
            ],
            [
                'name' => 'Pocket Watch',
                'image' => '../img/1-1.jpg',
                'category_id' => 1,
            ],
            [
                'name' => 'Pocket Watch',
                'image' => '../img/1-1.jpg',
                'category_id' => 1,
            ],
            [
                'name' => 'Pocket Watch',
                'image' => '../img/1-1.jpg',
                'category_id' => 1,
            ],
            [
                'name' => 'Pocket Watch',
                'image' => '../img/1-1.jpg',
                'category_id' => 1,
            ],

        ]);
    }
}
