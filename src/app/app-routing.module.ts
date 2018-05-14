import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentLitComponent } from './department-lit/department-lit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  /*{path:"",component:DepartmentLitComponent},*/
  {path:"",redirectTo:"/department",pathMatch:"full"},
  {path:"department",component:DepartmentLitComponent},
  {path:"department/:id",component:DepartmentDetailComponent},
  {path:"emplist",component:EmployeeListComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                    DepartmentLitComponent,
                                    EmployeeListComponent,
                                    PageNotFoundComponent,
                                    DepartmentDetailComponent
                                  ];
