<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // return false;
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
            // "email" => "required|email:rfc,dns|exists:users,email",
            "password" => "required|min:6",
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'email errors',
            'password.required' => 'A pwd is required',
            'password.min' => 'A pwd must have more 6 token',
        ];
    }
}
