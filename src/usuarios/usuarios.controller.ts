import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
    @Get()
    getUsuarios(){
        return 'Listado de usuarios';
    }

    @Post()
    postUsuarios(@Body() data){
        return data;
    }
}
