import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {

  partners: any = [
    {
      name: 'Павло Поліщук',
      img: 'assets/img/partner.jpg',
      position: 'стaрший партнер'
    },
    {
      name: 'Павло Поліщук',
      img: 'assets/img/partner.jpg',
      position: 'стaрший партнер'
    },
    {
      name: 'Павло Поліщук',
      img: 'assets/img/partner.jpg',
      position: 'партнер'
    },
  ];

}
