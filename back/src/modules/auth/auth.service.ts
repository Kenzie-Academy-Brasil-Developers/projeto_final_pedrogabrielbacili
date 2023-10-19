import { Injectable } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { compare } from "bcryptjs";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService){}

    async validateUser(userEmail: string, userPassword: string){
        const user = await this.userService.findByEmail(userEmail)
        if(user){
            const passwordMatch = await compare(userPassword, user.password)
            if(passwordMatch){
                return {email:user.email}
            }
        }
        return null;
    }

    async login(email: string){
        const user = await this.userService.findByEmail(email);
        const payload = { 
            sub: user.id, 
            email: user.email,
            conta: user.conta,
          };
        return {
            token: this.jwtService.sign(payload),
        }
    }
}
