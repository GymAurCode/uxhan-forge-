export type Question = { question: string; answer: string };

export const focusAreas = [
  ['Mobile applications', 'Tools for routines you return to. We focus on clear navigation, useful progress and actions that fit everyday life.'],
  ['Puzzle and casual games', 'Small rules with room to think. Block placement and railway connections give our games their starting point.'],
  ['Thoughtful experiences', 'Readable screens, deliberate feedback and familiar controls help people spend their attention on the task.'],
  ['Continuous improvement', 'A release creates an opportunity to learn. Corrections, refinements and useful additions give a product room to grow.'],
];

export const philosophy = [
  ['Simplicity', 'Give each screen a clear purpose and keep the next action easy to find.'],
  ['Useful features', 'Choose features that support the routine or puzzle at the heart of the product.'],
  ['Visual polish', 'Use type, spacing and color to make information comfortable to read.'],
  ['Enjoyable interactions', 'Make progress and feedback clear, with motion that helps explain what happened.'],
  ['Performance', 'Treat responsive controls and reliable behavior as part of the experience.'],
  ['Long-term improvement', 'Revisit the details as people use the app and tell us what needs attention.'],
];

export const journey = [
  ['Idea', 'Start with a routine worth supporting or a puzzle rule worth exploring.'],
  ['Design', 'Work out the essential screens, actions and feedback.'],
  ['Development', 'Turn those decisions into an experience people can use.'],
  ['Testing', 'Check the main flows, edge cases and behavior on different screens.'],
  ['Release', 'Make the product available with clear support and update information.'],
  ['Improvement', 'Use feedback and observed issues to choose the next refinements.'],
];

export const studioFaq: Question[] = [
  { question: 'What does Uxhan Forge create?', answer: 'We are an independent mobile app and game studio. Our portfolio includes an Islamic habit-tracking app and two upcoming puzzle games.' },
  { question: 'Where can I download Taqwa Habit?', answer: 'Taqwa Habit is available on Google Play. The Taqwa Habit product page links directly to its official listing.' },
  { question: 'Are UXBLOX and RailBop available yet?', answer: 'Both games are coming soon. Their product pages describe the current concepts, and their update pages will carry verified release information when available.' },
  { question: 'Where can I find release updates?', answer: 'Open Updates to browse all products, or use the version-history link on an individual app page.' },
  { question: 'How do I contact product support?', answer: 'Email uxhanforge.support@gmail.com. Include the product, device, app version and a short description of what happened.' },
  { question: 'Where are the privacy policies?', answer: 'Each app page links to its privacy, terms and deletion information. The footer also links to the studio’s existing public legal routes.' },
];

export const productStories: Record<string, {
  audience: string;
  concept: string;
  steps: string[][];
  highlights: string[][];
  experience: string;
  faq: Question[];
}> = {
  'taqwa-habit': {
    audience: 'For people who want a clearer view of their daily Islamic habits, Taqwa Habit brings worship records and progress into a shared routine.',
    concept: 'A day is made of small actions. The app helps you record them, return to your reading and review the consistency you are building.',
    steps: [['Record worship', 'Track daily prayers, Quran reading, Azkar and Tasbeeh activities.'], ['Review progress', 'See Hasanat from supported activities alongside levels, ranks and personal achievements.'], ['Return tomorrow', 'Use your records to pick up your routine again. Leaderboards offer another view of progress across available categories.']],
    highlights: [['A place for daily practice', 'Prayer, reading and remembrance stay within the same application.'], ['Progress with context', 'Your personal profile brings achievements and activity into view.']],
    experience: 'The app combines activity tracking with a personal profile, progression and leaderboard categories. Choose the areas that support your own routine and use your recorded progress as a point of reference.',
    faq: [
      { question: 'Which activities can I track?', answer: 'The official listing includes daily prayer tracking, Quran reading progress, Azkar and Tasbeeh, plus Hasanat and personal progress.' },
      { question: 'Does Taqwa Habit include progression?', answer: 'The listing describes levels, ranks, achievements and leaderboard categories alongside the personal profile.' },
      { question: 'Where can I get the Android app?', answer: 'Use the Google Play button on this page to open the official com.taqwahabit.app listing.' },
      { question: 'How can I ask about my account or data?', answer: 'Use the privacy and deletion links below, or email product support with the name of the app and your question.' },
    ],
  },
  uxblox: {
    audience: 'For puzzle players who enjoy planning a placement, clearing a crowded board and working toward a better result.',
    concept: 'UXBLOX is built around an 8 × 8 block board. Consider the available space, place your pieces and clear lines to keep the board open.',
    steps: [['Read the board', 'Look at the spaces already filled and the pieces available to place.'], ['Find the fit', 'Choose a position that supports the next move as well as the current one.'], ['Clear and continue', 'Completed lines free space. The current project also includes online rankings and seasonal progression.']],
    highlights: [['An offline puzzle core', 'The project supports playing its core block puzzle without a network connection.'], ['Another reason to improve', 'Online rankings, seasons and tiers add context to submitted results when those services are available.']],
    experience: 'The central interaction is placing blocks on a compact board. Local play keeps the puzzle close at hand, while optional online features offer a way to compare results. The game is in development, and release details will be shared when confirmed.',
    faq: [
      { question: 'Is UXBLOX released?', answer: 'UXBLOX is coming soon. A public store link and release date have not been announced here.' },
      { question: 'What kind of puzzle is it?', answer: 'It is an 8 × 8 block-placement puzzle with line clearing, supported by the current project material.' },
      { question: 'Can the game be played offline?', answer: 'The current project supports offline core gameplay. Online rankings and seasons require the corresponding services and a connection.' },
      { question: 'Where will release information appear?', answer: 'The UXBLOX update page will collect verified release notes as they become available.' },
    ],
  },
  railbop: {
    audience: 'For players who like to trace a route, reconsider a connection and watch separate pieces become a working railway.',
    concept: 'Rotate track tiles to connect a starting point to a destination. The puzzle is understanding how each turn changes the route through the board.',
    steps: [['Trace the railway', 'Find the start and destination and examine the track pieces between them.'], ['Turn the tracks', 'Rotate the tiles to join their connections into a continuous route.'], ['Review the route', 'The current project records progress, stars and moves, with campaign and Daily Challenge play.']],
    highlights: [['A route you can reason through', 'Track connections make the effect of each rotation visible in the puzzle.'], ['Progress kept on your device', 'Campaign and Daily Challenge progress are stored locally. Optional accounts support online rankings.']],
    experience: 'RailBop focuses on the relationship between neighboring tracks. Its current project supports offline play and local progress, with optional accounts for verified ranking results. It is still an upcoming product.',
    faq: [
      { question: 'Is RailBop available to download?', answer: 'RailBop is coming soon. This website will add an official store link when a public release is verified.' },
      { question: 'How does the puzzle work?', answer: 'Rotate track tiles to connect the starting point and destination through the railway board.' },
      { question: 'Is an account needed for offline play?', answer: 'The current project supports offline play without an account. Optional accounts support online profile and ranking features.' },
      { question: 'Where is progress saved?', answer: 'Current gameplay progress is stored on the device. Read the privacy information for details about optional accounts and public ranking data.' },
    ],
  },
};
