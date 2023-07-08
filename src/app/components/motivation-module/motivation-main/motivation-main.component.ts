import { Component } from '@angular/core';

@Component({
  selector: 'app-motivation-main',
  templateUrl: './motivation-main.component.html',
  styleUrls: ['./motivation-main.component.css'],
})
export class MotivationMainComponent {
  phrases: { text: string; author: string }[] = [
    {
      text: "It's not about how hard you hit, but how hard you can get hit and keep moving forward.",
      author: 'Rocky Balboa',
    },
    {
      text: "Don't count the days; make the days count.",
      author: 'Muhammad Ali',
    },
    {
      text: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
    },
    {
      text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
      author: 'Winston Churchill',
    },
    {
      text: 'The only limit to our realization of tomorrow will be our doubts of today.',
      author: 'Franklin D. Roosevelt',
    },
    {
      text: "Believe you can, and you're halfway there.",
      author: 'Theodore Roosevelt',
    },
    {
      text: 'It does not matter how slowly you go as long as you do not stop.',
      author: 'Confucius',
    },
    {
      text: 'The harder the struggle, the more glorious the triumph.',
      author: 'Wilbur Wright',
    },
    {
      text: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
      author: 'Albert Schweitzer',
    },
    {
      text: 'You are never too old to set another goal or to dream a new dream.',
      author: 'C.S. Lewis',
    },
  ];

  videos: { url: number }[] = [
    { url: 1 },
    { url: 2 },
    { url: 3 },
    { url: 4 },
    { url: 5 },
  ];

  currentPhrase: { text: string; author: string } = this.phrases[0];
  currentVideo: { url: number } = this.videos[0];

  randomPhrase(): void {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    this.currentPhrase = this.phrases[randomIndex];
  }

  randomVideo(): void {
    const randomIndex = Math.floor(Math.random() * this.videos.length);
    this.currentVideo = this.videos[randomIndex];
  }
}
