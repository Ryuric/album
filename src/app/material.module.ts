import { NgModule } from "@angular/core";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule} from "@angular/material/card";
import { MatButtonModule} from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    imports:[
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule
    ],
    exports:[
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule
    ]
})

export class MaterialModule{}