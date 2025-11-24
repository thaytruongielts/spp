import { Section } from './types';

export const EXERCISE_DATA: Section[] = [
  {
    id: 'I',
    title: 'I. Dạng 1: Chia Động Từ To Be',
    instruction: "Chia động từ (be) thành am, is, hoặc are (có thể ở dạng phủ định isn't, aren't).",
    questions: [
      {
        id: 1,
        parts: [
          { text: "My name " },
          { id: "1-1", hint: "be", correctAnswers: ["is"] },
          { text: " Jane." }
        ]
      },
      {
        id: 2,
        parts: [
          { text: "They " },
          { id: "2-1", hint: "be", correctAnswers: ["are"] },
          { text: " students from Hanoi." }
        ]
      },
      {
        id: 3,
        parts: [
          { text: "The coffee " },
          { id: "3-1", hint: "not/be", correctAnswers: ["isn't", "is not"] },
          { text: " hot enough." }
        ]
      },
      {
        id: 4,
        parts: [
          { text: "How old " },
          { id: "4-1", hint: "be", correctAnswers: ["is"] },
          { text: " your brother?" }
        ]
      },
      {
        id: 5,
        parts: [
          { text: "It " },
          { id: "5-1", hint: "be", correctAnswers: ["is"] },
          { text: " often rainy in this season." }
        ]
      },
      {
        id: 6,
        parts: [
          { text: "You and I " },
          { id: "6-1", hint: "be", correctAnswers: ["are"] },
          { text: " good at Math." }
        ]
      },
      {
        id: 7,
        parts: [
          { text: "The keys " },
          { id: "7-1", hint: "not/be", correctAnswers: ["aren't", "are not"] },
          { text: " in the car." }
        ]
      },
      {
        id: 8,
        parts: [
          { text: "I " },
          { id: "8-1", hint: "be", correctAnswers: ["am"] },
          { text: " not sure about the answer." }
        ]
      },
      {
        id: 9,
        parts: [
          { text: "This book " },
          { id: "9-1", hint: "be", correctAnswers: ["is"] },
          { text: " interesting, but those books " },
          { id: "9-2", hint: "be", correctAnswers: ["are"] },
          { text: " boring." }
        ]
      },
      {
        id: 10,
        parts: [
          { id: "10-1", hint: "be", correctAnswers: ["Is"] },
          { text: " your sister an engineer?" }
        ]
      }
    ]
  },
  {
    id: 'II',
    title: 'II. Dạng 2: Chia Động Từ Thường (Action Verbs) - Khẳng Định',
    instruction: "Chia động từ trong ngoặc ở thể khẳng định, lưu ý quy tắc thêm -s hoặc -es.",
    questions: [
      {
        id: 11,
        parts: [
          { text: "She always " },
          { id: "11-1", hint: "finish", correctAnswers: ["finishes"] },
          { text: " her homework before dinner." }
        ]
      },
      {
        id: 12,
        parts: [
          { text: "We rarely " },
          { id: "12-1", hint: "watch", correctAnswers: ["watch"] },
          { text: " TV in the morning." }
        ]
      },
      {
        id: 13,
        parts: [
          { text: "The sun " },
          { id: "13-1", hint: "rise", correctAnswers: ["rises"] },
          { text: " in the East." }
        ]
      },
      {
        id: 14,
        parts: [
          { text: "My father " },
          { id: "14-1", hint: "teach", correctAnswers: ["teaches"] },
          { text: " English at a secondary school." }
        ]
      },
      {
        id: 15,
        parts: [
          { text: "He " },
          { id: "15-1", hint: "go", correctAnswers: ["goes"] },
          { text: " to the gym three times a week." }
        ]
      },
      {
        id: 16,
        parts: [
          { text: "The baby often " },
          { id: "16-1", hint: "cry", correctAnswers: ["cries"] },
          { text: " at night." }
        ]
      },
      {
        id: 17,
        parts: [
          { text: "I " },
          { id: "17-1", hint: "believe", correctAnswers: ["believe"] },
          { text: " in destiny." }
        ]
      },
      {
        id: 18,
        parts: [
          { text: "My team " },
          { id: "18-1", hint: "play", correctAnswers: ["plays"] },
          { text: " soccer every Saturday." }
        ]
      },
      {
        id: 19,
        parts: [
          { text: "This glass " },
          { id: "19-1", hint: "contain", correctAnswers: ["contains"] },
          { text: " fresh milk." }
        ]
      },
      {
        id: 20,
        parts: [
          { text: "The bus " },
          { id: "20-1", hint: "leave", correctAnswers: ["leaves"] },
          { text: " at 7:30 a.m. sharp." }
        ]
      }
    ]
  },
  {
    id: 'III',
    title: 'III. Dạng 3: Chia Động Từ Thường - Phủ Định và Nghi Vấn',
    instruction: "Chia động từ trong ngoặc ở thể phủ định (dùng don't/doesn't) hoặc thể nghi vấn (dùng Do/Does).",
    questions: [
      {
        id: 21,
        parts: [
          { text: "My neighbors " },
          { id: "21-1", hint: "not/make", correctAnswers: ["don't make", "do not make"] },
          { text: " much noise." }
        ]
      },
      {
        id: 22,
        parts: [
          { id: "22-1", hint: "Do", correctAnswers: ["Do"] },
          { text: " you " },
          { id: "22-2", hint: "know", correctAnswers: ["know"] },
          { text: " how to drive a car?" }
        ]
      },
      {
        id: 23,
        parts: [
          { text: "He " },
          { id: "23-1", hint: "not/speak", correctAnswers: ["doesn't speak", "does not speak"] },
          { text: " French well." }
        ]
      },
      {
        id: 24,
        parts: [
          { text: "What " },
          { id: "24-1", hint: "Do", correctAnswers: ["does"] },
          { text: " she usually " },
          { id: "24-2", hint: "do", correctAnswers: ["do"] },
          { text: " after work?" }
        ]
      },
      {
        id: 25,
        parts: [
          { text: "We " },
          { id: "25-1", hint: "not/want", correctAnswers: ["don't want", "do not want"] },
          { text: " to buy that house." }
        ]
      },
      {
        id: 26,
        parts: [
          { id: "26-1", hint: "Do", correctAnswers: ["Does"] },
          { text: " it " },
          { id: "26-2", hint: "take", correctAnswers: ["take"] },
          { text: " long to get to the airport?" }
        ]
      },
      {
        id: 27,
        parts: [
          { text: "The clock " },
          { id: "27-1", hint: "not/work", correctAnswers: ["doesn't work", "does not work"] },
          { text: " properly." }
        ]
      },
      {
        id: 28,
        parts: [
          { text: "Where " },
          { id: "28-1", hint: "Do", correctAnswers: ["do"] },
          { text: " they " },
          { id: "28-2", hint: "live", correctAnswers: ["live"] },
          { text: " ?" }
        ]
      },
      {
        id: 29,
        parts: [
          { text: "I " },
          { id: "29-1", hint: "not/understand", correctAnswers: ["don't understand", "do not understand"] },
          { text: " the new lesson." }
        ]
      },
      {
        id: 30,
        parts: [
          { text: "Why " },
          { id: "30-1", hint: "Do", correctAnswers: ["does"] },
          { text: " your mother always " },
          { id: "30-2", hint: "worry", correctAnswers: ["worry"] },
          { text: "?" }
        ]
      }
    ]
  }
];
