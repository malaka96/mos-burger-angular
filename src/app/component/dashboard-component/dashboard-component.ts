import { Component, signal } from '@angular/core';
import { Chip } from "../chip/chip";

@Component({
  selector: 'app-dashboard-component',
  imports: [Chip],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {

  labels = signal<string[]>(['All Items', 'Burgers', 'Fries', 'Drink', 'Combos']);

  filters: string[] = [
    'All Items',
    'Burgers',
    'Fries',
    'Drink',
    'Combos'
  ]

}
