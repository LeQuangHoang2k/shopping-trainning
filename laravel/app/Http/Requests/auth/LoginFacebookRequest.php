<?php

namespace App\Http\Requests\Auth;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class LoginFacebookRequest extends FormRequest
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
            "facebook_id" => "required|numeric|exists:users,facebook_id",
            "email" => "required|email",
            // "name" => "required",
            // "picture" => "required",
            // "is_duplicate" => "boolean",
        ];
    }

    public function messages()
    {
        return [
            'facebook_id.exists' => 'facebook id not existed',
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
