import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'
})
export class TestService {
  questions = [
    {
      question: 'Pitanje ', 
      answers: [
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: true},
        { answer: 'Odgovor', correct: false},
      ]
    },
    {
      question: 'Pitanje', 
      answers: [
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: true},
        { answer: 'Odgovor', correct: false},
      ]
    },
    {
      question: 'Pitanje', 
      answers: [
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: true},
        { answer: 'Odgovor', correct: false},
      ]
    },
    {
      question: 'Pitanje', 
      answers: [
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: false},
        { answer: 'Odgovor', correct: true},
        { answer: 'Odgovor', correct: false},
      ]
    },
  ]

  constructor() { }

  public getTest() {
    return this.questions;
  }
}
