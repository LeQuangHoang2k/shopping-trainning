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
            $table->integer("facebook_id")->nullable();
            $table->integer("google_id")->nullable();
            $table->string("email")->nullable();
            $table->string("password")->nullable();
            $table->string("name")->nullable();
            $table->string("phone")->nullable();
            $table->string("picture")->nullable();
            $table->text("address")->nullable();
            $table->string("role")->nullable()->default('user');
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
