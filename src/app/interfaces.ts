export interface UserProps {
    username: string | null;
    first_name: string | null;
    last_name: string | null;
    balance: number | null;
}

export interface ProductProps {
    name: string;
    price: number;
    color: string;
    logo: string;
}
