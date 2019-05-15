import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { UsuariosDto } from './usuarios.dto';

@Controller('usuarios')
export class UsuariosController {

    private database: Array<UsuariosDto> = [];

    @Get()
    getUsuarios(): Array<UsuariosDto> {
        return this.database;
    }

    @Post()
    postUsuarios(@Body() data: UsuariosDto) {
        this.database.push(data);
        return data;
    }

    @Delete(':email')
    deleteUsuario(@Param() data) {
        this.database.forEach((item, n) => {
            if (item.email == data.email) {
                this.database.splice(n, 1);
            }
        });
        return data;
    }

    @Put()
    putUsuarios(@Body() data){
        this.database.forEach((item, n) => {
            if (item.email == data.email) {
                this.database[n] = data;
            }
        });
        return data;
    }
}
