export const legalPages = ['privacy-policy', 'terms', 'delete-account'] as const;
export type LegalPage = typeof legalPages[number];
export type LegalSection = { title: string; paragraphs: string[] };

export const legalFacts: Record<string, {
  data: LegalSection[];
  deletion: string[];
  steps: string[];
  providers: string[];
}> = {
  'taqwa-habit': {
    data: [
      { title: 'Account and worship records', paragraphs: ['The current application code supports accounts with email, password credentials, name and optional profile details. Its backend stores prayer logs, Quran progress, Azkar and Tasbeeh records, habits, progress, achievements and social activity to provide these features across sessions. Profile and progress information can appear in social and leaderboard features according to the app’s privacy settings.'] },
      { title: 'Location and prayer times', paragraphs: ['With location permission, the app obtains coordinates to determine prayer times. The code sends coordinates and a calculation method to the Aladhan prayer-time service. For signed-in accounts, location settings including coordinates, city and country can also be synced to the app backend. Manual location settings are supported.'] },
      { title: 'Device storage and permissions', paragraphs: ['The app uses device storage for settings and application data and SecureStore for native session credentials. Location, notifications and optional profile-image selection have permission-based flows. Notification preferences and device push tokens support reminders and account notifications.'] },
      { title: 'Advertising and service providers', paragraphs: ['The Android project integrates Google Mobile Ads for advertising. The public Google Play listing identifies the app as containing ads. Advertising data handling depends on the delivered SDK configuration and consent settings. The backend uses PostgreSQL through Prisma, and the app calls Aladhan for prayer times.'] },
    ],
    deletion: ['The current backend implements authenticated deletion of the user and linked records through database relations. The exact scope of retained support records, operational logs and backups still needs confirmation for the deployed service. Support can explain what applies to your request.'],
    steps: ['Open Taqwa Habit and go to Profile.', 'Open Settings, then choose Delete Account.', 'Read and complete the app’s confirmation steps.'],
    providers: ['Google Mobile Ads', 'Aladhan prayer-time API', 'App backend and PostgreSQL'],
  },
  uxblox: {
    data: [
      { title: 'Offline play and local storage', paragraphs: ['UXBLOX is an upcoming block puzzle game. Its current code stores gameplay and preferences on the device using MMKV. Online features use Supabase when configured.'] },
      { title: 'Online accounts and rankings', paragraphs: ['The current account code supports username and password registration through Supabase Auth using an internal email alias derived from the username. Online profiles and submitted results support leaderboards, seasons and progression. Account identifiers, usernames and ranking information are processed for these features.'] },
      { title: 'Advertising and diagnostics', paragraphs: ['The project includes Google Mobile Ads and Google UMP consent handling. It also includes Sentry diagnostics, initialized when a Sentry DSN is configured, with default personal information collection disabled and performance tracing sampling set to zero. Deployment settings determine which integrations are active.'] },
    ],
    deletion: ['The account deletion function authenticates the current session and deletes the Supabase Auth user. Linked competitive records are configured to be removed through cascading database relations, including profiles, submitted runs, scores and related ranking records. Shared season records are separate. Local device data and provider backups require separate consideration.'],
    steps: ['Open UXBLOX and its account or data settings.', 'Use the app’s Delete my data action while signed in.', 'Complete the confirmation. You can also email support from this page.'],
    providers: ['Supabase Auth and database', 'Google Mobile Ads and UMP', 'Sentry when configured'],
  },
  railbop: {
    data: [
      { title: 'Device gameplay data', paragraphs: ['RailBop is an upcoming train-track puzzle game. Campaign and Daily Challenge progress, coins, cosmetics, achievements, preferences and the local player profile are stored in SQLite on the device. Offline play can be used without an account. The current code provides separate local saves for different accounts and does not automatically merge progress into cloud saves.'] },
      { title: 'Optional accounts and public results', paragraphs: ['Optional accounts use Supabase Auth with a username, recovery email and password. Public profile fields include the username, avatar and account identifier. Verified leaderboard results include completed levels, stars and move totals. Recovery emails are kept out of public profile tables. Native session tokens use Expo SecureStore, while browser previews use browser local storage.'] },
      { title: 'Login protection', paragraphs: ['The username-login service handles sign-in privately and uses keyed hashes of network addresses and normalized usernames for login protection. Expired login limiter entries are cleaned up by subsequent requests after one hour, so idle projects can retain expired entries until traffic resumes. Provider security logs and backups follow the project’s configured retention.'] },
    ],
    deletion: ['The current deletion service verifies the signed-in user and current password before deleting the Supabase Auth account. Linked public profile and leaderboard records are removed by the configured database relations. Current local gameplay is retained as guest progress, and local reset is a separate action. Provider backups can persist until their configured retention expires.'],
    steps: ['Open RailBop’s account settings and choose Delete Account.', 'Enter the current password and confirm deletion.', 'Use local reset separately if you also want to clear progress on the device.'],
    providers: ['Supabase Auth, database and Edge Functions'],
  },
};
