---
title: "FM Dictionary"
code: "PRJ-01"
category: "mobile"
status: "PRODUCTION · APP STORE"
year: "2026"
summary: "Flutter FM vocabulary-learning app with 1,847 terms, a local-first learning core, documented Firebase boundaries, Cloudflare proxy, and pronunciation/STT flows."
featured: true
techStack:
  - "Flutter"
  - "Dart"
  - "Hive"
  - "Cloudflare Workers"
  - "Firebase"
  - "STT / Audio"
specs:
  - "1,847 Terms"
  - "v1.1.4 Production"
  - "Hive Offline (< 5ms)"
  - "Cloudflare STT Proxy"
  - "27 Unit/Widget Tests"
image: "/fm-dictionary-editorial-cover.webp"
externalHref: "https://fm-dictionary.pages.dev/"
externalLabel: "Website ↗"
secondaryExternalHref: "https://apps.apple.com/us/app/fm-dictionary/id6774868353"
secondaryExternalLabel: "App Store ↗"
canonicalPath: "/fm-dictionary/"
---

# FM Dictionary — Architectural Case Study

A specialized, production-ready vocabulary learning application tailored for the Facilities Management (FM) discipline on iOS and Android. Built with Flutter, it balances zero-latency local-first search with authenticated cloud services for edge speech processing and progress backup.

## Key System Metrics

- **1,847 Specialized FM Terms**: Comprehensive terminology covering building services, HVAC, MEP, safety regulations, and asset life-cycle management.
- **Sub-5ms Lookup Latency**: Zero-dependency local binary search powered by pre-compiled Hive boxes.
- **50 Benchmark Scenarios**: Standardized test modules for domain competency assessment.
- **27 Automated Tests**: Verified test invariants safeguarding data parsing, Leitner intervals, and edge proxy error recovery.

## 3-Tier Architectural Hierarchy

The interactive blueprint above details the three operational layers. Below is the structural summary of each tier's invariants and boundaries:

| Tier                        | Runtime & Technology         | Primary Invariant                     | Error & Fallback Boundary                |
| :-------------------------- | :--------------------------- | :------------------------------------ | :--------------------------------------- |
| **Tier 01: Client Runtime** | Flutter + Dart, Hive Boxes   | 100% Offline, sub-5ms search          | Bundled fallback database                |
| **Tier 02: Edge Gateway**   | Cloudflare Workers, Edge CDN | Upstream secret cloaking, TTFB < 50ms | Dynamic audio provider failover          |
| **Tier 03: Persistence**    | Firebase Auth & Firestore    | Non-blocking async sync               | Local write queue (Eventual Consistency) |

### 1. Client Runtime (Flutter + Dart) — 100% Offline Capable

- **Hive Binary Storage**: The full dictionary dictionary schema and 50 benchmark evaluations reside in local binary boxes on the device, eliminating initial network loading latency.
- **Spaced Repetition Engine**: An in-memory Leitner state machine tracks interval progression, recall difficulties, and quiz streaks without waiting on cloud responses.
- **Rule-Based Phonetic Evaluation**: Compares learner acoustic transcripts directly against domain pronunciation phonetic rubrics on-device to deliver immediate feedback.

### 2. Edge Gateway (Cloudflare Workers) — Authenticated Proxy

- **Edge Audio Caching**: Commonly requested pronunciation audio files are cached at edge nodes worldwide, reducing egress costs and response delays.
- **API Key Cloaking**: Mobile clients never embed upstream credentials; all third-party speech endpoints are gated and rate-limited through Cloudflare Workers.
- **Graceful Fallback**: Automatically redirects audio synthesis requests to secondary providers if the primary endpoint experiences throttling.

### 3. Persistence Boundary (Firebase) — Async & Non-Blocking

- **Anonymous Authentication**: Users engage immediately without an onboarding gate; guest states can be promoted to permanent email credentials at any time.
- **Firestore Lazy Sync**: User bookmarks, custom flashcard tags, and mastery telemetry sync lazily when reliable network connectivity is established.
- **Realtime Leaderboards**: Lightweight Realtime Database (RTDB) counters track cohort learning consistency without impacting core dictionary interaction.

## Engineering Boundaries & Invariants

1. **Zero-Dependency Core**: All search, reading, and self-assessment features function reliably in airplane mode or unstable network conditions.
2. **Atomic Schema Updates**: Remote content updates are validated against a local temporary rollback box before staging, guaranteeing zero corruption during partial downloads.
3. **Strict Cloud Decoupling**: Complete outage of Firebase or external APIs will never interrupt or freeze the local dictionary interface.
4. **Privacy-Preserving Telemetry**: No commercial trackers or ad networks are bundled; telemetry is strictly confined to user-consented learning progress.

## Release & Milestone Timeline

- **2026-03-22 (Git `6cd2c76`)**: Core offline learning foundation established with flashcards, Hive persistence, and text-to-speech.
- **2026-05-19 (Git `a6b69ed`)**: Speech architecture transition from heavy on-device model to authenticated Cloudflare edge proxy boundaries.
- **2026-05-31 (Git tag `v1.0.0`)**: Official production launch on App Store with 1,847 bundled FM terms.
- **2026-06-05 (Git tag `v1.1.0`)**: Social learning enhancements, cohort leaderboards, and accessible screen reader accommodations released.
- **2026-09-06 (Release `v1.1.4`)**: Production release on App Store & Google Play — offline sync stabilization, advanced search, and accessibility enhancements.
