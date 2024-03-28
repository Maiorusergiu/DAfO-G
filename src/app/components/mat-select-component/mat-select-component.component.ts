import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'mat-select-component',
    standalone: true,
    imports: [
        CommonModule,
        MatSelectModule,
        ReactiveFormsModule

    ],
    templateUrl: './mat-select-component.component.html',
    styleUrl: './mat-select-component.component.css',
})
export class MatSelectComponentComponent { 
    toppings = new FormControl('');

    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
