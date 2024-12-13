import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesServie: PlacesService) {}

  @Get()
  findPlaces(@Query('text') text: string) {
    return this.placesServie.findPlace(text);
  }
}
