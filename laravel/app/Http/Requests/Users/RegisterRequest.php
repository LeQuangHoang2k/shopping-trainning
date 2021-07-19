<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            "email" => "required|email:rfc,dns",
            "phone" => "required|numeric|min:10|max:11",
            "password" => "required|string|min:6",
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'email errors',
            "phone.required" => "A phone is required",
            "phone.numeric" => "A phone is number",
            "phone.min" => "A phone length must > 9",
            "phone.max" => "A phone length must < 11",
            'password.required' => 'A pwd is required',
            'password.min' => 'A pwd must have more 6 token',
        ];
    }
}
