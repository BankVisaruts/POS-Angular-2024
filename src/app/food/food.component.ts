import { Component } from '@angular/core';
import { MyModalComponent } from "../my-modal/my-modal.component";
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import config from '../../config';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MyModalComponent, FormsModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  constructor(private http: HttpClient) {}

  foodTypes: any[] = [];
  foods: any[] = [];
  name: string = '';
  fileName: string = '';
  price: number = 0;
  remark: string = '';
  foodType: string = 'food';
  id: number = 0;
  foodTypeId: number = 0;

  ngOnInit() {
    this.fetchData();
    this.fetchDataFoodTypes();
  }

  async fetchData() {

  }

  async fetchDataFoodTypes() {
    try {
      this.http.get(config.apiServer + '/api/foodType/list')
      .subscribe((res: any) => {
        this.foodTypes = res.results;
        this.foodTypeId = this.foodTypes[0].id;
      })
    } catch (e: any) {
      Swal.fire({
        title: 'error',
        text: e.message,
        icon: 'error',
      })
    }
  }

  clearForm() {

  }
}