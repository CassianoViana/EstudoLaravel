<?php

use Illuminate\Database\Seeder;
use \App\Contact;

class ContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Contact::truncate();
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 50; $i++) {
            Contact::create([
                'seller_name' => $faker->sentence,
                'contact_name' => $faker->sentence,
                'company' => $faker->sentence,
                'phone' => $faker->sentence,
                'email' => $faker->email,
            ]);
        }
    }
}
