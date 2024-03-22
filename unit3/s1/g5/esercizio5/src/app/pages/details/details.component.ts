import { Component } from '@angular/core';
import { iCar } from '../../models/i-car';
import { AutoService } from '../../auto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  car: iCar | undefined;
  id: string = '';

  constructor(private route: ActivatedRoute, private autoService: AutoService) {
    this.route.params.subscribe((params) => {
      this.id = params['id']
      this.autoService.getAutoById(this.id).then(car => {
        this.car = car
      })
    })
  }

}
