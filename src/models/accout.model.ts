import { User } from './user.model';

export interface TestAccount {
    id: number;
    address?: string;
    name: string;
    users?: User[];
    fields?: string[];
}