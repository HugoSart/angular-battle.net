import {Component} from '@angular/core';
import {Tab, TabService} from '../../services/tab.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  selectedTab$: Observable<Tab>;
  tabs$: Observable<Tab[]>;

  constructor(private tabService: TabService) {
    this.selectedTab$ = tabService.selected$;
    this.tabs$ = tabService.get();
    console.log(this.tabs$);
  }

  select(tab: Tab) {
    this.tabService.select(tab);
  }

}
