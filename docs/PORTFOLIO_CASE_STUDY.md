# FM Dictionary — Portfolio Case Study

This is an evidence pack, not marketing copy. Claims are limited to the repository, verification commands and explicitly identified external evidence.

Evidence labels used below: `CODE VERIFIED`, `TEST VERIFIED`, `STORE VERIFIED`, `HISTORICAL MANUAL ACCEPTANCE`, `OWNER CONFIRMED`, `NOT VERIFIED`.

## Project summary

**One line:** FM Dictionary is a Flutter vocabulary-learning app for Facility Management terminology.

**Problem and users:** The product packages FM terminology into dictionary lookup, spaced review, quizzes, tests and progress tracking for people learning or working with Facility Management vocabulary. The product purpose and learning flows are `CODE VERIFIED`; user research and market claims are `NOT VERIFIED`.

**Status:** The repository is an active codebase at app version `1.1.0+9`. The latest Git tag is `v1.1.0`. Phase 3 adds documentation only and does not bump the app version.

**Platform and release status:** Android and iOS are the primary configured targets (`CODE VERIFIED`). Android has no verified signed production artifact. Codemagic contains a tag-triggered iOS/TestFlight workflow (`CODE VERIFIED`), but TestFlight, App Store and Google Play publication are not verified. Exact public version, release date, store rating, downloads and supported device list therefore require `EXTERNAL EVIDENCE REQUIRED`.

## Verified timeline

| Date | Evidence | Milestone |
| --- | --- | --- |
| 2026-03-22 | Git `6cd2c76` | First meaningful development: flashcards, Hive and TTS |
| 2026-04-13 | Git `85c5e79`, `71799db` | Provider refactor |
| 2026-05-19 | Git `a6b69ed` | Migration from the local Whisper plan to online speech APIs |
| 2026-05-31 | Git tag `v1.0.0` | First explicit release tag |
| 2026-06-03 | Git tags `v1.0.6`–`v1.0.8` | Release/fix sequence |
| 2026-06-05 | Git tag `v1.1.0` | Global group leaderboard and UI fixes |
| 2026-09-06 | Phase 2 baseline commit `f59332b` | Production cleanup and canonicalization completed; Phase 3 is documentation-only |

The Git timeline is repository evidence. It is not evidence that a build was published to a store.

## Actual role

### Maintainer / Product Owner

- Product idea and problem definition.
- Requirements and scope.
- UX and product decisions.
- Directing AI agents.
- Manual testing and acceptance.
- Product and release decisions.

### AI-assisted engineering

- Architecture exploration.
- Implementation and refactoring.
- Automated tests.
- Debugging and audits.
- Documentation drafting.

The repository does not prove that the maintainer personally typed or independently designed every implementation detail. Git author metadata is not used as authorship proof.

## Verified technical stack

The active implementation uses:

- Flutter and Dart.
- Provider/`ChangeNotifier` for UI state, with selected `ProxyProvider` wiring.
- GetIt for selected service registrations; direct construction also remains in parts of the codebase.
- Hive and SharedPreferences for local persistence.
- Firebase Auth, Cloud Firestore and Realtime Database.
- Cloudflare Workers as the canonical authenticated proxy.
- `record` and `permission_handler` for microphone capture and permission handling.
- External speech providers through the proxy: Azure Speech, Groq Whisper and Gemini.
- A local rule-based `PronunciationScorer`.
- `flutter_tts` for text-to-speech and local notification scheduling.

These are stack facts, not claims that every dependency is a separately delivered product feature.

## Architecture

The app is feature-oriented Flutter code: screens and providers are under `lib/features`, shared infrastructure is under `lib/core`, and models/services are under `lib/data`. Navigation uses `MaterialApp.onGenerateRoute` plus a five-tab `IndexedStack` shell. Startup initializes Hive/local content, Firebase, TTS, Auth, sync and local notifications before `runApp`.

The implementation is not strict Clean Architecture. Provider/feature code and service construction cross some boundaries. The complete evidence-backed diagrams are in [ARCHITECTURE.md](ARCHITECTURE.md): overall system, local content update, Auth/Firestore sync, pronunciation/STT and external-service boundaries.

## Key engineering areas

### 1. Local-first dictionary and learning data

Bundled dictionary and test JSON are imported into Hive. Lookup, saved words, history, flashcards, quizzes, tests, roadmap and much of progress handling have local paths. This is `CODE VERIFIED`; local scorer tests and content replacement tests add `TEST VERIFIED` evidence. It is local-first for those flows, not full offline-first.

