import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class CarService {

  getHello(): string {
    return 'Autoss!';
  }

  getHello2(): string {
    return 'Ferrariii!';
  }
}
