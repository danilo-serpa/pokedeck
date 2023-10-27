import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IgxButtonModule, IgxIconModule, IgxInputGroupModule, IgxPaginatorModule } from 'igniteui-angular';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';
import { ValidationMessageModule } from './../../../../shared/components/validation-message/validation-message.module';
import { DeckFormComponent } from './deck-form.component';

const routes: Routes = [{ path: '', component: DeckFormComponent }];

@NgModule({
  declarations: [DeckFormComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxPaginatorModule,
    LoaderModule,
    ValidationMessageModule,
    IgxButtonModule
  ],
})
export class DeckFormModule {}
