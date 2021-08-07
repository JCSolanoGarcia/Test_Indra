import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { Tab2PageModule } from '../tab2/tab2.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    PipesModule,
    Tab2PageModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
  ],
  exports: [RouterModule],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
