import { Controller, Get } from '@nestjs/common';
import { MenuDto, MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  getMenu(): Promise<MenuDto> {
    return this.menuService.getMenu();
  }
}
