import { Component, OnInit } from '@angular/core';
import { ElectricalMachineParameter } from '../shared/electrical-machine-parameter';
import { ParameterService } from '../shared/parameter.service';

@Component({
  selector: 'app-parameters', // Adjust selector if needed
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {
  parameters: ElectricalMachineParameter[] = [];

  constructor(private parameterService: ParameterService) {}

  ngOnInit(): void {
    this.parameterService.fetchParameters()
      .subscribe(parameters => this.parameters = parameters);
  }
}