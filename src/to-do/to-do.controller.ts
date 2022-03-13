import { Controller, Get, Param,Delete, Patch,Query,Body, HttpStatus, NotFoundException, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddTodoDto } from 'src/dto/add-todo.dto';
import { UpdateToDodto } from 'src/dto/UpdateTodoDto.dto';
import { Todo } from 'src/to-do-module/Model/todo.model';
import { ToDoService } from './to-do.service';


@Controller('to-do')
export class ToDoController {
    
    constructor(private todoService:ToDoService ){}
    @Get()
    getToDos() : any {
      return this.todoService.getToDos();
    }
    @Get('/:id') 
    getToDoId(@Param('id') id ):Todo {
      return this.todoService.getToDoId(id);
    }
   // @UsePipes(ValidationPipe)
    @Post("/add")
    addTodo(@Body() addTodo:AddTodoDto ){
    return this.todoService.addTodo(addTodo);
    }
    @Delete('/:id')
    DeleteToDoId(@Param('id') id ):any {
      return this.todoService.DeleteToDoId(id);
    } 
    @Patch("/:id?")
    UpdateToDoId(@Body() updateToDodto:UpdateToDodto ):any {
      
      return this.todoService.UpdateToDoId(updateToDodto);

    } 
   
}
