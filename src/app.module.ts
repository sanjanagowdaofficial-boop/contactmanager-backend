import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/contact.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres123',
      database: 'contact_manager',
      entities: [Contact],
      synchronize: true,
    }),

    ContactsModule,
  ],
})
export class AppModule {}