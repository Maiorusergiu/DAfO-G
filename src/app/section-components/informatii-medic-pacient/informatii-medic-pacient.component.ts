import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
    selector: 'app-informatii-medic-pacient',
    standalone: true,
    imports: [
        CommonModule,
        MatDatepickerModule,
        ReactiveFormsModule,
    ],
   host: {
    class:'flex flex-col gap-2'
   },
    templateUrl: './informatii-medic-pacient.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformatiiMedicPacientComponent { 
//#region Constants
todayDate = new Date();
//#endregion
//#region Control Variables
sonographerNameControl: FormControl<string | null> = new FormControl<string>('Bene Moza Andreea');
ultrasoundMachineNameControl: FormControl<string | null> = new FormControl<string>('Voluson E 10 Expert');
patientFullNameControl: FormControl<string | null> = new FormControl<string>('Maioru Sergiu Ioan');
//#endregion

}
