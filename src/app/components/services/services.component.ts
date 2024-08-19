import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  items = [
    {
      header: 'Цивільне',
      desc: 'Трохи тексту про те, що ти робиш в ті сфері. Трохи тексту про те, що ти робиш в ті сфері',
    },
    {
      header: 'Конституційне',
      desc: 'Трохи тексту про те, що ти робиш в ті сфері. Трохи тексту про те, що ти робиш в ті сфері',
    },
    {
      header: 'Адміністративне',
      desc: 'Трохи тексту про те, що ти робиш в ті сфері. Трохи тексту про те, що ти робиш в ті сфері',
    }
  ]
}