Evidence: `lib/data/services/database/`, `lib/features/learning/`, `assets/data/`, [PROJECT_SOURCE_OF_TRUTH.md](PROJECT_SOURCE_OF_TRUTH.md).

### 2. Safe content replacement

Authenticated content updates go through Cloudflare, validate non-empty and unique word IDs, stage a backup of the old dictionary, replace the Hive box, verify the result and restore on failure or interrupted startup. The backend accepts both canonical `version` and legacy `verison` keys for compatibility. This is `CODE VERIFIED` with two regression tests in `test/database_service_test.dart`.

### 3. Local/cloud progress boundaries

Firebase Auth supports email/password, Google and Apple. Firestore stores user progress and merges timestamped local/cloud records; the cloud write uses a Firestore batch, while Hive writes remain separate. RTDB supplies leaderboard/presence paths. Firestore group reads are membership-aware, but the RTDB group marker is client-writable, so private-group authorization is not claimed. This is `CODE VERIFIED`/`PARTIAL`, not a claim of a fully authoritative social backend.

### 4. Canonical Cloudflare proxy and provider fallback

`ApiProxyService` sends an authenticated Firebase ID token to the Cloudflare Worker. The Worker verifies JWT signature/claims, applies a KV-backed rate limit and routes speech, content and AI requests. Speech falls back Azure → Groq → Gemini. Provider secrets are Worker environment secrets. The public health endpoint returned HTTP 200 during the Phase 2 live probe (`TEST VERIFIED` at that verification time). KV increment is not globally atomic, token revocation is not checked and CORS remains wildcard.

### 5. Pronunciation feedback

The app records temporary WAV audio, sends it to the authenticated proxy for transcription, deletes the local temporary file after success/error and scores the returned transcript locally with a rule-based scorer. Eight scorer tests pass. Provider-side audio retention/deletion and end-to-end device speech behavior are `NOT VERIFIED`.

## Product facts

| Fact | Current evidence | Evidence status |
| --- | --- | --- |
| Dictionary terms | 1,847 records in `assets/data/fm_dictionary.json` | `CODE VERIFIED`, measured snapshot |
| Bundled test content | 50 records in `assets/data/fm_tests.json` | `CODE VERIFIED`, measured snapshot |
| Content version | `1.0.1` in both bundled JSON files | `CODE VERIFIED` |
| App version | `1.1.0+9` in `pubspec.yaml` | `CODE VERIFIED` |
| Automated Flutter tests | 27 tests passed in the Phase 2 verification run | `TEST VERIFIED` |
| Authentication methods | Email/password, Google and Apple | `CODE VERIFIED`; integration unverified |
| Local/cloud boundary | Local learning paths plus network-dependent Auth, sync, social, updates and speech | `CODE VERIFIED` |
| Proxy | Cloudflare Worker is canonical; old Vercel runtime was removed | `CODE VERIFIED`; health probe `TEST VERIFIED` |
| Public store publication | No authoritative App Store, Google Play or TestFlight listing was identified from available evidence | `NOT VERIFIED`; `EXTERNAL EVIDENCE REQUIRED` |
| Supported devices | Android/iOS project configuration exists; exact device matrix and public compatibility are not verified | `CODE VERIFIED` for targets, `NOT VERIFIED` for store support |
| Privacy disclosure | Repository contains Vietnamese privacy/terms documents updated 2026-09-06; public store disclosure is not verified | `CODE VERIFIED` locally, `NOT VERIFIED` publicly |

## Challenges and trade-offs

- Local-first learning improves availability and immediate writes, but Firebase initialization and network-dependent features mean the product is not fully offline-first.
- Hive replacement needs backup/validation because a bad remote payload must not erase the local dictionary.
- A proxy keeps provider secrets out of the client and centralizes fallback, while introducing provider/network dependency, wildcard CORS, non-atomic KV limiting and unverified provider retention.
- Firestore and RTDB serve different workloads. The current client-writable RTDB membership marker is a known authorization boundary, not proof of private groups.
- External STT is used for transcription while pronunciation scoring remains local and deterministic; this avoids presenting the score as an AI-generated certification.

## Limitations

- Not full offline-first: Auth, sync, social, content update and online speech require connectivity.
- Online speech depends on network and external provider availability.
- The generic Cloudflare AI route has no active Flutter product caller and is not claimed as an active assistant feature.
- Android production signing/artifact evidence is unavailable in this environment.
- App Store, Google Play and TestFlight public release evidence is unavailable.
- RTDB group access is not an authoritative Firestore-membership guarantee.
- Local Hive/SharedPreferences data is not encrypted by the current source.
- Provider-side audio retention/deletion is outside repository evidence.
- No performance benchmark, WCAG audit or legal review result is available.

