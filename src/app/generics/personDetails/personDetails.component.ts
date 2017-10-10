import { Component, Input, Output, EventEmitter } from '@angular/core'

import { Person } from '../../classes/person'

@Component({
  selector: 'person-details',
  templateUrl: './personDetails.html',
  styleUrls: ['./personDetails.scss'],
})
export class PersonDetailsComponent {
  @Input() person: Person
  @Input() index: number
  @Input() totalPeople: number
  @Output() onNextPerson: EventEmitter<void> = new EventEmitter<void>()
  @Output() onPreviusPerson: EventEmitter<void> = new EventEmitter<void>()

  private personUnknown: string = 'http://www.carolgordoncounselling.co.uk/wp-content/uploads/2016/12/male-profile-blank.jpg'

  resolveImageUrl(person: Person) {
    return person.card && person.card.urlImagem ? person.card.urlImagem : this.personUnknown
  }
  nextPerson() {
    this.onNextPerson.emit()
  }

  previusPerson() {
    this.onPreviusPerson.emit()
  }
}
