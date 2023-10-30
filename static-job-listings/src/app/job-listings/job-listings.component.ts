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

  languageFilters: string[] = [];

  toolFilters: string[] = [];

  levelFilter: string = '';

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
      const toolsFilterPass = this.toolFilters.every((tool) =>
        listing.tools.includes(tool)
      );

      const levelFilterPass = listing.level.includes(this.levelFilter);

      // Return true if both language and tools filters pass
      return languageFilterPass && toolsFilterPass && levelFilterPass;
    });
  }
  //  testData = [
  //     { lang: ['JS', 'TS'] },
  //     { lang: ['JS', 'TS', 'HTML'] },
  //     { lang: ['HTML', 'CSS'] },
  //   ];

  addLangFilter(filterStr: string) {
    if (!this.languageFilters.includes(filterStr)) {
      this.languageFilters.push(filterStr);
    }
    this.filterListings();
  }

  addToolFilter(filterStr: string) {
    if (!this.toolFilters.includes(filterStr)) {
      this.toolFilters.push(filterStr);
    }
    this.filterListings();
  }

  removeLangFilter(filterStr: string) {
    const i = this.languageFilters.indexOf(filterStr);
    this.languageFilters.splice(i, 1);
    this.filterListings();
  }

  removeToolFilter(filterStr: string) {
    const i = this.toolFilters.indexOf(filterStr);
    this.toolFilters.splice(i, 1);
    this.filterListings();
  }

  addLevelFilter(filterStr: string) {
    this.levelFilter = filterStr;
    this.filterListings();
    console.log(this.levelFilter);
  }

  removeLevelFilter() {
    this.levelFilter = '';
    this.filterListings();
  }

  clearFilters() {
    this.languageFilters = [];
    this.toolFilters = [];
    this.levelFilter = '';
    this.filterListings();
  }

  constructor(private fetchJobListingsService: FetchJobListingsService) {}

  ngOnInit(): void {
    this.fetchJobListingsService.getData().subscribe((result) => {
      this.jobListingsData = result;
      this.filteredJobListings = result;
    });
  }
}
