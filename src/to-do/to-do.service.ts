import { Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from 'src/dto/add-todo.dto';
import { UpdateToDodto } from 'src/dto/UpdateTodoDto.dto';
import { Todo } from 'src/to-do-module/Model/todo.model';

@Injectable()
export class ToDoService {
    
    
    private t = new Todo(1,"med");
    private t1 = new Todo(2,"wassim");
    private todos :Todo[]=[this.t,this.t1];
    
    getToDos() : any {
        if (this.todos.length==0)  return ["you have nothing to do !"];
        return this.todos;
    }
    getToDoId(id):Todo {
      const obj=this.todos.find(x=> x.id==id);
      if (!obj) throw new NotFoundException('todo not found');
      return  obj;
    } 
    DeleteToDoId( id ):any {
        var arr = this.todos.filter(x=> x.id!=id);
        if (arr.length!=this.todos.length) 
          {this.todos=arr;
        return "you successfully delete the todo with id " + id;
          }
        else throw new NotFoundException('todo not found already');

    } 
    addTodo(addTodo: AddTodoDto): Todo[] {
      var obj= this.todos.find(x=> addTodo.id==x.id)
      if (obj) throw new NotFoundException('the id is already taken');
      const todo = new Todo(addTodo.id,addTodo.name,addTodo.description);
      this.todos.push(todo);
      return this.todos;
    }
    UpdateToDoId(updateToDodto:UpdateToDodto ):Todo {
      var obj= this.todos.find(x=> updateToDodto.id==x.id)
      if (!obj) throw new NotFoundException('todo not found to be updated');
      obj.name= updateToDodto.name??obj.name;
      obj.description=  updateToDodto.description ?? obj.description;
      return obj;
    } 
}
