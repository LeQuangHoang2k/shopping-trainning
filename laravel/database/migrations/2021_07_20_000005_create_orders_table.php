<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->integer("id")->autoIncrement();
            $table->integer("user_id");
            $table->text("address")->nullable();
            $table->string("phone")->nullable();
            $table->integer("discount_id");
            $table->decimal('tax', $precision = 15, $scale = 3)->nullable();
            $table->string("total_price")->nullable();
            $table->timestamps();

            $table->foreign("user_id")->references('id')->on('users');
            $table->foreign("discount_id")->references('id')->on('discounts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
