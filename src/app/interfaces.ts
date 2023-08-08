export interface UserProps {
    username: string;
    first_name: string;
    last_name: string;
    balance: number;
}

export interface ProductProps {
    id: string,
    name: string;
    price: number;
    color: string;
    logo: string;
    stock: number;
}

export interface ControllerButtonProps {
    value: number,
}
