import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() body: any) {
    return await this.contactsService.create(body);
  }

  @Get()
  async findAll(@Query('search') search: string) {
    return await this.contactsService.findAll(search);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: any) {
    return await this.contactsService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.contactsService.delete(id);
  }
}