import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-ecografie',
  standalone: true,
  imports: [
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './ecografie.component.html',
})
export class EcografieComponent {
//#region Observables
isTransabdominalaControl: FormControl<boolean> = new FormControl<boolean>(false);
isTransvaginalaControl: FormControl<boolean> = new FormControl<boolean>(false);
is3DControl: FormControl<boolean> = new FormControl<boolean>(false);
//#endregion
}
