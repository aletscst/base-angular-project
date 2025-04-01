export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    token: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
}