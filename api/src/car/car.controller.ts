import { Controller, Get } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly appService: CarService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ferrari')
  getHello2(): string {
    return this.appService.getHello2();
  }
}
