import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../../core/services/observable-service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  products$ : any;
  // products: any[] = [];
  // items: number[] = [];

  constructor(private service: ObservableService) { }
  
  ngOnInit(): void {
  this.products$ = this.service.getProducts().pipe(
    map((data: any) => data.products)
  );  
         // Async Pipe second and best way
    // Subscribe to the Observable
  //   this.service.getProducts().subscribe({
  //     next: (data) => {
  //       this.products = data.products;
  //     },
  //     error: (err) => {
  //       console.error('Error receiving data:', err);
  //     },
  //   });
   }
}