import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capital'
})
export class capitalPipe implements PipeTransform{
    transform(value:string, isCapital:boolean):string {
        return (isCapital) ? value.toUpperCase() : value.toLowerCase();
    }
}