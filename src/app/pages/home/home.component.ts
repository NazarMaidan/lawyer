import { Component } from '@angular/core';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { ServicesComponent } from '../../components/services/services.component';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[SliderComponent, ServicesComponent, AboutUsComponent, PartnersComponent, ClientsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
