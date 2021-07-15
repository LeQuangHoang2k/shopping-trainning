<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->integer("id")->autoIncrement();
            $table->integer("order_id");
            $table->integer("product_id");
            $table->integer("amount");
            $table->integer("option_id");
            $table->timestamps();

            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign("option_id")->references('id')->on('product_options');
            $table->foreign("order_id")->references('id')->on('orders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_details');
    }
}