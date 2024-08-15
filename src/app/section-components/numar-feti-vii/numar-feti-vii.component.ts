import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-numar-feti-vii',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatRadioModule
  ],
  templateUrl: './numar-feti-vii.component.html',
})
export class NumarFetiViiComponent {

  //#region Control Variables
  isSarcinaUnicaControl = new FormControl<boolean>(false);
  //#endregion

}
