import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ModalComponent } from './components/modal/modal.component';
import { IframeVideoComponent } from './components/iframe-video/iframe-video.component';
import { UrlSanitizerPipe } from './pipes/url-sanitizer.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    JumbotronComponent,
    ModalComponent,
    IframeVideoComponent,
    UrlSanitizerPipe,
  ],
  imports: [CommonModule, NgbModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, JumbotronComponent, ModalComponent, IframeVideoComponent],
})
export class SharedModule {}
