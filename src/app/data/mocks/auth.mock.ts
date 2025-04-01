import { LoginResponse } from "../models/auth.model";

export const AUTH_RESPONSE_MOCK: LoginResponse = {
    token: 'token',
    user: {
        id: 1,
        name: 'name',
        email: 'email'
    }
};