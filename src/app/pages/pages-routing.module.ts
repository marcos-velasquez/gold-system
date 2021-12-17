import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirdropComponent } from './airdrop/airdrop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllianceComponent } from './alliance/alliance.component';
import { Gs10Component } from './gs10/gs10.component';
import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';
import { HomeComponent } from './home/home.component';
import { FundationComponent } from './fundation/fundation.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'fundación',
    component: FundationComponent,
  },
  {
    path: 'contacto',
    component: ContactComponent,
  },
  {
    path: 'misión',
    component: MissionComponent,
  },
  {
    path: 'airdrop',
    component: AirdropComponent,
  },
  {
    path: 'visión',
    component: VisionComponent,
  },
  {
    path: 'gs10',
    component: Gs10Component,
  },
  {
    path: 'alianzas',
    component: AllianceComponent,
  },
  {
    path: 'quienes-somos',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
