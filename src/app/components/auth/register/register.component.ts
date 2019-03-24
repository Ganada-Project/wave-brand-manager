import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LocationStrategy } from '@angular/common';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private title: Title, location: LocationStrategy, private queries: QueriesService) {
    location.onPopState(() => {
      if (queries.registering) {
        queries.isRegister();
      }
    })
  }

  ngOnInit() {
    this.title.setTitle('등록');
    
  }

}
