import {TestAccount} from '../models/accout.model';
import {Route, Get, Post, Body} from 'tsoa';
import {User} from '../models/user.model';

@Route('Accounts')
export class AccountsController {
    
    /** Get the current account */
    @Get('Current')
    public async current(): Promise<TestAccount> {
        return {
            id: 1,
            name: 'user name 123',
            token: '12345678901234567890010',
        };
    }

    /** Add User */
    @Post('Add')
    public async addUser(@Body() account: TestAccount): Promise<TestAccount> {
        return {
            id: account.id,
            name: account.name,
            address: account.address,
        };
    }

    /** Get a list of users for the account */
    @Get('Users')
    public async getUsers(): Promise<User[]> {
        return [
            {
                email: 'test@test.com',
                id: 1,
            },
            {
                email: 'test2@test2.com',
                id: 2,
            }
        ];
    }
}
