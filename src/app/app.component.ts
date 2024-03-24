import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener, afterRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { UiLoadingScreenComponent } from "./components/ui-loading-screen/ui-loading-screen.component";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MAT_DATE_LOCALE, MatPseudoCheckboxModule, provideNativeDateAdapter} from '@angular/material/core';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [
      { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
      provideNativeDateAdapter()
    ],
    imports: [
      CommonModule,
      RouterOutlet,
      MatButtonModule, 
      MatToolbarModule, 
      MatIconModule, 
      UiLoadingScreenComponent,
      MatDatepickerModule,
      MatInputModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatRadioModule,
      FormsModule,
      ReactiveFormsModule
    ]
      ,
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
  //#region Constants
  todayDate = new Date();
  //#endregion
  //#region Observables
  isAppLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //#endregion
  //#region Control Variables
  sonographerNameControl: FormControl<string | null> = new FormControl<string>('Bene Moza Andreea');
  ultrasoundMachineNameControl: FormControl<string | null> = new FormControl<string>('Voluson E 10 Expert');
  patientFullNameControl: FormControl<string | null> = new FormControl<string>('Maioru Sergiu Ioan');
  antecedenteFamilialePatologiceRelevanteControl: FormControl<string | null> = new FormControl<string>('Nesemnificative');
  antecedenteFamilialePatologiceRelevanteOtherControl: FormControl<string | null> = new FormControl<string>('');
  //#endregion
  //#region Observables
  _unsubscribeAll$ = new Subject();
  //#endregion
  constructor() {
    
  }
  ngOnDestroy(): void {
    this._unsubscribeAll$.next(null);
    this._unsubscribeAll$.complete();
  }
  ngOnInit(): void {
    this._initializeFormControls();
    this._subscribe();
    
  }

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
        this._disableControl(this.antecedenteFamilialePatologiceRelevanteOtherControl) : 
        this._enableControl(this.antecedenteFamilialePatologiceRelevanteOtherControl);
      }
    })
  }
  //#endregion
  //#region Private Methods
  private _initializeFormControls(): void {
    this.antecedenteFamilialePatologiceRelevanteOtherControl.disable();
  }
  private _disableControl(formControl: AbstractControl): void {
    formControl.setValue('');
    formControl.disable();
  }
  private _enableControl(formControl: AbstractControl): void {
    formControl.enable();
  }
  //#endregion
  //#region Event Handlers
  @HostListener('window:load',['$event'])
  onAppLoad(event: Event) {
    setTimeout(() => {
      this.isAppLoaded.next(true);
    }, 1000)
    
  }
  //#endregion
  
  

}
