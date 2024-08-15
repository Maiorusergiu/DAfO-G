import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-confirmarea-viabilitatii',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatRadioModule
    ],
    templateUrl: './confirmarea-viabilitatii.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmareaViabilitatiiComponent implements OnInit {

    //#region Constants
    form: FormGroup;
    //#endregion
    //#region Observables
    _unsubscribeAll$ = new Subject<void>();
    //#endregion
    ngOnInit(): void {
        this.form = this._getForm();
        this._subscribeToForm();
     }
     ngOnDestroy(): void {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
     }

     //#region Subscriptions
     private _subscribeToForm(): void {
        this.form.get('miscarileCorduluiFetal').valueChanges
        .pipe(takeUntil(this._unsubscribeAll$))
        .subscribe({
            next:(res) => {
                res !== 'Prezente' ?
                this.form.get('bataileCorduluiFetal').disable() :
                this.form.get('bataileCorduluiFetal').enable()
            }
        })
     }
     //#endregion
    //#region Private Methods
    private _getForm(): FormGroup<any> {
        return new FormGroup({
            miscarileCorduluiFetal: new FormControl<string>('Prezente'),
            bataileCorduluiFetal: new FormControl<number>(0)
        })
    }
    //#endregion

}
