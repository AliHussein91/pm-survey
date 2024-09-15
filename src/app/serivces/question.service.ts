import { QuestionsList } from './../interfaces/questions-list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: { 'male': QuestionsList, 'female': QuestionsList } = {
    male: {
      questions: [
        {
          id: 1,
          question: 'Do you think hours of cardio is beneficial for fat loss?',
          note: '(Many people think doing cardio every day is the answer.)',
          answers: [
            'Yes',
            'No',
            'Not Sure',
          ]
        },
        {
          id: 2,
          question: 'If there was a 7-minute routine to get you fit, would you want to add it to your daily routine?',
          note: '(Certain exercise routines can help ignite your metabolism for faster fat burn).',
          answers: [
            'Definitly',
            'Maybe',
            'Not Sure',
          ]
        },
      ]
    },
    female: {
      questions: [
        {
          id: 1,
          question: '1 Do you think hours of cardio is beneficial for fat loss?',
          note: '(Many people think doing cardio every day is the answer.)',
          answers: [
            'Yes',
            'No',
            'Not Sure',
          ]
        },
        {
          id: 2,
          question: '2 If there was a 7-minute routine to get you fit, would you want to add it to your daily routine?',
          note: '(Certain exercise routines can help ignite your metabolism for faster fat burn).',
          answers: [
            'Definitly',
            'Maybe',
            'Not Sure',
          ]
        },{
          id: 3,
          question: '3 Do you think hours of cardio is beneficial for fat loss?',
          note: '(Many people think doing cardio every day is the answer.)',
          answers: [
            'Yes3',
            'No3',
            'Not Sure3',
          ]
        },
        {
          id: 4,
          question: '4 If there was a 7-minute routine to get you fit, would you want to add it to your daily routine?',
          note: '(Certain exercise routines can help ignite your metabolism for faster fat burn).',
          answers: [
            'Definitly4',
            'Maybe4',
            'Not Sure4',
          ]
        },{
          id: 5,
          question: '5 Do you think hours of cardio is beneficial for fat loss?',
          note: '(Many people think doing cardio every day is the answer.)',
          answers: [
            'Yes5',
            'No5',
            'Not Sure5',
          ]
        },
        {
          id: 6,
          question: '6 If there was a 7-minute routine to get you fit, would you want to add it to your daily routine?',
          note: '(Certain exercise routines can help ignite your metabolism for faster fat burn).',
          answers: [
            'Definitly6',
            'Maybe6',
            'Not Sure6',
          ]
        },
      ]
    }
  }

}