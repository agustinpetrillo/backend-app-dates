import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { UserSettingsModule } from './user-settings/user-settings.module';

//ConfigModule is for fixing .env

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.MONGO_DB_URL}`,
    ),
    TasksModule,
    AuthModule,
    AccountsModule,
    UserSettingsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
