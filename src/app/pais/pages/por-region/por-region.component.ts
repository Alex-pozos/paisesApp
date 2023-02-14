import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {


  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];

  descRegion: string[] = ['Unión Europea', 'Asociación Europea de Libre Comercio', 'Comunidad del Caribe', 'Alianza del Pacifico', 'Union Africana', 'Unión de las Naciones Suramericanas', 'Unión Económica Euroasiática', 'Liga Árabe', 'Asociación de Naciones del Sudeste Asiático', 'Sistema de la Integración Centroamericana', 'Acuerdo de Libre Comercio de Europa Central', 'Tratado de Libre Comercio de América del Norte', 'Asociación del Sur de Asia para la Cooperación Regional'];

  paises: Country[] = [];

  regionActiva: string = '';

  constructor (private paisService: PaisService){}

  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-success' : 'btn btn-outline-info';
  }

  acitvarRegion(region: string) {

    if (this.regionActiva === region) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(this.regionActiva)
    .subscribe((paises) => {
        this.paises = paises;
        });

  }

}
