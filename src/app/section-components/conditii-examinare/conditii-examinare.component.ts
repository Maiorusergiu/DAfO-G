import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-conditii-examinare',
    standalone: true,
    imports: [
        CommonModule,
        MatRadioModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './conditii-examinare.component.html',
})
export class ConditiiExaminareComponent { 

//#region Constants
form: FormGroup;
//#endregion
//#region Getters & Setters
get isConditiiAdecvateeChecked(): boolean {
    return this.form.get('conditiiExaminare').value === 'Adecvate';
}
//#endregion
//#region Observables
_unsubscribeAll$ = new Subject();
//#endregion


//#region Lifecycle Hooks
ngOnDestroy(): void {
    this._unsubscribeAll$.next(null);
    this._unsubscribeAll$.complete();
}
ngOnInit(): void {
   
this.form = this._getForm();
this._disableFormControls();
this.form.get('conditiiExaminare').valueChanges
.pipe(takeUntil(this._unsubscribeAll$))
.subscribe({
    next:(res) => {
        res !== 'Adecvate' ?
        this._disableFormControls() :
        this._enableFormControls()
        
    }
})
}
//#endregion
//#region Private Methods
private _getForm(): FormGroup<any> {
    return new FormGroup<any>({
        conditiiExaminare: new FormControl<string>(''),
        obezitateMaterna: new FormControl<boolean>(false),
        pozitieFetala: new FormControl<boolean>(false),
        lichidAmniotic: new FormControl<boolean>(false),
        tratamentTopic: new FormControl<boolean>(false),
    })
}
private _disableFormControls(): void {
    this.form.get('obezitateMaterna').disable();
    this.form.get('pozitieFetala').disable();
    this.form.get('lichidAmniotic').disable();
    this.form.get('tratamentTopic').disable();
}
private _enableFormControls(): void {
    this.form.get('obezitateMaterna').enable();
    this.form.get('pozitieFetala').enable();
    this.form.get('lichidAmniotic').enable();
    this.form.get('tratamentTopic').enable();
}
//#endregion

}
