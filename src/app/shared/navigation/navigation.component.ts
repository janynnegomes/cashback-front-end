import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  selectedUrl:string="";

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  go(url){
    this.selectedUrl = url;
    this.navigationService.navigate(url);
  }

}
