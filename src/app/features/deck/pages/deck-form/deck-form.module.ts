import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';
import { DeckFormComponent } from './deck-form.component';

const routes: Routes = [{ path: '', component: DeckFormComponent }];

@NgModule({
  declarations: [DeckFormComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    IgxInputGroupModule,
    IgxIconModule,
    LoaderModule
  ],
})
export class DeckFormModule {}
