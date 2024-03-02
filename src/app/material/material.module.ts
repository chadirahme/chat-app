import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from "@angular/material/card"; 
import { MatButtonModule } from "@angular/material/button"; 
import { MatDialogModule } from "@angular/material/dialog"; 
import { MatToolbarModule } from "@angular/material/toolbar"; 

@NgModule({
  imports: [
    MatTabsModule,
    MatCardModule,  
    MatButtonModule ,
    MatDialogModule,
    MatToolbarModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule,  
    MatButtonModule,
    MatDialogModule ,
    MatToolbarModule
  ]
})
export class MaterialModule {}