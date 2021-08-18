<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiscountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('discounts', function (Blueprint $table) {
            $table->integer("id")->autoIncrement();
            $table->integer("product_id");
            $table->string("code")->nullable();
            $table->decimal('price', $precision = 15, $scale = 3)->nullable();
            $table->boolean("is_used")->nullable();
            $table->dateTime("expired_at")->nullable();

            $table->foreign('product_id')->references('id')->on('products');
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
        Schema::dropIfExists('discounts');
    }
}
