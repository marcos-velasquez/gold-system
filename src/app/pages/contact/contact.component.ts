import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  contacts = [
    {
      photo: 'assets/img/mexico.jpg',
      phone: '#',
      email: 'mexico.goldsystem@gmail.com',
    },

    {
      photo: 'assets/img/venezuela.jpg',
      phone: '#',
      email: 'venezuela.goldsystem@gmail.com',
    },
    {
      photo: 'assets/img/peru.jpg',
      phone: '#',
      email: 'peru.goldsystem@gmail.com',
    },
  ];
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open(email: string) {
    this.modalService.open(ModalComponent).componentInstance.email = email;
  }
}
