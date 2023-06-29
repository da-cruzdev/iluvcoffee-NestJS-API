import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  getAll() {
    return 'this action returns all the coffees!!';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return '';
  }
}
