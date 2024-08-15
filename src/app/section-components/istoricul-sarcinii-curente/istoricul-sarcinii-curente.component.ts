import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-istoricul-sarcinii-curente',
    standalone: true,
    imports: [
        CommonModule,
        MatCheckboxModule,
        ReactiveFormsModule
    ],
    templateUrl: './istoricul-sarcinii-curente.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IstoriculSarciniiCurenteComponent {
    //#region Control Variables
    _unsubscribeAll$ = new Subject();
    //Checkbox form controls
    isNesemnificativeControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isSarcinaFIVControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isSeroconversieToxoplasmozaControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isSeroconversieCMVControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isSeroConversieVirusControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isMorfologieTNormalControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isMorfologieTAnormalControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isDubluTestRiscControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isTripluTestRiscControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isCvadrubluTestRiscControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isTestPrenatalNonInvazivNegativControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isTestPrenatalNonInvazivPozitivControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    isFaraTesteScreeningControl: FormControl<boolean | null> = new FormControl<boolean>(false);
    //Text form controls
    seroconversieVirusControl: FormControl<string | null> = new FormControl<string>('');
    morfologieTAnormalControl: FormControl<string | null> = new FormControl<string>('');
    dubluTestRiscControl: FormControl<string | null> = new FormControl<string>('');
    tripluTestRiscControl: FormControl<string | null> = new FormControl<string>('');
    cvadrubluTestRiscControl: FormControl<string | null> = new FormControl<string>('');
    alteObservatiiControl: FormControl<string | null> = new FormControl<string>('');
    //#endregion

    //#region  Lifecycle Hooks
    ngOnInit(): void {
        this._disableTextFormControls();
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
        this.isSeroConversieVirusControl.valueChanges
        .pipe(takeUntil(this._unsubscribeAll$))
        .subscribe({
            next:(res) => {
                res ? this.seroconversieVirusControl.enable() : this.seroconversieVirusControl.disable();
            },
            error:() => {
    
            }
        })
        this.isMorfologieTAnormalControl.valueChanges
        .pipe(takeUntil(this._unsubscribeAll$))
        .subscribe({
            next:(res) => {
                res ? this.morfologieTAnormalControl.enable() : this.morfologieTAnormalControl.disable();
            },
            error:() => {
    
            }
        })
        this.isDubluTestRiscControl.valueChanges
        .pipe(takeUntil(this._unsubscribeAll$))
        .subscribe({
            next:(res) => {
                res ? this.dubluTestRiscControl.enable() : this.dubluTestRiscControl.disable();
            },
            error:() => {
    
            }
        })
        this.isTripluTestRiscControl.valueChanges
        .pipe(takeUntil(this._unsubscribeAll$))
        .subscribe({
            next:(res) => {
                res ? this.tripluTestRiscControl.enable() : this.tripluTestRiscControl.disable();
            },
            error:() => {
    
            }
        })
        this.isCvadrubluTestRiscControl.valueChanges
        .pipe(takeUntil(this._unsubscribeAll$))
        .subscribe({
            next:(res) => {
                res ? this.cvadrubluTestRiscControl.enable() : this.cvadrubluTestRiscControl.disable();
            },
            error:() => {
    
            }
        })
    }
    //#endregion

    //#region Private Methods
    private _disableTextFormControls(): void {
        this.seroconversieVirusControl.disable();
        this.morfologieTAnormalControl.disable();
        this.dubluTestRiscControl.disable();
        this.tripluTestRiscControl.disable();
        this.cvadrubluTestRiscControl.disable();
    }
    //#endregion

    
 }
