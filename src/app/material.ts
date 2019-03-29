import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatCardModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatCardModule, MatSelectModule],
})
export class MaterialModule { }