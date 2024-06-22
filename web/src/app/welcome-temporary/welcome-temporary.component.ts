import { Component } from '@angular/core';
import { WelcomeTemporaryService } from './welcome-temporary.service';

interface Profile {
  avatar_url: string;
  user_name: string;
  url: string;
}

@Component({
  selector: 'app-welcome-temporary',
  templateUrl: './welcome-temporary.component.html',
  styleUrl: './welcome-temporary.component.css'
})
export class WelcomeTemporaryComponent {
  contributors: Profile[] = []
  constructor(private welcometempservice: WelcomeTemporaryService) {
    welcometempservice.getContributors().subscribe((response: any) => {
      response.forEach((contributor: any) => {
        this.contributors.push({
          "avatar_url": contributor['avatar_url'],
          "user_name": contributor['login'],
          "url": contributor['url'],
        })
      });
      
    })
  }
}
