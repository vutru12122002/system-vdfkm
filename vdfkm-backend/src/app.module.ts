import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://DoNhuThang:khongcopass@cluster0.uhlehcu.mongodb.net/vdfkm?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
