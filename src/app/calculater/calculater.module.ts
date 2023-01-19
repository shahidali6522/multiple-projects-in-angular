import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CalculaterComponent } from './calculater/calculater.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculaterComponent],
  imports: [CommonModule, MatButtonModule, FormsModule],
})
export class CalculaterModule {}
