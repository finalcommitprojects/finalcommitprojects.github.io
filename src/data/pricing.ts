import type { AreaKey, Project } from './projects';

// Published price ranges (INR). Changing these changes the site; the terms promise
// that a student's written quote doesn't change once accepted, not that ranges never do.
export const MINI: [number, number] = [2500, 4000];

export const ranges: { areas: AreaKey[]; label: string; range: [number, number] }[] = [
  { areas: ['web'], label: 'Web apps', range: [5000, 8000] },
  { areas: ['mobile'], label: 'Mobile apps', range: [6000, 10000] },
  { areas: ['ml', 'data'], label: 'Machine learning, Data analytics', range: [6000, 9000] },
  { areas: ['security', 'cloud'], label: 'Cybersecurity, Cloud & DevOps', range: [6000, 10000] },
  { areas: ['vision', 'blockchain'], label: 'Deep learning & vision, Blockchain', range: [8000, 12000] },
  { areas: ['genai'], label: 'NLP & generative AI', range: [9000, 14000] },
];

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;
export const fmt = ([a, b]: [number, number]) => `${inr(a)} to ${inr(b)}`;

export const priceFor = (p: Project): [number, number] =>
  p.level === 'Mini' ? MINI : ranges.find((r) => r.areas.includes(p.area))!.range;
