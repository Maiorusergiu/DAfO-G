import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
    selector: 'app-cordon-ombilical',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatRadioModule
    ],
    templateUrl: './cordon-ombilical.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CordonOmbilicalComponent { 

    //#region Constants
    form: FormGroup;
    //#endregion
    //#region Lifecycle Hooks
    ngOnInit(): void {
        this.form = this._getForm();
    }
    //#endregion

    //#region Private Methods
    private _getForm(): FormGroup<any> {
        return new FormGroup<any>({
            cordonOmbilical: new FormControl<string>(''),
            inserat: new FormControl<string>(''),
            cordonOmbilicalAlteObservatii: new FormControl<string>('')
        })
    }
    //#endregion
}
