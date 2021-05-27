import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ToDo} from 'src/app/to-do'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list:ToDo [] = 
  [
    {
      task:"Learn Angular",
      completed: false
    },
    {
      task:"Learn C#",
      completed: true
    },
    {
      task:"Get enough sleep sometimes",
      completed: false
    },
    {
      task:"Walk the dogs",
      completed: true
    },
  ];


  addToList(form:NgForm):void
  {
    let newItem:ToDo = {
      task: form.form.value.task,
      completed: false
    };
    this.list.push(newItem);
  };

    setComplete(index:number):void
    {
      this.list[index].completed = true;
    };


    removeTask(index:number):void
    {
      this.list.splice(index,1);
    };




}
