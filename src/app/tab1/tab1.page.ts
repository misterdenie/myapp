import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data  = [
    { 
      title: 'CAPTAIN MARVEL', 
      subtitle:'CAROL DANVERS',
      img:'/assets/01.jpg',
      content: `Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.`
    },
    { 
      title: 'BLACK PANTHER', 
      subtitle:`T'CHALLA`,
      img:'/assets/02.jpg',
      content: `T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.`
    },
    { 
      title: 'IRON MAN', 
      subtitle:`TONY STARK`,
      img:'/assets/03.jpg',
      content: `Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.`
    },
    { 
      title: 'CAPTAIN AMERICA', 
      subtitle:`STEVE ROGERS`,
      img:'/assets/04.jpg',
      content: `Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.`
    },
    { 
      title: 'BLACK WIDOW', 
      subtitle:`NATASHA ROMANOFF`,
      img:'/assets/05.jpg',
      content: `Despite super spy Natasha Romanoff’s checkered past, she’s become one of S.H.I.E.L.D.’s most deadly assassins and a frequent member of the Avengers.`
    },
    { 
      title: 'HULK', 
      subtitle:`BRUCE BANNER`,
      img:'/assets/06.jpg',
      content: `Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.`
    }
  ];

  constructor() {}

}
