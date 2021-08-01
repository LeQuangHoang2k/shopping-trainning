<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterFacebookRequest extends FormRequest
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
            "facebook_id" => "required|numeric|min:9|unique:users,facebook_id",
            "email" => "required|email",
            "name" => "required",
            "picture" => "required",
            "is_duplicate" => "boolean",
        ];
    }
}
