<?php

namespace App\Http\Requests\auth;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

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
            // 'email' => 'unique:users,email_address'
            "email" => 'required|email',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10|max:11',
            "password" => 'required|min:6|max:25',
            "confirm_password" => 'required|min:6|max:25|same:password',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $response = new JsonResponse([
            'data' => [],
            'meta' => [
                'message' => 'The given data is invalid',
                'errors' => $validator->errors()
            ]
        ], 422);

        throw new ValidationException($validator, $response);
    }
}
