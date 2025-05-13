import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345', 
      database: 'postgres', 
      autoLoadEntities: true,
      synchronize: true, 
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
