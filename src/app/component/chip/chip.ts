import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chip',
  imports: [MatIconModule],
  templateUrl: './chip.html',
  styleUrl: './chip.css',
})
export class Chip {
  @Input() label: string = '';
  @Input() icon: string = '';
}
