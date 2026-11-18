---
title: "Python IP Checker"
code: "PRJ-05"
category: "tools"
status: "INTERNAL IT UTILITY"
year: "2026"
summary: "Practical Python IT utility for batch IP checking instead of checking addresses manually one by one."
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
canonicalPath: "/projects/"
---

# Python IP Checker — Practical IT Utility

A pragmatic Python utility designed to replace tedious, manual IP reachability checks across enterprise network subnets. Developed directly in response to hands-on IT support requirements in hospital and corporate infrastructures.

## Key Features

- **Concurrent Subnet Scanning**: Uses lightweight worker threads to execute socket probes and ICMP ping sweeps simultaneously.
- **Port Reachability Verification**: Rapidly checks open ports for common services (DNS, HTTP, SMB, RDP).
- **Automated CSV Reporting**: Generates timestamped audit logs for network inventory reconciliation.
