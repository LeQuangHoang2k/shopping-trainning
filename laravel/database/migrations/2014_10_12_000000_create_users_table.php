<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->integer("id")->autoIncrement();
            $table->integer("facebook_id");
            $table->integer("google_id");
            $table->string("email")->default('');
            $table->string("name")->default('');
            $table->string("phone")->default('');
            $table->string("picture", 255)->default('');
            $table->string("password")->default('');
            $table->string("role")->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
