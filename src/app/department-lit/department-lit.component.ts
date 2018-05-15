import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-lit',
  template: `
    <h3>Department Listt</h3>
    <ul class="items">
      <li (click)= "selectdep(dep)" [class.selected]="isSelected(dep)" *ngFor="let dep of departments">
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
  public selectedId:number;
  constructor(private router:Router, private actrouter: ActivatedRoute) { }

  ngOnInit() {
    this.actrouter.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId = parseInt(params.get("id"));
   });
  }

  selectdep(selectdeperment){
    this.router.navigate(["/department",selectdeperment.id]);
  }

  isSelected(dep){
    return dep.id == this.selectedId;
  }

}
