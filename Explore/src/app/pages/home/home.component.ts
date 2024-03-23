import { ButtonModule } from 'primeng/button';
import { Component,  OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component'
import { HeaderComponent } from '../../components/header/header.component'
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule,FooterComponent, HeaderComponent, CarouselModule, TagModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  login = 'true'
  products : Product[] = [] ;
  responsiveOptions: any[] | undefined;
  constructor(){}

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
    ];

    this.getProductsData();
  }
  

  getProductsData() {
    this.products =  [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Mountain Hiking Tour',
            description: 'Mountain Hiking Tour',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'Machu Pitchu, Peru',
            description: 'Mountain Hiking Tour',
            image: 'black-watch.jpg',
            price: 72,
            category: 'Accessories',
            quantity: 61,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
        {
            id: '1002',
            code: 'zz21cz3c1',
            name: 'The Grand Canyon, Arizona',
            description: 'Mountain Hiking Tour',
            image: 'blue-band.jpg',
            price: 79,
            category: 'Fitness',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
          id: '1002',
          code: 'zz21cz3c1',
          name: 'The Grand Canyon, Arizona',
          description: 'Mountain Hiking Tour',
          image: 'blue-band.jpg',
          price: 79,
          category: 'Fitness',
          quantity: 2,
          inventoryStatus: 'LOWSTOCK',
          rating: 3
        },
        {
          id: '1002',
          code: 'zz21cz3c1',
          name: 'The Grand Canyon, Arizona',
          description: 'Mountain Hiking Tour',
          image: 'blue-band.jpg',
          price: 79,
          category: 'Fitness',
          quantity: 2,
          inventoryStatus: 'LOWSTOCK',
          rating: 3
        }
      ]}
}

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
  category: string;
  image: string;
  rating: number;
}