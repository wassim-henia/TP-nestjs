
import { PartialType } from "@nestjs/mapped-types";
import { AddTodoDto } from "./add-todo.dto";

export class UpdateToDodto extends PartialType (AddTodoDto) 
{   
    id: number;
    name : string;
    description : string;
    }