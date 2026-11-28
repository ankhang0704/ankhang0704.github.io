---
title: "Hotel Management"
code: "PRJ-03"
category: "backend"
status: "ACADEMIC CAPSTONE"
year: "2025"
summary: "Django hotel reservation platform handling booking, room inventory, and role-based desk workflows, paired with local FAISS policy Q&A."
featured: true
techStack:
  - "Django 5.x"
  - "Python"
  - "SQLite + WAL"
  - "Server-Rendered"
  - "FAISS Vector RAG"
  - "HuggingFace Embeddings"
specs:
  - "Django 5 + SQLite"
  - "FAISS Vector RAG"
  - "Server-Rendered MVT"
  - "Role-Based Desk Access"
image: "/hotel-management-editorial-cover.webp"
externalHref: "https://github.com/ankhang0704/QuanLyKhachSan_AI"
externalLabel: "GitHub ↗"
canonicalPath: "/hotel-management/"
---

# Hotel Management — Academic Capstone Case Study

A comprehensive, production-grade Django academic capstone demonstrating an end-to-end hotel operations and reservation platform. It pairs a traditional, high-throughput Model-View-Template (MVT) server-rendered monolith with an auxiliary, decoupled Retrieval-Augmented Generation (RAG) assistant for resort policy intelligence.

## System Architecture & Highlights

The interactive blueprint above illustrates the multi-tier runtime and decoupled AI bus. Below is the technical breakdown of system layers:

| Layer                       | Technology & Engine              | Architectural Responsibility             | Invariant & Safety Boundary                         |
| :-------------------------- | :------------------------------- | :--------------------------------------- | :-------------------------------------------------- |
| **Tier 01: Workstation UI** | Server-Rendered HTML Templates   | Sub-50ms render, Role-Based Access       | HTTPOnly cookies, strict CSRF validation            |
| **Tier 02: Monolith Core**  | Django 5.x, Python 3.12          | Date overlap matrix & state machine      | Row locks via `select_for_update`                   |
| **Tier 03A: Primary DB**    | SQLite 3 in WAL Mode             | High-speed concurrent reads, ACID writes | Write-Ahead Logging; zero DB daemon overhead        |
| **Tier 03B: Semantic AI**   | FAISS Vector Store + HuggingFace | Local resort policy Q&A assistant        | 100% offline in-process; zero external data leakage |

## Core Architectural Pillars

### 1. Date-Based Availability Matrix

Tracks inventory at the discrete room unit and category level. Every reservation range is verified against existing reservations using range overlap constraints, completely preventing double-booking anomalies under concurrent staff workflows.

### 2. State-Machine Booking Lifecycle

A deterministic life-cycle manager coordinates reservation creation, immediate room inventory decrements, deposit tracking, check-in registration, check-out audits, and automated room status resets upon cancellations.

### 3. ORM Query Optimization

Hot administrative and front-desk dashboard queries are aggressively tuned with `select_related` for foreign keys and `prefetch_related` for multi-item billing records, completely eliminating N+1 database roundtrips.

### 4. Role-Based Desk Security

Custom view decorators enforce strict privilege separation across organizational roles:

- **System Administrator**: Tariff configurations, staff credentials, revenue reports.
- **Front Desk Reception**: Check-in, check-out, room reassignment, bill generation.
- **Housekeeping**: Real-time room readiness updates and maintenance flags.

### 5. Auxiliary FAISS Vector RAG Assistant

An independent policy retrieval pipeline encodes resort regulations, check-out policies, and amenities into local vector indices via HuggingFace sentence transformers. Desk agents query resort procedures using natural language with near-instant semantic matches.

### 6. ACID Transactions in SQLite WAL

By configuring SQLite in Write-Ahead Logging (WAL) mode alongside Django's `transaction.atomic` blocks, the system achieves rock-solid transactional reliability with zero maintenance overhead.

## Development Timeline

- **2025.10.28**: Core repository baseline established; MVT monolith initialized with models for rooms, bookings, and customer profiles.
- **2025.11.19**: Full booking workflow & atomic tests completed; inventory signal handlers and desk views verified.
- **2025.12.04**: Decoupled FAISS RAG assistant integration completed; vector similarity search integrated for resort inquiries.
