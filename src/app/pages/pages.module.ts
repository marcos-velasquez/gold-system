import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { FundationComponent } from './fundation/fundation.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';
import { Gs10Component } from './gs10/gs10.component';
import { AllianceComponent } from './alliance/alliance.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AirdropComponent } from './airdrop/airdrop.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    FundationComponent,
    ContactComponent,
    MissionComponent,
    VisionComponent,
    Gs10Component,
    AllianceComponent,
    AboutUsComponent,
    AirdropComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule, AnimateOnScrollModule.forRoot(), ChartsModule],
})
export class PagesModule {}
