# Internal legal drafts — pending review

Drafted November 19, 2026. These drafts are internal working documents and have no approved effective date. Use the source-backed sections in data/legal.ts with the following app-specific review notes to prepare final policies. All twelve company/app legal routes need review before being submitted as complete Google Play documents.

## Taqwa Habit privacy draft

Uxhan Forge develops Taqwa Habit for prayer, Quran, Azkar and habit tracking. The draft data inventory covers account identifiers, profile data, worship and social activity, location, preferences, notifications, diagnostics and advertising data. Purposes are authentication, progress tracking/sync, prayer-time calculations, social rankings, reminders, support and advertising. Service providers include the app backend, PostgreSQL, Aladhan and Google Mobile Ads. Finalize all SDK recipients, exact collection, lawful processing, encryption configuration and storage regions from the release.

The security section should describe verified access controls and transport protection without guaranteeing security. The retention section needs per-category active-data, log and backup periods. Deletion should explain the authenticated app action and support email, identity checks, cascaded data and retention exceptions. Children’s treatment must agree with Play Console audience settings. International processing and applicable access, correction, withdrawal, complaint and deletion rights require review for offered regions. Changes should be published with an approved updated date.

## UXBLOX privacy draft

Uxhan Forge develops UXBLOX as a block puzzle game with device saves and optional online rankings. Describe MMKV local saves, Supabase usernames and credential authentication, internal email aliases, online identifiers, submitted results and public ranking fields. Describe Google Ads/UMP and Sentry only as configured in the actual release. The old no-password and opt-in diagnostics wording needs correction or code evidence.

Finalize consent controls, diagnostics payloads, deletion/local reset scope, provider retention, storage regions, public profiles, age targeting and user rights. Explain the JWT-authenticated deletion function and support request process after deployment tests. Include security practices, international processing and an approved policy-change date.

## RailBop privacy draft

Uxhan Forge develops RailBop with offline SQLite gameplay and optional Supabase accounts. Describe username, recovery email, credentials, public avatar/account ID, verified level/star/move results, SecureStore native sessions, browser session storage and login-protection hashes. Explain isolated local saves and lack of cloud progress merging. Distinguish deletion of online account/profile/results from local reset and backups.

Verify database cascades, hashing behavior for each endpoint, hosting logs, expiry cleanup, retention, regions, actual SDK/permission inventory, target audience and user rights. Finalize security and international processing sections, support process and effective/update dates.

## Terms draft for each app

Use each app’s name and factual product description. Submit the following clauses for legal review with app-specific wording:

- Acceptance and scope of use, including audience eligibility.
- Permission to use the software and published content subject to applicable conditions.
- Responsible use, including preventing unauthorized access, service disruption, cheating and misuse of rankings.
- Accurate account information and protection of credentials where accounts are used.
- Developer ownership of software/artwork and appropriate treatment of user-provided content.
- Provider terms for integrated third-party services.
- Availability, maintenance, changes, suspension and account termination.
- Appropriate disclaimers and liability limitations reviewed for offered jurisdictions.
- User notices, updated terms, support and dispute handling.

Taqwa Habit requires review of worship-related accuracy and user records, synced profiles, advertising and social features. UXBLOX requires review of rankings, ads and virtual rewards. RailBop requires review of optional accounts, verified rankings, offline progress and cosmetics. Confirm monetization before adding purchase or subscription clauses. No governing law, jurisdiction, subscription price, refund policy, deletion deadline or minimum age is approved by this draft.
