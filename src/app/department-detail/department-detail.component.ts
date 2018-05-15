import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentid}}</h3>
    <br/>
    <br/>
    <a (click) = "getPrevious()">Previous</a>
    <a (click) = "getNext()">Next</a>

    <div>
      <button (click)= "gotoDepartments()">BACK</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentid:number;
  constructor(private actrouter:ActivatedRoute, private router:Router) { }

  ngOnInit() {
   // this.departmentid = parseInt(this.actrouter.snapshot.paramMap.get('id'));
   this.actrouter.paramMap.subscribe((params:ParamMap)=>{
      this.departmentid = parseInt(params.get("id"));
   });
  }

  getPrevious(){
    let previousId = this.departmentid - 1;
    this.router.navigate(["/department", previousId])
  }

  getNext(){
    let nextId = this.departmentid + 1;
    this.router.navigate(["/department", nextId]);
    
  }

  gotoDepartments(){
    let selectedId = this.departmentid ? this.departmentid:null;
    this.router.navigate(["/department",{id:selectedId,textval:"testval"}]);
  }

}
