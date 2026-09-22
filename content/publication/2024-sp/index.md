+++
abstract = "Provenance graphs are structured audit logs that describe the history of a system's execution. Recent studies have explored a variety of techniques to analyze provenance graphs for automated host intrusion detection, focusing particularly on advanced persistent threats. Sifting through their design documents, we identify four common dimensions that drive the development of *provenance-based intrusion detection systems* (PIDSes): **scope** (can PIDSes detect modern attacks that infiltrate across application boundaries?), **attack agnosticity** (can PIDSes detect novel attacks without a priori knowledge of attack characteristics?), **timeliness** (can PIDSes efficiently monitor host systems as they run?), and **attack reconstruction** (can PIDSes distill attack activity from large provenance graphs so that sysadmins can easily understand and quickly respond to system intrusion?). We present KAIROS, the first PIDS that simultaneously satisfies the desiderata in all four dimensions, whereas existing approaches sacrifice at least one and struggle to achieve comparable detection performance. Kairos leverages a novel graph neural network-based encoder-decoder architecture that learns the temporal evolution of a provenance graph's structural changes to quantify the degree of *anomalousness* for each system event. Then, based on this fine-grained information, Kairos reconstructs attack footprints, generating compact *summary graphs* that accurately describe malicious activity over a *stream* of system audit logs. Using state-of-the-art benchmark datasets, we demonstrate that Kairos outperforms previous approaches."
authors = ["Z Cheng", "Q Lv", "J Liang", "Y Wang", "D Sun", "T Pasquier", "X Han"]
date = "2024-05-20"
publishDate = "2017-01-01T00:00:00Z"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *IEEE Symposium on Security and Privacy* (IEEE S&P'24)."
publication_short = "*IEEE S&P'24*"
featured = true
title = "Kairos: Practical Intrusion Detection and Investigation using Whole-system Provenance"
url_pdf = "publications/2024-sp.pdf"
url_project = "https://github.com/ubc-provenance"

# Digital Object Identifier (DOI)
doi = ""

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++
