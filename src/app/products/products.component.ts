import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  id: string = '';

  constructor(private route: ActivatedRoute,
    private router: Router) { 

    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  goToProduct(id: string): void {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }
}
