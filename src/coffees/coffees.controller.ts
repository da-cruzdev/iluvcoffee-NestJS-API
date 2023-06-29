import { Controller, Get, Param } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}
  @Get()
  getAll() {
    return 'this action returns all the coffees!!';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return '';
  }
}
