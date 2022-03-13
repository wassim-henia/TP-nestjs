import { UsePipes, ValidationPipe } from '@nestjs/common';
import {MinLength,IsNotEmpty, ValidationArguments, MaxLength,IsNumber } from 'class-validator';


export class AddTodoDto{
    id : number;
    @IsNotEmpty({message: ()=>("champ ` name ` vide")}) 
    @MinLength(3,{
        message: (validationData: ValidationArguments) => {
        return `La taille de votre ${validationData.property} ${validationData.value} est courte,la taille minimale de ${validationData.property} est ${validationData.constraints[0]}`
        }
        })
    @MaxLength(10,{
        message: (validationData: ValidationArguments) => {
        return `La taille de votre ${validationData.property} ${validationData.value} est longue, la taille maximale de ${validationData.property} est ${validationData.constraints[0]}`
        } 
    }
        )
    name : string;
    @IsNotEmpty({message: ()=>("champ description vide")}) 
    @MinLength(10,{
        message: (validationData: ValidationArguments) => {
        return `La taille de votre ${validationData.property} ${validationData.value} est courte,la taille minimale de ${validationData.property} est ${validationData.constraints[0]}`
        }
        })
        
    description : string;
}  