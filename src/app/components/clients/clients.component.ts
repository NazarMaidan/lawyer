import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  count: any = [
    {
      icon: 'assets/icons/person.svg',
      amount: '1234',
      subtext: 'кількість клієнтів',
    },
    {
      icon: 'assets/icons/calendar.svg',
      amount: '10',
      subtext: 'років досвіду',
    },
    {
      icon: 'assets/icons/poster.svg',
      amount: '2345',
      subtext: 'Кількість справ',
    },
  ];
}
