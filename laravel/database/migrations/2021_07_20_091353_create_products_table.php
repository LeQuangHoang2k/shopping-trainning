<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->integer("id")->autoIncrement();
            $table->integer("category_id");
            $table->string("name")->default('');
            $table->string("slug")->default('');
            $table->text("description");
            $table->decimal('price', $precision = 15, $scale = 3);
            $table->integer("priority");
            $table->string("picture")->default('');
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
