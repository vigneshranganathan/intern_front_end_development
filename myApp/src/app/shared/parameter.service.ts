
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElectricalMachineParameter } from './electrical-machine-parameter';

@Injectable({ providedIn: 'root' })
export class ParameterService {
  private apiUrl = 'http://localhost:8000/api/parameters/'; 

  constructor(private http: HttpClient) {}

  fetchParameters(): Observable<ElectricalMachineParameter[]> {
    return this.http.get<ElectricalMachineParameter[]>(this.apiUrl);
  }
}

