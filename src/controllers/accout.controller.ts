import {TestAccount} from '../models/accout.model';
import {Route, Get} from 'tsoa';
import {User} from '../models/user.model';

@Route('Accounts')
export class AccountsController {
    /** Get the current account */
    @Get('Current')
    public async current(): Promise<TestAccount> {
        return {
            id: 1,
            name: 'user name 123',
            token: 'Athor: sdad232ad32asdadsdadasdaddsdwqw12',
        };
    }

    /** Get a list of users for the account */
    @Get('Users')
    public async getUsers(): Promise<User[]> {
        return [
            {
                createdAt: new Date('1995-02-02'),
                email: 'test@test.com',
                id: 1
            },
            {
                createdAt: new Date('1995-02-02'),
                email: 'test2@test2.com',
                id: 2,
            }
        ];
    }
}
