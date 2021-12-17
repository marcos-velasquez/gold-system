import { DOCUMENT, Location } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  private _router: Subscription;
  private lastScrollTop = 0;
  private delta = 5;
  private navbarHeight = 0;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private element: ElementRef,
    public location: Location
  ) {}

  @HostListener('window:scroll', ['$event'])
  scroll() {
    let st = window.pageYOffset;

    if (Math.abs(this.lastScrollTop - st) <= this.delta) return;

    let navbar = document.getElementsByTagName('nav')[0];

    if (st > this.lastScrollTop && st > this.navbarHeight) {
      if (navbar.classList.contains('headroom--pinned')) {
        navbar.classList.remove('headroom--pinned');
        navbar.classList.add('headroom--unpinned');
      }
    } else {
      if (st + window.innerHeight < document.body.scrollHeight) {
        if (navbar.classList.contains('headroom--unpinned')) {
          navbar.classList.remove('headroom--unpinned');
          navbar.classList.add('headroom--pinned');
        }
      }
    }

    this.lastScrollTop = st;
  }

  ngOnInit() {
    var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.closeCollapse();
      this.closeDropdown();
      if (window.outerWidth > 991) {
        window.document.children[0].scrollTop = 0;
      } else {
        window.document.activeElement.scrollTop = 0;
      }
      this.renderer.listen('window', 'scroll', () => {
        const number = window.scrollY;
        if (number > 150 || window.pageYOffset > 150) {
          navbar.classList.add('headroom--not-top');
        } else {
          navbar.classList.remove('headroom--not-top');
        }
      });
    });
    this.scroll();
  }

  openDropdown() {
    document.querySelector('.nav-item.dropdown').classList.toggle('active');
  }

  closeDropdown() {
    document.querySelector('.nav-item.dropdown').classList.remove('active');
  }

  closeCollapse() {
    document.querySelector('.navbar-collapse').classList.remove('show');
  }
}
