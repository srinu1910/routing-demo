import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-lit',
  template: `
    <h3>Department Listt</h3>
    <ul class="items">
      <li (click)= "selectdep(dep)" *ngFor="let dep of departments">
      <span class="badge">{{dep.id}}</span> {{dep.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentLitComponent implements OnInit {
  departments =[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"}
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  selectdep(selectdeperment){
    this.router.navigate(["/department",selectdeperment.id]);
  }

}
