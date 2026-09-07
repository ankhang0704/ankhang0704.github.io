# The Sailing Bay Hotel Management — Portfolio Case Study

## Project identity

**Academic Capstone / Completed**

This project is a Django monolithic, server-rendered hotel booking application
backed by SQLite. Git evidence shows active development from October through
December 2025:

| Evidence | Date |
| --- | --- |
| First repository commit | 2025-10-28 |
| AI chatbot work begins | 2025-10-31 |
| `Final version` commit | 2025-11-19 |
| Groq integration added | 2025-12-04 |

The repository should be presented as a completed learning project and
academic capstone, not as a production platform.

## What the application actually demonstrates

The source and focused tests support these capabilities:

- Room types, concrete rooms, room images, and date-based inventory.
- Availability search and a booking lifecycle for reservations.
- Booking cancellation with inventory restoration.
- Authenticated user profile and booking history workflows.
- Staff/admin dashboard summaries and check-in/check-out actions.
- A hotel assistant built around retrieval-augmented generation (RAG).

The application also contains services, promotions, gallery, and blog content
pages. These are content features, not evidence of a broader commerce or
payment system.

## Architecture and engineering concepts

The application follows Django's MVT shape: URL configuration selects views,
views coordinate model/ORM work, and server-rendered templates return HTML.
The main domain relationships connect room types to rooms and images, inventory
to room types and dates, and bookings to users and concrete rooms.

The booking flow uses `transaction.atomic` and `select_for_update` around the
booking conflict check. A booking signal decrements inventory for its stay
range, while cancellation restores the affected inventory rows. These are
useful examples of consistency concepts in a small academic implementation;
they are not a system-wide performance or concurrency guarantee.

The code also contains targeted `select_related` usage. It should be described
as a concrete ORM technique used in selected queries, not as proof of global
query optimization.

## AI architecture

The documented RAG path is:

```text
hotel knowledge base
    → HuggingFace embeddings
    → FAISS retrieval
    → retrieved context
    → LLM response
```

There are two separate implementation paths:

- **Groq cloud integration:** LangChain `ChatGroq`, configured with
  `GROQ_API_KEY`.
- **Optional local implementation:** LangChain `LlamaCpp` with a Phi-4 GGUF
  model supplied outside the repository.

These paths are alternatives selected by their respective integration code.
There is no automatic cloud/local fallback, no claim of asynchronous
inference, and no verified production AI runtime or performance result.

## Ownership and AI-assisted engineering

### Student Project Owner / Maintainer

The student project owner/maintainer is responsible for:

- requirements and capstone direction;
- product and feature decisions;
- testing and acceptance;
- academic presentation and delivery;
- directing AI-assisted development.

### AI-assisted engineering

AI assistance supported implementation and refactoring, architecture proposals,
debugging and testing assistance, and documentation. This wording describes
the workflow; Git author identity is not treated as proof of individual
implementation authorship.

## Baseline evidence

The repository contains six focused Django tests covering booking creation and
inventory decrement, overlap rejection, cancellation restoration, user
ownership, missing chatbot input, and sanitized chatbot failure behavior. The
tests mock the chatbot boundary and do not call a real external AI provider.

The verification commands are:

```text
python manage.py check
python manage.py test
```

This is a meaningful baseline for the academic project, not comprehensive test
coverage.

## Safe claim matrix

