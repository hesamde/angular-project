import { Component, OnInit } from "@angular/core";
import { Task } from "src/app";


@Component({

selector:'app-root',
templateUrl:'./app.component.html',
styleUrls:['./app.component.scss']

})
export class ListComponent implements OnInit{


constructor(){ }

ngOnInit(){
}

public taskList: Task [] = [];
addTask(){

    this.taskList.push(new Task());

}
removeTask(index:number){
    if(index > -1){
        this.taskList.splice(index,1);
    }


}



}