## Portfolio-safe claims

| CLAIM | EVIDENCE | WORDING ALLOWED |
| --- | --- | --- |
| FM vocabulary-learning product for Facility Management | Flutter screens, bundled content and learning services | “FM Dictionary is a Flutter app for learning Facility Management terminology.” |
| 1,847 terms and 50 bundled tests | Measured current JSON snapshots | “The current repository snapshot contains 1,847 terms and 50 test items.” |
| Local persistence and state architecture | Provider/ChangeNotifier, selected GetIt, Hive/SharedPreferences source | “The app uses Provider-based UI state and Hive/SharedPreferences local persistence.” |
| Firebase integration | Auth, Firestore and RTDB source/config/rules | “The code integrates Firebase Auth, Firestore progress sync and RTDB social data, with documented boundaries.” |
| Canonical Cloudflare proxy | Proxy config, Worker source and Phase 2 health probe | “Speech/content requests use a canonical Cloudflare Worker proxy; the recorded probe returned HTTP 200.” |
| Pronunciation flow | Recording/proxy/provider code plus 8 scorer tests | “The app combines external speech-to-text fallback with a local rule-based pronunciation scorer.” |
| Safe content replacement | Database service and 2 regression tests | “Content replacement validates and stages old data so failed updates can restore the local dictionary.” |
| Automated verification | `flutter analyze`, 27 Flutter tests, Worker type-check and Firebase rules dry-run | “Those checks passed in the documented verification environment.” |
| Product ownership and engineering workflow | Maintainer workflow and repository evidence | “The product was maintained through a product-owner-led, AI-assisted engineering workflow.” |

## Do not claim

| DO NOT CLAIM | REASON |
| --- | --- |
| App Store, Google Play or TestFlight public release, current public version or downloads | No store evidence was verified; Codemagic configuration is not publication proof |
| Android production availability | No signed Android production artifact or store listing was verified |
| Full offline-first support | Cloud, social, content-update and speech paths require network |
| Firebase Guest, realtime chat or local Whisper model | Not active in current source |
| Generic AI assistant as an active user feature | Cloudflare route exists, but no active Flutter caller was found |
| Private-only groups or authoritative RTDB membership security | The RTDB marker is client-writable |
| Encrypted local storage, absolute privacy, provider-side audio deletion or complete account erasure | Current source does not prove these guarantees |
| WCAG compliance, performance results or production scale | No corresponding audit or measurement exists |
| Active Vercel fallback | The Vercel runtime was removed in Phase 2 |
| That the maintainer personally wrote or designed the entire implementation | Repository evidence supports AI-assisted engineering, not line-by-line authorship |
| “No analytics or telemetry” | Android directly declares Firebase Analytics; no explicit Dart analytics API was found, but runtime collection is not independently verified |

## Portfolio visual pack

No product UI screenshots are tracked in the repository. Do not use generated or inferred screenshots as evidence.

| Asset/evidence | Status | Use |
| --- | --- | --- |
| `assets/icons/app_icon.png`, `icon_rounded.png`, `icon_transparent.png` | Ready as branding assets | Hero icon/brand mark, not product UI evidence |
| iOS/Android splash and launcher resources | Ready as platform assets | App identity only |
| `web/icons/Icon-*.png` and `web/favicon.png` | Not ready for portfolio product evidence | They include Flutter starter branding and do not prove a current web product experience |
| Dictionary/search UI | Needs maintainer capture | Capture from a current verified build |
| Learning/pronunciation UI | Needs maintainer capture | Capture only after the corresponding device/manual flow is accepted |
| Progress/social UI | Needs maintainer capture | Capture only if the current runtime and account/group behavior are accepted |
| Architecture diagram | Ready | Use Mermaid diagrams in [ARCHITECTURE.md](ARCHITECTURE.md) |
| Pronunciation/request-flow diagram | Ready | Use the pronunciation/STT and external-boundary diagrams in [ARCHITECTURE.md](ARCHITECTURE.md) |

## Outstanding operational items

These items are kept visible and are not hidden to force a portfolio pass:

- Revoke/rotate the historical tracked iOS distribution private key if that has not already happened. Removing it from the current tree does not prove it is safe.
- Produce Android release signing/build evidence with a valid protected keystore.
- Perform post-remediation device/manual verification for changed account deletion, content replacement, security rules and proxy behavior.
- Decide on authoritative RTDB/private-group membership enforcement before making stronger social privacy claims.
- Complete legal/store review before public release or store-specific privacy claims.

Portfolio material is ready only when it uses the allowed wording above and labels store/public-release facts as unverified.
