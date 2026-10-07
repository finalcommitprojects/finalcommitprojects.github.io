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
];

export const demoFor = (projectId: number) => demos.find((d) => d.projectId === projectId);
