import { Injectable } from '@angular/core';
import {Place} from "./place.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Torre Eiffel',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg',
      comments: [
        'Un lugar asombroso',
        'Una experiencia hermosa'
      ]
    },
    {
      id: '2',
      title: 'El Coliseo de Roma',
      imageURL: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/21F9/production/_124279680_gettyimages-599134940.jpg.webp',
      comments: [
        'Un lugar hermoso',
        'Una experiencia grandiosa'
      ]
    },
    {
      id: '3',
      title: 'Cuexcomate (Puebla)',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Cuexcomate_Completo.jpg',
      comments: []
    }
  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ''
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }
}
