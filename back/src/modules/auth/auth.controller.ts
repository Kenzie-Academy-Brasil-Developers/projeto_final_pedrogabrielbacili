import { Body, Controller, Post, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { localAuthguard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Login")
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(localAuthguard)
  async login(@Body() user:LoginDto){
    return this.authService.login(user.email);
  }
}
