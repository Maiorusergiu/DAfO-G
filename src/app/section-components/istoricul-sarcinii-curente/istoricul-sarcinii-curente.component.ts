import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-istoricul-sarcinii-curente',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './istoricul-sarcinii-curente.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IstoriculSarciniiCurenteComponent {
    
 }
