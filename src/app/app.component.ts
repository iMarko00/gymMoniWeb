import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gym-moni-web';
  programs = [
    { kicker: 'One to one', title: 'Personal Training', price: 'from 65 € / session', description: 'We train together in the studio. I correct technique in the moment and build your progression week by week.' },
    { kicker: 'Remote', title: 'Online Coaching', price: '129 € / month', description: "Your plan, your video reviews, weekly feedback - for everyone who isn't nearby or trains on a shifting schedule." },
    { kicker: 'Eating', title: 'Nutrition Guidance', price: '49 € / month', description: "Enough protein, enough food, no rules you can't keep. Built around what you already cook and eat." }
  ];
  posts = [
    { title: 'Five lifts worth learning first', date: '12 Aug 2026', excerpt: "If you only ever train five movements, make them these - and here's how to start each one." },
    { title: 'How much protein, honestly', date: '29 Jul 2026', excerpt: 'A practical number, and what it looks like across an ordinary day of eating.' },
    { title: 'Coming back after months off', date: '14 Jul 2026', excerpt: 'The first four weeks matter more than the next four. Go slower than you want to.' },
    { title: 'Training when the week falls apart', date: '02 Jul 2026', excerpt: 'The twenty-minute session that keeps your progress alive when nothing else fits.' }
  ];
  plans = [
    { price: '65 €', name: 'Single session', note: 'Pay per visit, studio only' },
    { price: '129 €', name: 'Online coaching', note: 'Monthly, cancel monthly' },
    { price: '240 €', name: 'Four sessions', note: '60 € each, valid eight weeks' }
  ];
  submitted = false;
  requestSent = false;
  name = '';
  email = '';
  preferredDay = '';
  goal = '';

  sendRequest(): void {
    this.submitted = true;
    if (this.name.trim() && this.email) {
      this.requestSent = true;
    }
  }
}
