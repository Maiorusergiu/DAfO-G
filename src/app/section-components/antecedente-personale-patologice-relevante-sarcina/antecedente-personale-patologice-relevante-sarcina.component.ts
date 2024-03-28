import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-antecedente-personale-patologice-relevante-sarcina',
    standalone: true,
    imports: [
        CommonModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './antecedente-personale-patologice-relevante-sarcina.component.html',
})
export class AntecedentePersonalePatologiceRelevanteSarcinaComponent {
//#region Control Variables
isNesemnificativeControl: FormControl<boolean | null> = new FormControl<boolean>(false);
isMalformatieMaternaPrezentaControl: FormControl<boolean | null> = new FormControl<boolean>(false);
isNastereCuFatCuRDIUControl: FormControl<boolean | null> = new FormControl<boolean>(false);
isNastereCuFatCuMacrosomControl: FormControl<boolean | null> = new FormControl<boolean>(false);
isNastereCuFatMortControl: FormControl<boolean | null> = new FormControl<boolean>(false);
isHTAISControl: FormControl<boolean | null> = new FormControl<boolean>(false);
isHipertensiuneArterialaCronicaControl: FormControl<boolean | null> = new FormControl<boolean>(false);
isDiabetZaharatControl: FormControl<boolean | null> = new FormControl<boolean>(false);
isUterCicatricialControl: FormControl<boolean | null> = new FormControl<boolean>(false);
isDiabetGestationalControl: FormControl<boolean | null> = new FormControl<boolean>(false);
isNastereCuFatCuMalformatiiControl:FormControl<boolean | null> = new FormControl<boolean>(false);
isLupusControl:FormControl<boolean | null> = new FormControl<boolean>(false);
isNastereCuFatCuAnomaliiCromozomialeControl:FormControl<boolean | null> = new FormControl<boolean>(false);
isAfectiuneTiroidianaControl:FormControl<boolean | null> = new FormControl<boolean>(false);
isConsumDeDroguriControl:FormControl<boolean | null> = new FormControl<boolean>(false);

malformatiePrezentaTextControl: FormControl<string | null> = new FormControl<string>('');
nastereCuFatCuRDIUTextControl: FormControl<string | null> = new FormControl<string>('Nastere cu fat cu RDIU');
nastereCuFatCuMacrosomTextControl: FormControl<string | null> = new FormControl<string>('Nastere cu fat cu macrosom');
afectiuneTiroidianaTextControl: FormControl<string | null> = new FormControl<string>('');
customTextControl1: FormControl<string | null> = new FormControl<string>('');
customTextControl2: FormControl<string | null> = new FormControl<string>('');

//#endregion
//#region Observables
_unsubscribeAll$ = new Subject();
//#endregion

//#region  Lifecycle Hooks
ngOnInit(): void {
    this._subscribe();
    this._disableFormControls();
}
//#endregion

//#region Subscriptions
private _subscribe(): void {
    this._subscribeToFormControls();
}
private _subscribeToFormControls(): void {
    this.isMalformatieMaternaPrezentaControl.valueChanges
    .pipe(takeUntil(this._unsubscribeAll$))
    .subscribe({
        next:(res) => {
            res ? this.malformatiePrezentaTextControl.enable() : this.malformatiePrezentaTextControl.disable();
        },
        error:() => {

        }
    })
    this.isAfectiuneTiroidianaControl.valueChanges
    .pipe(takeUntil(this._unsubscribeAll$))
    .subscribe({
        next:(res) => {
            res ? this.afectiuneTiroidianaTextControl.enable() : this.afectiuneTiroidianaTextControl.disable();
        },
        error:() => {

        }
    })
}
//#endregion
//#region Private Methods
private _disableFormControls(): void {
    this.malformatiePrezentaTextControl.disable();
    this.afectiuneTiroidianaTextControl.disable();
}
//#endregion
 }
