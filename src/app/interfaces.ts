export interface UserProps {
    username: string;
    first_name: string;
    last_name: string;
    balance: number;
}

export interface ProductProps {
    name: string;
    price: number;
    color: string;
    logo: string;
}

export interface ControllerButtonProps {
    value: number,
}