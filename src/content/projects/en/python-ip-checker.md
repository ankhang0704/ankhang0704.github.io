---
title: "Python IP Checker"
code: "PRJ-05"
category: "tools"
status: "INTERNAL IT UTILITY"
year: "2026"
summary: "Multi-threaded Python utility for batch subnet sweeps, service port checks, and CSV audit exports."
featured: false
techStack:
  - "Python 3"
  - "Socket API"
  - "Subnet Scanner"
  - "Threading"
  - "CSV Export"
specs:
  - "Python 3 Socket/Ping"
  - "Subnet Scanner"
  - "CSV Export"
image: "/python-ip-checker-cover.webp"
externalHref: "https://github.com/ankhang0704/python-ip-checker"
externalLabel: "GitHub ↗"
canonicalPath: "/python-ip-checker/"
---

# Python IP Checker — Practical IT Utility

A pragmatic Python utility designed to replace tedious, manual IP reachability checks across enterprise network subnets. Developed directly in response to hands-on IT support requirements in hospital and corporate infrastructures.

## Execution Pipeline

| Stage                    | Module / Primitive        | Operation                                     | Output / Guarantee                                |
| :----------------------- | :------------------------ | :-------------------------------------------- | :------------------------------------------------ |
| **01. Target Parsing**   | Python `ipaddress` / CLI  | Expands CIDR subnets or IP lists safely       | Normalized host queue without manual entry errors |
| **02. Concurrent Probe** | Worker Threading + Socket | Parallel ICMP ping & TCP socket checks        | Probes DNS, HTTP, SMB, RDP ports concurrently     |
| **03. Audit Export**     | Python `csv` + Timestamps | Aggregates online/offline states & open ports | Timestamped CSV log for infrastructure inventory  |

## Key Features

- **Concurrent Subnet Scanning**: Uses lightweight worker threads to execute socket probes and ICMP ping sweeps simultaneously across office and clinical VLAN ranges.
- **Port Reachability Verification**: Rapidly checks open ports for common operational services (DNS, HTTP, SMB, RDP) to pinpoint workstation or printer connectivity issues.
- **Automated CSV Reporting**: Generates timestamped audit logs for network inventory reconciliation and routine IT maintenance records.
