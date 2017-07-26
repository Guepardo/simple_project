<?php

use Illuminate\Database\Seeder;
use App\Enums\SystemStatusTypes;

class SystemTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for( $a = 0; $a < 100; $a++ ){
	        DB::table('systems')->insert([
	            'description' => str_random(10),
	            'attendance_email' => str_random(10).'@gmail.com',
	            'initials' => str_random(5),
	            'url' => 'https://www.'.str_random(10) .'.com.br',
	            'status' => SystemStatusTypes::ACTIVE
	        ]);
        }
    }
}
