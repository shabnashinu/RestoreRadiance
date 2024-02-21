import { NgModule } from "@angular/core";
import { HomeComponent } from "src/app/component/home/home.component";
import { UserRoutingModule } from "../routes/user-routing.module";


@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[
        UserRoutingModule
    ]
})

export class UserModule {}