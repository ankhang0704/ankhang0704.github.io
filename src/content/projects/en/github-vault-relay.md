---
title: "GitHub Vault Relay"
code: "PRJ-02"
category: "tools"
status: "OPEN SOURCE · RELEASED"
year: "2026"
summary: "Mobile-first Obsidian plugin syncing vaults directly with GitHub over HTTPS APIs—no Git CLI or relay server needed."
featured: true
techStack:
  - "TypeScript"
  - "Obsidian API"
  - "GitHub REST API"
  - "Git Data API"
  - "Mobile-First"
specs:
  - "Obsidian Community Plugin"
  - "Direct HTTPS Tree Sync"
  - "Zero Intermediate Relay"
  - "Local PAT Storage"
image: "/github-vault-relay-cover.webp"
externalHref: "https://community.obsidian.md/plugins/github-vault-relay"
externalLabel: "View on Obsidian ↗"
canonicalPath: "/github-vault-relay/"
---

# GitHub Vault Relay — Obsidian Community Plugin

A lightweight, deterministic synchronization bridge connecting local Obsidian markdown vaults to remote GitHub repositories across iOS, Android, macOS, Windows, and Linux. By communicating directly through the GitHub Git Data REST API, it provides bulletproof note synchronization on mobile devices without requiring binary Git installations or terminal environments.

## Core Architectural Metrics

- **6-Stage Deterministic Sync Pipeline**: An explicit, serialized sync lifecycle preventing race conditions and silent note corruption.
- **Direct HTTPS API Communication**: Leverages Obsidian's native `requestUrl()` network layer directly against GitHub endpoints.
- **Zero Intermediate Servers**: Vault contents travel strictly between the user's personal device and their private GitHub repository.
- **100% User-Directed Execution**: Eliminates unexpected automatic background sync collisions while preserving manual conflict review.

## 6-Stage Deterministic Sync Pipeline

The interactive pipeline diagram above details each step's inputs, outputs, and invariants. The table below outlines the sequential lifecycle:

| Stage                  | Operation                              | Primary Focus           | Invariant Guarantee                            |
| :--------------------- | :------------------------------------- | :---------------------- | :--------------------------------------------- |
| **01. Inventory**      | Vault File Scan & SHA-256 Map          | Physical File Discovery | Read-only; zero disk modifications             |
| **02. Reconciliation** | Three-Way Diff (Local / Base / Remote) | Conflict Classification | Dual diverged notes preserved in review bucket |
| **03. Pull Stage**     | Transactional Ingestion                | Safe Remote Ingestion   | Interrupted pull rolls back via journal        |
| **04. Verification**   | Post-Pull Disk Integrity Assertion     | Hash Validation         | Halts on hash mismatch or truncation           |
| **05. Push Stage**     | Atomic Git Tree & Commit Creation      | Git Data API Trees      | Atomic tree creation; fast-forward only        |
| **06. State Advance**  | Baseline `state.json` Update           | Cursor Finalization     | Occurs strictly after verified remote push     |

### Stage 01: Inventory (Discovery & Tree Traversal)

Recursively enumerates all user-visible markdown files and attachments within the designated Obsidian Vault. Generates an in-memory SHA-256 hash map representing the exact physical state of the client file system.

### Stage 02: Reconciliation (Three-Way State Comparison)

Performs an independent three-way comparison between the local in-memory map, the recorded baseline `state.json`, and the remote GitHub branch tree object. Categorizes each file into unambiguous sync states:

- `LOCAL_ONLY`: New note created locally, queued for initial upstream commit.
- `REMOTE_ONLY`: New note committed upstream, queued for safe local ingestion.
- `LOCAL_CHANGED`: Local note modified while remote remains at baseline.
- `REMOTE_CHANGED`: Remote note updated while local note remains unmodified.
- `POTENTIAL_CONFLICT`: Both local and remote versions diverged from the baseline. Preserves both copies into a review bucket rather than overwriting.
- `UNCHANGED`: Content hashes match exactly across all three dimensions.

### Stage 03: Pull Stage (Verified Remote Ingestion)

Downloads modified remote blobs with an active transaction journal. If a network interruption occurs, changes are safely rolled back to preserve vault consistency.

### Stage 04: Verification (Post-Pull Integrity Invariant)

The `UnifiedSyncEngine` immediately re-scans the local file system post-pull to assert that the physical files on disk exactly match the remote commit tree expectations before allowing subsequent stages.

### Stage 05: Push Stage (Atomic Git Commit & Tree Push)

Creates missing blobs on GitHub via the Git Data API, constructs a new tree object linked to the remote parent commit SHA, and generates a single atomic Git commit.

### Stage 06: State Advance (Atomic Baseline Cursor Advance)

Upon confirmed receipt of the upstream commit acknowledgment, `StorageManager` advances the local cursor in `state.json`.

## Security Boundaries & Operational Invariants

1. **Strictly Scoped Repository Target**: Operates exclusively against one user-selected repository, branch, and vault folder at any given moment.
2. **Direct HTTPS Only**: Eliminates any proxy, third-party intermediary, or telemetry telemetry server.
3. **Secret Storage Isolation**: Personal Access Tokens (PAT) are stored exclusively using Obsidian's secure `SecretStorage` API and scrubbed from all diagnostic logs.
