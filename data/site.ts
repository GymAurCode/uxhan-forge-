export const domain = 'https://uxhanforge.vercel.app';
export const contact = 'uxhanforge@gmail.com';
export const support = 'uxhanforge.support@gmail.com';
export const play = 'https://play.google.com/store/apps/details?id=com.taqwahabit.app';

export const apps = [
  {
    id: 'taqwa-habit', name: 'Taqwa Habit', category: 'Islamic lifestyle', color: '#84e8bd',
    description: 'Build a daily rhythm for prayer, Quran reading and remembrance.',
    overview: 'Bring daily worship into one place. Record prayers, pick up where you left off in the Quran, and see how your habits develop over time.',
    store: play,
    features: [
      ['Daily prayers', 'Record your prayers and follow your progress over time.'],
      ['Quran reading', 'Keep your reading progress organized as you work toward completing the Quran.'],
      ['Azkar and Tasbeeh', 'Keep track of daily remembrance and Tasbeeh.'],
      ['Hasanat, levels and ranks', 'Earn Hasanat for supported activities and track milestones as you build consistency.'],
      ['Leaderboards and profile', 'View personal achievements and compare progress across available leaderboard categories.'],
    ],
  },
  {
    id: 'uxblox', name: 'UXBLOX', category: 'Block puzzle', color: '#b9a2ff',
    description: 'A mobile block puzzle about finding the right fit.',
    overview: 'Place blocks and clear space for your next move. UXBLOX is an upcoming mobile puzzle game built around the satisfaction of making pieces fit.',
    features: [['Block placement', 'Consider where each piece fits before committing to a move.'], ['Clear space', 'Stack and clear blocks to make room for the next placement.']],
  },
  {
    id: 'railbop', name: 'RailBop', category: 'Train-track puzzle', color: '#ffba8a',
    description: 'Connect tracks and piece together train routes.',
    overview: 'RailBop is an upcoming mobile puzzle game centered on connecting railway tracks into routes.',
    features: [['Track connections', 'Piece together railway tracks to form a route.'], ['Route puzzles', 'Work out how individual track connections fit into the larger route.']],
  },
];
export type Product = (typeof apps)[number];

export type Release = {
  version: string;
  date: string;
  channel: string;
  title: string;
  summary: string;
  platform: string;
  features?: string[];
  improvements?: string[];
  fixes?: string[];
  knownIssues?: string[];
  url?: string;
};
