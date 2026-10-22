---
abstract: 'Data provenance describes how data came to be in its present form. It includes data sources and the transformations
  that have been applied to them. Data provenance has many uses, from forensics and security to aiding the reproducibility
  of scientific experiments. We present CamFlow, a whole-system provenance capture mechanism that integrates easily into a
  PaaS offering. While there have been several prior whole-system provenance systems that captured a comprehensive, systemic
  and ubiquitous record of a system’s behavior, none have been widely adopted. They either A) impose too much overhead, B)
  are designed for long-outdated kernel releases and are hard to port to current systems, C) generate too much data, or D)
  are designed for a single system. CamFlow addresses these shortcoming by: 1) leveraging the latest kernel design advances
  to achieve efficiency; 2) using a self-contained, easily maintainable implementation relying on a Linux Security Module,
  NetFilter, and other existing kernel facilities; 3) providing a mechanism to tailor the captured provenance data to the
  needs of the application; and 4) making it easy to integrate provenance across distributed systems. The provenance we capture
  is streamed and consumed by tenant-built auditor applications. We illustrate the usability of our implementation by describing
  three such applications: demonstrating compliance with data regulations; performing fault/intrusion detection; and implementing
  data loss prevention. We also show how CamFlow can be leveraged to capture meaningful provenance without modifying existing
  applications.'
authors:
- T Pasquier
- X Han
- M Goldstein
- T Moyer
- D Eyers
- M Seltzer
- J Bacon
date: '2017-09-25'
image_preview: ''
math: true
publication_types:
- paper-conference
publication: In *Symposium on Cloud Computing*, ACM.
publication_short: In *SoCC '17*
featured: false
title: Practical Whole-System Provenance Capture
image:
  caption: CamFlow architecture
  focal_point: ''
links:
- type: pdf
  url: publications/2017-socc.pdf
- type: code
  url: http://camflow.org
hugoblox:
  ids:
    doi: 10.1145/3127479.3129249
citation:
  authors:
  - Thomas Pasquier
  - Xueyuan Han
  - Mark Goldstein
  - Thomas Moyer
  - David Eyers
  - Margo Seltzer
  - Jean Bacon
  publication_date: '2017'
  conference_title: Proceedings of the 2017 Symposium on Cloud Computing
  firstpage: '405'
  lastpage: '418'
---
