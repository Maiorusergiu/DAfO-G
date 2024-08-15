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
import { AntecedentePersonalePatologiceRelevanteSarcinaComponent } from './section-components/antecedente-personale-patologice-relevante-sarcina/antecedente-personale-patologice-relevante-sarcina.component';
import { InformatiiMedicPacientComponent } from './section-components/informatii-medic-pacient/informatii-medic-pacient.component';
import { GestatieParietateComponent } from './section-components/gestatie-parietate/gestatie-parietate.component';
import { IstoriculSarciniiCurenteComponent } from './section-components/istoricul-sarcinii-curente/istoricul-sarcinii-curente.component';
import { AntecedenteFamilialeRelevanteSarcinaComponent } from './section-components/antecedente-familiale-relevante-sarcina/antecedente-familiale-relevante-sarcina.component';
import { EcografieComponent } from './section-components/ecografie/ecografie.component';
import { ConditiiExaminareComponent } from "./section-components/conditii-examinare/conditii-examinare.component";
import { NumarFetiViiComponent } from './section-components/numar-feti-vii/numar-feti-vii.component';
import { ConfirmareaViabilitatiiComponent } from './section-components/confirmarea-viabilitatii/confirmarea-viabilitatii.component';
import { PlacentaComponent } from './section-components/placenta/placenta.component';
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
    //Angular
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    //
    //Material
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UiLoadingScreenComponent,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    //Section Components
    AntecedenteFamilialeRelevanteSarcinaComponent,
    AntecedentePersonalePatologiceRelevanteSarcinaComponent,
    InformatiiMedicPacientComponent,
    GestatieParietateComponent,
    IstoriculSarciniiCurenteComponent,
    EcografieComponent,
    ConditiiExaminareComponent,
    NumarFetiViiComponent,
    ConfirmareaViabilitatiiComponent,
    PlacentaComponent
]
      ,
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
  //#region Observables
  isAppLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //#endregion
  //#region Control Variables
  

  //#endregion
  //#region Data Variables

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
