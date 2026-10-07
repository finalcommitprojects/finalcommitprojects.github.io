// Sample projects that are actually built and public. Each maps to a catalogue project by id.
export interface Demo {
  projectId: number;
  slug: string;
  title: string;
  kind: string;
  blurb: string;
  live: string;
  code: string;
  thumb: string; // under public/
  badge: string;
  sample?: string; // sample report, PPT and diagrams
}

export const demos: Demo[] = [
  {
    projectId: 34,
    slug: 'handwriting',
    title: 'Handwritten digit recognition',
    kind: 'Deep learning · runs in the browser',
    blurb: 'Draw a digit and a CNN trained on MNIST (99.23% on the test set) recognises it. Python training, plain-JavaScript inference.',
    live: 'https://finalcommitprojects.github.io/demo-handwriting/',
    code: 'https://github.com/finalcommitprojects/demo-handwriting',
    thumb: '/demos/handwriting.png',
    badge: 'Digits demo',
  },
  {
    projectId: 8,
    slug: 'lost-found',
    title: 'Campus Lost & Found',
    kind: 'Full web app · Express + SQLite',
    blurb: 'Post, search and claim items with a proof question, then arrange the hand-over in messages. Comes with a sample synopsis, report chapter, PPT and diagrams.',
    live: 'https://finalcommitprojects.github.io/demo-lost-found/',
    code: 'https://github.com/finalcommitprojects/demo-lost-found',
    thumb: '/demos/lost-found.png',
    badge: 'Live demo',
    sample: 'https://github.com/finalcommitprojects/demo-lost-found/tree/main/samples',
  },
  {
    projectId: 36,
    slug: 'rag-helpdesk',
    title: 'College helpdesk chatbot (RAG)',
    kind: 'NLP & generative AI · retrieval',
    blurb: "Ask about a college's rules and get the answer from its handbook, with the exact page cited. Says so when the handbook doesn't cover a question.",
    live: 'https://finalcommitprojects.github.io/demo-rag-helpdesk/',
    code: 'https://github.com/finalcommitprojects/demo-rag-helpdesk',
    thumb: '/demos/rag-helpdesk.png',
    badge: 'Live demo',
  },
  {
    projectId: 10,
    slug: 'expense-splitter',
    title: 'Expense Splitter (Android app)',
    kind: 'Android · Kotlin, Compose, Room',
    blurb: 'Split bills with roommates, settle up in the fewest payments, and pay through any UPI app. Download the signed APK and try it on your phone.',
    live: 'https://finalcommitprojects.github.io/demo-expense-splitter/',
    code: 'https://github.com/finalcommitprojects/demo-expense-splitter',
    thumb: '/demos/expense-splitter.png',
    badge: 'Android APK',
  },
];

export const demoFor = (projectId: number) => demos.find((d) => d.projectId === projectId);
