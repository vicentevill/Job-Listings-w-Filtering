import { Component, OnInit } from '@angular/core';
import { FetchJobListingsService } from '../fetch-job-listings.service';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css'],
})
export class JobListingsComponent {
  jobListingsData: any[] = [];

  filteredJobListings: any[] = [];

  languageFilters = ['JavaScript'];

  toolsFilters = ['Sass'];

  // filterListings() {
  //   this.filteredJobListings = this.jobListingsData.filter((listing) => {
  //     return this.languageFilters.every((filter) =>
  //       listing.languages.includes(filter)
  //     );
  //   });
  // }
  filterListings() {
    this.filteredJobListings = this.jobListingsData.filter((listing) => {
      // Filter by languages
      const languageFilterPass = this.languageFilters.every((language) =>
        listing.languages.includes(language)
      );

      // Filter by tools
      const toolsFilterPass = this.toolsFilters.every((tool) =>
        listing.tools.includes(tool)
      );

      // Return true if both language and tools filters pass
      return languageFilterPass && toolsFilterPass;
    });
  }
  //  testData = [
  //     { lang: ['JS', 'TS'] },
  //     { lang: ['JS', 'TS', 'HTML'] },
  //     { lang: ['HTML', 'CSS'] },
  //   ];
  constructor(private fetchJobListingsService: FetchJobListingsService) {}

  ngOnInit(): void {
    this.fetchJobListingsService.getData().subscribe((result) => {
      this.jobListingsData = result;
      this.filteredJobListings = result;
    });
  }
}
