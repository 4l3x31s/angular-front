import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,

    MatTabsModule,
    MatStepperModule,

    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatCheckboxModule,

    MatRadioModule,
    MatSlideToggleModule,
    MatSortModule,
  ],
  exports:[
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,

    MatTabsModule,
    MatStepperModule,
    MatRadioModule,
    MatSortModule,

    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatSlideToggleModule,

  ]
})
export class MaterialImportModule { }
