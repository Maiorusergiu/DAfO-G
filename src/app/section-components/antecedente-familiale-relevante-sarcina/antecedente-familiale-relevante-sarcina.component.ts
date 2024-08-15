import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-antecedente-familiale-relevante-sarcina',
  standalone: true,
  imports: [
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './antecedente-familiale-relevante-sarcina.component.html',
})
export class AntecedenteFamilialeRelevanteSarcinaComponent {
  //#region Observables
  antecedenteFamilialePatologiceRelevanteControl: FormControl<string | null> = new FormControl<string>('Nesemnificative');
  antecedenteFamilialePatologiceRelevanteCustomControl: FormControl<string | null> = new FormControl<string>('');
  _unsubscribeAll$ = new Subject();
  //#endregion
  


  //#region  Lifecycle Hooks
  ngOnInit(): void {
    this._subscribe();
  }
  ngOnDestroy(): void {
    this._unsubscribeAll$.next(null);
    this._unsubscribeAll$.complete();
  }
  //#endregion
  //#region Subscriptions
  private _subscribe(): void {
    this._subscribeToFormControls();
  }
  private _subscribeToFormControls(): void {
    this.antecedenteFamilialePatologiceRelevanteControl.valueChanges
    .pipe(takeUntil(this._unsubscribeAll$))
    .subscribe({
      next:(res) => {
        if(!res) return;
        res === 'Nesemnificative' ? 
        this._disableControl(this.antecedenteFamilialePatologiceRelevanteCustomControl) : 
        this._enableControl(this.antecedenteFamilialePatologiceRelevanteCustomControl);
      }
    })
  }
  //#endregion
  //#region Private Methods
  private _initializeFormControls(): void {
    this.antecedenteFamilialePatologiceRelevanteCustomControl.disable();
  }
  private _disableControl(formControl: AbstractControl): void {
    formControl.setValue('');
    formControl.disable();
  }
  private _enableControl(formControl: AbstractControl): void {
    formControl.enable();
  }
}
