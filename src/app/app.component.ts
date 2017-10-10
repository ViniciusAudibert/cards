import { Component } from '@angular/core'

import { Person } from './classes/person'
import { Card } from './classes/card'

import Persons from './mocks/persons'
import Cards from './mocks/cards'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  viewProviders: [Card]
})
export class AppComponent {
  public persons: Person[] = Persons
  public cards: Card[] = Cards

  public personIndex: number = 0

  selectCard(card: Card): void {
    this.getPerson().card = card
  }

  getPerson(): Person {
    return this.persons[this.personIndex]
  }

  nextPerson(): void {
    if (this.personIndex < this.persons.length - 1) {
      this.personIndex += 1
    }
  }

  getSelectedCardId(): number {
    return this.getPerson().card ? this.getPerson().card.id : undefined
  }

  previusPerson(): void {
    if (this.personIndex > 0) {
      this.personIndex -= 1
    }
  }
}
