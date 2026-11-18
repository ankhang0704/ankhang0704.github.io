---
title: "Hotel Management"
code: "PRJ-03"
category: "backend"
status: "ACADEMIC CAPSTONE"
year: "2025"
summary: "Django monolith with server-rendered templates and SQLite for booking, inventory, cancellation, and admin workflows, plus a RAG path using HuggingFace embeddings and FAISS."
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

```
┌────────────────────────────────────────────────────────┐
│ CLIENT BROWSER / DESK WORKSTATION                      │
│ • Server-Rendered HTML Templates                       │
│ • Role-Tailored Desk Portals (Admin / Desk / Cleaning) │
└──────────────────────────┬─────────────────────────────┘
                           │ (HTTP Session Cookies + CSRF)
                           ▼
┌────────────────────────────────────────────────────────┐
│ DJANGO 5 MONOLITH RUNTIME (Python 3.12)                │
│ • Date-Based Room Inventory & Overlap Engine           │
│ • State Machine for Check-In, Booking, Cancellation   │
│ • Optimized ORM Queries (select_related / prefetch)    │
│ • transaction.atomic Blocks with select_for_update     │
└─────────────┬───────────────────────────┬──────────────┘
              │                           │
              ▼                           ▼
┌───────────────────────────┐   ┌────────────────────────┐
│ PRIMARY PERSISTENCE       │   │ AUXILIARY VECTOR RAG   │
│ • SQLite in WAL Mode      │   │ • FAISS Vector Store   │
│ • ACID Transaction Safety │   │ • HuggingFace Embeds   │
│ • Zero External DB Daemon │   │ • Local Policy Q&A Bus │
└───────────────────────────┘   └────────────────────────┘
```

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
