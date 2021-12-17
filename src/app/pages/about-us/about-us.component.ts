import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit {
  founders = [
    {
      name: 'hola',
      img: 'assets/img/mexico.jpg',
      position: 'Fundador, CEO and CFO/Jefe Ejecutivo y Jefe de Finanzas.',
    },
    {
      name: 'hola',
      img: 'assets/img/peru.jpg',
      position: 'Fundador, CIO and CCO/Jefe de Información y Jefe de Comunicaciones.',
    },
    {
      name: 'hola',
      img: 'assets/img/venezuela.jpg',
      position: 'Fundador, COO and CMO/Jefe de Operaciones y Jefe de Marketing.',
    },

    {
      name: 'hola',
      img: 'assets/img/img-home.png',
      position: 'Cofundador de Gold System, Técnico-Desarrollador.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
