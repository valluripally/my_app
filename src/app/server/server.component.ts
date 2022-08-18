import { getCurrencySymbol } from '@angular/common';
import {Component} from '@angular/core';

@Component({
selector:'app-server',
templateUrl:'./server.component.html',
styleUrls: ['./server.component.scss']
})
export class ServerComponent{
    serverStatus ='offline';
    constructor(){
        this.serverStatus =Math.random()>0.5?'online':'offline' 
       }

        getColor(){
         return this.serverStatus==='online'? 'green':'red';
        }
         

}
