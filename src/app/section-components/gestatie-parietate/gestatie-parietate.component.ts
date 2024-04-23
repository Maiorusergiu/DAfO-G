import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
    selector: 'app-gestatie-parietate',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDatepickerModule,
    ],
    host: {
        class: 'flex flex-col gap-2'
    },
    templateUrl: './gestatie-parietate.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GestatieParietateComponent { 

    //#region Control Variables
    numarGestatiiControl = new FormControl<number | null>(null, Validators.max(2));
    numarParietateControl = new FormControl<number | null>(null, Validators.max(2));
    numarSaptamaniVarstaGestationalaControl = new FormControl<number | null>(null, Validators.max(27));
    numarZileVarstaGestationalaControl = new FormControl<number | null>(null, Validators.max(27));
    //#endregion
}