| CLAIM | EVIDENCE | ALLOWED WORDING |
| --- | --- | --- |
| Project status | Git history and project docs | “Completed academic Django capstone.” |
| Timeline | Git commits from 2025-10-28 to 2025-12-04 | “Developed across October–December 2025.” |
| Application shape | Django settings, URL/view/template structure | “Django monolith with server-rendered templates.” |
| Database | `config/settings.py` | “Uses SQLite.” |
| Booking domain | `booking` models/views/signals and tests | “Implements room availability, reservations, cancellation, and inventory changes.” |
| Authentication | Django auth/allauth configuration and user views | “Includes authenticated profile/history flows and staff/admin access.” |
| ORM engineering | Booking code and selected `select_related` queries | “Demonstrates `transaction.atomic`, `select_for_update`, and selected ORM relationship loading.” |
| RAG design | `chatbot` pipelines, knowledge base, FAISS/HuggingFace configuration | “Uses hotel knowledge retrieval with HuggingFace embeddings and FAISS before LLM response generation.” |
| AI integrations | Groq and local LlamaCpp modules | “Provides separate Groq cloud and optional local LlamaCpp/Phi-4 paths.” |
| Test evidence | Six focused Django tests | “Has a six-test core behavior baseline.” |
| Ownership | Project workflow and capstone context | “Student Project Owner / Maintainer with AI-assisted engineering.” |

## Do not claim

| DO NOT CLAIM | REASON |
| --- | --- |
| PostgreSQL | The configured and verified database is SQLite. |
| B-Tree Index Scan | No EXPLAIN output or index-plan evidence exists. |
| 95.7% latency reduction | No reproducible benchmark evidence exists. |
| ~18 ms latency | No valid latency measurement is part of the evidence. |
| 1 query | No query-count artifact supports the claim. |
| Production-scale | No load, deployment, or scale evidence exists. |
| Production-ready | This is an academic capstone, not a production deployment. |
| Comprehensive test coverage | Only six focused baseline tests exist. |
| Payment system | No payment processing implementation exists. |
| Security-hardened application | Cleanup was performed, but this is not a security certification or hardened production system. |
| Automatic cloud/local fallback | The Groq and local paths are separate; fallback is not implemented. |
| Async inference | The chatbot path uses synchronous invocation. |
| Verified production AI runtime | Real external AI calls and model quality are not part of the test evidence. |

## Visual inventory

No application screenshots are tracked for the booking/search page, room-detail
UI, admin dashboard, or chatbot conversation. Those categories are therefore
`NEED_RECAPTURE` if a portfolio presentation needs UI proof. No screenshot is
being invented or captured solely to make this case study look complete.

| Category / asset group | Status | Portfolio use |
| --- | --- | --- |
| `media/room_types_gallery/*.jpg` | `READY` | Supporting room-detail/content imagery; not UI evidence. |
| `media/service_gallery/*.jpg` | `READY` | Supporting hotel/service imagery; optional secondary visual. |
| `media/blog/*.jpg` and `media/promotions/*.png` | `READY` | Content-page examples only; do not present as system screenshots. |
| `media/edr_project/erd_full.svg` | `STALE` | Generated ERD was not re-rendered or reconciled during closure; use the canonical Mermaid architecture instead. |
| Booking/search UI screenshot | `NEED_RECAPTURE` | No tracked screenshot. |
| Room-detail UI screenshot | `NEED_RECAPTURE` | Existing room photos are not the rendered UI. |
| Admin dashboard screenshot | `NEED_RECAPTURE` | No tracked screenshot. |
| Chatbot conversation screenshot | `NEED_RECAPTURE` | No tracked screenshot and no real-provider evidence. |
| Removed profile/duplicate media | `DO_NOT_USE` | Removed during repository cleanup because it was unnecessary or potentially personal/duplicate content. |

The remaining generated/duplicate assets that were not suitable for portfolio
proof were either removed during Phase 2 or, for the retained ERD, explicitly
labelled `STALE` rather than presented as current architecture evidence.

## Limitations and closure

The project remains SQLite-only, has no payment system or production deployment,
and does not provide benchmarked performance, broad test coverage, or verified
external-AI quality. The optional local model and generated FAISS index are not
tracked. Historical Git commits may contain removed development credentials;
their active status is unknown and they must not be reused. This closure does
not rewrite Git history.

For the canonical technical record, see:

- [Project source of truth](PROJECT_SOURCE_OF_TRUTH.md)
- [Architecture](ARCHITECTURE.md)
- [Engineering notes](ENGINEERING_NOTES.md)
