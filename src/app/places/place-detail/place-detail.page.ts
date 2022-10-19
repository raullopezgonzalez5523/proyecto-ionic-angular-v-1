import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place

  constructor(
    private activatedRoute: ActivatedRoute, 
    private placesService: PlacesService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // redirect
      const recipeId = paramMap.get('placeId')
      this.place = this.placesService.getPlace(recipeId)
      console.log(this.place)
    })
  }

  async deletePlace() {
    const alertElement = await this.alertController.create({
      header: 'Estas seguro de quere eliminar?',
      message: 'Se cuidadoso',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.placesService.deletePlace(this.place.id)
            this.router.navigate(['/places'])
          }
        }
      ]
    })
    await alertElement.present()
  }

}
