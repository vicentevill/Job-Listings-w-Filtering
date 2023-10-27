import { Component, OnInit } from '@angular/core';
import { FetchJobListingsService } from '../fetch-job-listings.service';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css'],
})
export class JobListingsComponent {
  jobListingsData: any;
  constructor(private fetchJobListingsService: FetchJobListingsService) {}
  ngOnInit(): void {
    this.fetchJobListingsService.getData().subscribe((result) => {
      this.jobListingsData = result;
    });
  }
}
