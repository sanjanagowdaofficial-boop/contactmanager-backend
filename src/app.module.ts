import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/contact.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
  isGlobal: true,
}),
    TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
}),

    ContactsModule,
  ],
})
export class AppModule {}