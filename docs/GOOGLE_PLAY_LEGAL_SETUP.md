# Google Play legal setup

Reviewed November 19, 2026 against local source. These URLs are implemented in the website. Public HTTPS availability must be checked after deployment.

## Route map

| App | Privacy | Terms | Account and data deletion |
| --- | --- | --- | --- |
| Taqwa Habit | https://uxhan-forge.vercel.app/apps/taqwa-habit/privacy-policy | https://uxhan-forge.vercel.app/apps/taqwa-habit/terms | https://uxhan-forge.vercel.app/apps/taqwa-habit/delete-account |
| UXBLOX | https://uxhan-forge.vercel.app/apps/uxblox/privacy-policy | https://uxhan-forge.vercel.app/apps/uxblox/terms | https://uxhan-forge.vercel.app/apps/uxblox/delete-account |
| RailBop | https://uxhan-forge.vercel.app/apps/railbop/privacy-policy | https://uxhan-forge.vercel.app/apps/railbop/terms | https://uxhan-forge.vercel.app/apps/railbop/delete-account |

Existing /privacy-policy, /terms, /delete-account and /support remain available. The privacy and deletion company URLs retain Taqwa Habit information and link to each app's documents.

## Publication status

All app privacy and terms pages need release-specific and legal review. They currently expose factual privacy information and support pathways. They do not represent completed privacy policies or reviewed contracts. No app is declared Google Play compliant by this work.

The website implements email links to initiate deletion requests. It has no authenticated connection to the application backends. Confirm that uxhanforge.support@gmail.com is monitored, that staff can verify ownership and execute deletion, and that requests receive completion notices. No deletion was performed during this audit.

## Source audit

### Taqwa Habit

Reviewed C:/coding/Taqwa-Habit/mobile/package.json, mobile/src/services/settingsSync.js, prayerTimes.js, location.js, diagnostics.js, backend/prisma/schema.prisma, backend/src/routes/auth.routes.js and users.routes.js.

- Account/profile fields include email, name, username, password hash, optional avatar, gender and bio.
- PostgreSQL stores worship records, activity, friends, progress, preferences, support records and device tokens.
- Synced settings include coordinates, city and country. Prayer-time requests send coordinates and calculation method to Aladhan. The old statement that location is processed entirely on device is inconsistent with this code.
- Google Mobile Ads, Expo Location, Notifications, Image Picker, SQLite and SecureStore appear in the mobile dependencies.
- DELETE /users/me authenticates the requester and deletes the user within a transaction. Audit database relations and operational records for the complete deletion scope.
- The currently published Play listing declares ads, possible collection of personal information, encryption in transit and deletion requests. Verify its no-sharing declaration against the released SDK behavior and Play's sharing definitions.
- Confirm exact ad consent behavior, SDK data categories, prayer and worship records classification, notifications provider, hosting provider, logs, backups, retention, export/access controls, target age and released build parity.
- The password reset implementation in the inspected source needs an app-team security review before making broad security assertions. This website task does not modify that implementation.

### UXBLOX

Reviewed C:/coding/uxblox/app/package.json, app/features/online/account.ts, app/features/analytics/sentry.ts, app/features/ads, and supabase/functions/delete-account/index.ts.

- Device gameplay/preferences use MMKV. Optional online features use Supabase.
- Current registration uses username/password and an internal email alias. Older docs/privacy-policy.md incorrectly says there is no login or password.
- Online profiles and submitted results feed rankings/seasons. Confirm each persisted table and publicly visible field.
- Google Mobile Ads and UMP are integrated.
- Sentry initializes when EXPO_PUBLIC_SENTRY_DSN is set, with sendDefaultPii false and tracesSampleRate zero. The inspected initializer does not itself prove a user opt-in gate. Verify startup call sites and release configuration before claiming opt-in-only diagnostics.
- The delete-account Edge Function identifies the user by JWT and deletes the Auth user. Confirm cascade migrations are deployed, local reset behavior, all linked tables, shared seasonal records and provider backups.
- Confirm actual auth providers enabled, permission manifest, ad consent and age flows, diagnostics payloads, retention, regional rights and intended audience.

### RailBop

Reviewed C:/coding/Railbop/app/privacy.tsx, app/delete-account.tsx, src/features/account/client.ts, supabase/functions/delete-account/index.ts and package.json.

- SQLite stores local progress, preferences and player data.
- Optional Supabase Auth uses username, recovery email and password. Public profiles and verified leaderboard results use account IDs, usernames, avatars, levels, stars and moves.
- Native credentials use SecureStore. Web previews use localStorage.
- Login protection hashes network identifiers/usernames and cleans expired entries on later requests. Project logs and backups have separate retention.
- Deletion requires a verified user and password, deletes the Auth user and linked profile/rankings. Device progress remains as guest progress.
- No advertising or analytics SDK was found in the inspected dependency list. Check the final native bundle, transitive SDKs and network activity before declaring their absence.
- Confirm provider configuration, deployed database cascades, allowed origins, backup retention, age targeting and operational deletion process.

## Website data

The website stores only theme preference through its own explicit localStorage code. Its form composes a mailto draft and does not send form data to an application endpoint. Google Fonts receives font requests. Next.js serves optimized images. Hosting and email providers can process request/email data. No analytics or ad SDK is integrated in the website package.

Confirm deployed Vercel log retention, any project-level analytics enabled outside the repository, email retention/access, and whether other infrastructure sets cookies. A dependency audit alone cannot prove production privacy behavior.

## Complete before publishing full legal documents

For each app, reconcile the shipped AAB, backend deployment, database migrations and third-party SDK inventory. Inventory all collected data, recipients, purposes, processing locations, optional/required collection, encryption, retention and deletion exceptions. Include sensitive/religious activity where relevant. Validate the target audience and Families settings, consent flows and advertising identifiers.

For privacy policies, approve the effective date, full data-use/sharing disclosures, security description, retention schedule, user rights, children’s handling, international processing and policy-change process.

For terms, review permitted use, account duties, ownership, user content, third-party services, availability, suspension/termination, disclaimers, liability limits, notices and governing law. Add commercial terms only if paid features exist. App-specific drafts are in LEGAL_DRAFTS.md.

## Play Console and in-app steps

1. Finalize disclosures from the shipped release and approve the legal drafts.
2. Deploy the reviewed HTML pages to the intended HTTPS domain.
3. Open every URL signed out on mobile and desktop. Check HTTP 200, SSL, worldwide access, readable text and functional request links.
4. In Play Console > App content, set each app's privacy URL. Complete Ads, target audience, app access, Data safety and deletion declarations from verified facts.
5. Register the appropriate app-specific deletion URL and test a real support request with an operator.
6. Update the in-app Privacy, Terms, Support and Deletion links. Taqwa Habit settings/privacy screen and RailBop src/config/brand need alignment. UXBLOX settings/legal content needs revision to match username accounts.
7. Reconcile the in-app deletion paths and website description with an end-to-end test account. Confirm records, backups, local saves and retained logs.
8. Repeat this review when SDKs, data flows, accounts or monetization change.

## Official references

- [User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311)
- [Prepare your app for review](https://support.google.com/googleplay/android-developer/answer/9859455)
- [Account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111)
- [Data safety declarations](https://support.google.com/googleplay/android-developer/answer/10787469)

Google requires disclosures to match actual app and third-party SDK behavior. Account-creating apps need in-app deletion and an outside-app request resource. Public pages must identify the app/developer and be accessible without login. The implemented contact flow still requires a verified operational support process.
