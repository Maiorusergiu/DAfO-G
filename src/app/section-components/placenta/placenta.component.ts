import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-placenta',
    standalone: true,
    imports: [
        CommonModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatRadioModule
    ],
    templateUrl: './placenta.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacentaComponent {
    //#region Constants
    form: FormGroup;
    //#endregion
    //#region Observables
    _unsubscribeAll$ = new Subject<void>();
    //#endregion
    //#region Lifecycle Hooks
    ngOnDestroy(): void {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
    }
    ngOnInit(): void {
        this.form = this._getForm();

        this.form.valueChanges
        .pipe(takeUntil(this._unsubscribeAll$))
        .subscribe({
            next:(res) => {
                console.log(res);
                
            }
        })
    }
    //#endregion
    //#region Private Methods
    private _getForm(): FormGroup<any> {
        return new FormGroup<any>({
            anterioara: new FormControl<boolean>(false),
            flancDrept: new FormControl<boolean>(false),
            posterioara: new FormControl<boolean>(false),
            flancStang: new FormControl<boolean>(false),
            fundica: new FormControl<boolean>(false),
            extindereSpreFundUterin: new FormControl<boolean>(false),
            previa: new FormControl<boolean>(false),
            previaCentrala: new FormControl<boolean>(false),
            previaPartialCentrala: new FormControl<boolean>(false),
            previaMarginala: new FormControl<boolean>(false),
            josInserata: new FormControl<boolean>(false),
            distantaOCI: new FormControl<number>(0),
            placentaObservatii: new FormControl<string>(''),
            anomaliiStructuralPlacentare: new FormControl<string>(''),
            anomaliiStructuralPlacentarePrezente: new FormControl<string>(''),
            cicatriceUterina: new FormControl<string>(''),
            cicatriceUterinaPrezente: new FormControl<string>(''),
            semneAderentaPlacentaraAnormala: new FormControl<string>(''),
            semneAderentaPlacentaraAnormalaPrezente: new FormControl<string>('')

        })
    }
    //#endregion
    
}
