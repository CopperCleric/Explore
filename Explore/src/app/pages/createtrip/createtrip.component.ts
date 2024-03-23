import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component'
import { HeaderComponent } from '../../components/header/header.component'
import { FormControl, FormGroup , ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-createtrip',
  standalone: true,
  imports: [DropdownModule,FooterComponent, HeaderComponent, ReactiveFormsModule, CalendarModule, InputTextModule],
  templateUrl: './createtrip.component.html',
  styleUrl: './createtrip.component.css'
})


export class CreateTripComponent implements OnInit{
  login = 'true'

  tripForm = new FormGroup({
    destination : new FormControl(''),
    name : new FormControl(''),
    date : new FormControl(''),
    budget: new FormControl(''),
    numOfGuest: new FormControl('')
  });

  budgetList: Budget[] = [];
 
  constructor() {
    
  }
  ngOnInit() {
    this.budgetList = [
      { name: 'Less than RM1000', code: 'LS1' },
      { name: 'Between RM1000 and RM2000', code: 'LS1' },
      { name: 'Between RM2000 and RM5000', code: 'LS1' },
      { name: 'Between RM5000 and RM10000', code: 'LS1' },
      { name: 'Greater than RM10000', code: 'LS1' }
    ];
  }


}


export interface Budget {
  name : string,
  code : string
}