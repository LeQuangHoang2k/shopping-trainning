<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginGoogleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "google_id" => "required|numeric|min:9",
            "email" => "required|email",
            "name" => "required",
            "picture" => "required"
        ];
    }
}
