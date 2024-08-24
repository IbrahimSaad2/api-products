import { Component } from '@angular/core';
import { ApiService } from '../api.service';
interface IProduct{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private _ApiService : ApiService){};

  productList!:IProduct[];
  ngOnInit(): void {
      this._ApiService.getProduct().subscribe({
        next:(res)=>{
          console.log(res);
          this.productList = res;
        },
        error:(err)=>{
          console.log(err)
        }
      })
  }
}
