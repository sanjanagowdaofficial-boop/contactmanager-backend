import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
  ) {}

  async create(data: any) {
    const contact = this.contactsRepository.create(data);

    return await this.contactsRepository.save(contact);
  }

  async findAll(search?: string) {
    if (search) {
      return await this.contactsRepository.find({
        where: [
          {
            full_name: Like(`%${search}%`),
          },
          {
            email: Like(`%${search}%`),
          },
        ],
      });
    }

    return await this.contactsRepository.find({
      order: {
        created_at: 'DESC',
      },
    });
  }

  async update(id: number, data: any) {
    await this.contactsRepository.update(id, data);

    return {
      message: 'Contact Updated Successfully',
    };
  }

  async delete(id: number) {
    await this.contactsRepository.delete(id);

    return {
      message: 'Contact Deleted Successfully',
    };
  }
}