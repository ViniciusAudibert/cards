import { Component, Input, Output, EventEmitter } from '@angular/core'

import { Card } from '../../classes/card'

@Component({
  selector: 'card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
})
export class CardComponent {
  @Input() card: string
  @Input() selectedCardId: number
  @Output() onSelectCard: EventEmitter<Card> = new EventEmitter<Card>()

  selectCard(card: Card): void {
    this.onSelectCard.emit(card)
  }
}
