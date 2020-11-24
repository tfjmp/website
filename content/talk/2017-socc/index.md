+++
publishDate = 2017-01-01T00:00:00  # Schedule page publish date.

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date = "2017-09-25T10:20:00"
draft = false

title = "Practical Whole-System Provenance Capture"
abstract = "Data provenance describes how data came to be in its present form. It includes data sources and the transformations that have been applied to them. Data provenance has many uses, from forensics and security to aiding the reproducibility of scientific experiments. We present CamFlow, a whole-system provenance capture mechanism that integrates easily into a PaaS offering. While there have been several prior whole-system provenance systems that captured a comprehensive, systemic and ubiquitous record of a system’s behavior, none have been widely adopted. They either A) impose too much overhead, B) are designed for long-outdated kernel releases and are hard to port to current systems, C) generate too much data, or D) are designed for a single system. CamFlow addresses these shortcoming by: 1) leveraging the latest kernel design advances to achieve efficiency; 2) using a self-contained, easily maintainable implementation relying on a Linux Security Module, NetFilter, and other existing kernel facilities; 3) providing a mechanism to tailor the captured provenance data to the needs of the application; and 4) making it easy to integrate provenance across distributed systems. The provenance we capture is streamed and consumed by tenant-built auditor applications. We illustrate the usability of our implementation by describing three such applications: demonstrating compliance with data regulations; performing fault/intrusion detection; and implementing data loss prevention. We also show how CamFlow can be leveraged to capture meaningful provenance without modifying existing applications."
abstract_short = ""
event = "ACM Symposium on Cloud Computing"
event_url = "https://acmsocc.github.io/2017/"
location = "Santa Clara, California"

selected = false
math = true

url_pdf = "https://arxiv.org/pdf/1711.05296.pdf"
url_slides = "http://tfjmp.org/files/presentations/2017-socc.pdf"
url_video = ""

# Optional featured image (relative to `static/img/` folder).
[header]
image = "cf-architecture.png"
caption = "CamFlow architecture."

+++
