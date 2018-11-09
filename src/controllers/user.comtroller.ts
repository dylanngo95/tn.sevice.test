import {Get, Post, Route, Body, Query, Header, Path, SuccessResponse, Controller } from 'tsoa';
import { User } from '../models/user.model';

@Route('Users')
export class UsersController extends Controller {
    
  @Get('{id}')
    public async getUser(id: number, @Query() name: string): Promise<User> {
      
      let user: User = {
        email: 'tinhngo@gmail.com',
        id: id,
      };  
      return Promise.resolve(user);;
    }
   
}