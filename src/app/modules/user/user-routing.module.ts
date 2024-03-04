import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { HomeComponent } from "src/app/component/home/home.component";



const route:Routes = [
    {
        path:'home',
        component:HomeComponent
    }
]
@NgModule({
    imports :[RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class UserRoutingModule{

}