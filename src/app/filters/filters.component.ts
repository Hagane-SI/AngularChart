import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  startDate: String;
  endDate: String;
  selectedDate: any;
  selectedRangeDate: any;
  filterType: String;
  frequencyType: String;
  serviceData: any;

  selectedVerifiersDay = [];
  selectedVerifiersWeek = [];
  verifiers: any;

  constructor(private data: DataService, private graphComponent:GraphComponent) {
    this.data.filterType.subscribe(filterType => this.filterType = filterType);
    this.data.frequencyType.subscribe(frequencyType => this.frequencyType = frequencyType);
    this.data.serviceData.subscribe(serviceData => this.serviceData = serviceData);
    this.data.verifiers.subscribe(verifiers => this.verifiers = verifiers);
    this.data.selectedDate.subscribe(selectedDate => this.selectedDate = selectedDate);
    this.data.selectedRangeDate.subscribe(selectedRangeDate => this.selectedRangeDate = selectedRangeDate);

    this.selectedDate = "09-09-2018";
    this.verifiers= "17254521400248,17254521400259,17257521400137";
    //Store by day
    this.serviceData = [{"timeElementValue":"3","count":2},{"timeElementValue":"4","count":1},{"timeElementValue":"5","count":1},{"timeElementValue":"6","count":4},{"timeElementValue":"7","count":18},{"timeElementValue":"8","count":14},{"timeElementValue":"9","count":39},{"timeElementValue":"10","count":90},{"timeElementValue":"11","count":37},{"timeElementValue":"12","count":123},{"timeElementValue":"13","count":181},{"timeElementValue":"14","count":207},{"timeElementValue":"15","count":197},{"timeElementValue":"16","count":194},{"timeElementValue":"17","count":224},{"timeElementValue":"18","count":316},{"timeElementValue":"19","count":215},{"timeElementValue":"20","count":205},{"timeElementValue":"21","count":139},{"timeElementValue":"22","count":9},{"timeElementValue":"23","count":6}];
    //verifier by day
    this.serviceData = [{"timeElementValue":"8","count":6,"device":"17254521400248"},{"timeElementValue":"9","count":16,"device":"17254521400248"},{"timeElementValue":"10","count":8,"device":"17254521400248"},{"timeElementValue":"11","count":8,"device":"17254521400248"},{"timeElementValue":"12","count":26,"device":"17254521400248"},{"timeElementValue":"13","count":41,"device":"17254521400248"},{"timeElementValue":"14","count":63,"device":"17254521400248"},{"timeElementValue":"15","count":26,"device":"17254521400248"},{"timeElementValue":"16","count":42,"device":"17254521400248"},{"timeElementValue":"17","count":60,"device":"17254521400248"},{"timeElementValue":"18","count":63,"device":"17254521400248"},{"timeElementValue":"19","count":27,"device":"17254521400248"},{"timeElementValue":"20","count":32,"device":"17254521400248"},{"timeElementValue":"21","count":12,"device":"17254521400248"},{"timeElementValue":"22","count":1,"device":"17254521400248"},{"timeElementValue":"7","count":4,"device":"17254521400259"},{"timeElementValue":"8","count":1,"device":"17254521400259"},{"timeElementValue":"9","count":5,"device":"17254521400259"},{"timeElementValue":"10","count":3,"device":"17254521400259"},{"timeElementValue":"11","count":2,"device":"17254521400259"},{"timeElementValue":"12","count":14,"device":"17254521400259"},{"timeElementValue":"13","count":24,"device":"17254521400259"},{"timeElementValue":"14","count":13,"device":"17254521400259"},{"timeElementValue":"15","count":52,"device":"17254521400259"},{"timeElementValue":"16","count":28,"device":"17254521400259"},{"timeElementValue":"17","count":45,"device":"17254521400259"},{"timeElementValue":"18","count":30,"device":"17254521400259"},{"timeElementValue":"19","count":30,"device":"17254521400259"},{"timeElementValue":"20","count":23,"device":"17254521400259"},{"timeElementValue":"21","count":13,"device":"17254521400259"},{"timeElementValue":"7","count":1,"device":"17257521400137"},{"timeElementValue":"8","count":2,"device":"17257521400137"},{"timeElementValue":"9","count":6,"device":"17257521400137"},{"timeElementValue":"10","count":3,"device":"17257521400137"},{"timeElementValue":"11","count":7,"device":"17257521400137"},{"timeElementValue":"12","count":16,"device":"17257521400137"},{"timeElementValue":"13","count":2,"device":"17257521400137"},{"timeElementValue":"14","count":21,"device":"17257521400137"},{"timeElementValue":"15","count":40,"device":"17257521400137"},{"timeElementValue":"16","count":33,"device":"17257521400137"},{"timeElementValue":"17","count":22,"device":"17257521400137"},{"timeElementValue":"18","count":18,"device":"17257521400137"},{"timeElementValue":"19","count":27,"device":"17257521400137"},{"timeElementValue":"20","count":14,"device":"17257521400137"},{"timeElementValue":"21","count":35,"device":"17257521400137"},{"timeElementValue":"22","count":2,"device":"17257521400137"},{"timeElementValue":"23","count":1,"device":"17257521400137"}];

  }

  ngOnInit() {
  }

  sendParamsToChart() {
    this.graphComponent.data=[0,0,2,1,1,4,18,14,39,90,37,123,181,207,197,194,224,316,215,205,139,9,6]
    this.graphComponent.drawGraph();
  }

}
