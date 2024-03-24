import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'ui-loading-screen',
    standalone: true,
    imports: [
        CommonModule,
        MatProgressSpinnerModule
        
    ],
    templateUrl: './ui-loading-screen.component.html',
    styleUrl: './ui-loading-screen.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLoadingScreenComponent { 
    //#region Control Variables
    @Input() color: string = '';
    @Input() diameter:number = 100;
    //#endregion
}
