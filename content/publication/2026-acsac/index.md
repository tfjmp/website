+++
abstract = "Detecting lateral movement (LM) within enterprise networks remains a difficult challenge, with existing state-of-the-art methods often failing to identify such activity effectively. Recent approaches typically rely on unsupervised graph learning to model normal host behavior, using a network graph in which nodes represent hosts and edges correspond to observed events. Although these methods aim to detect LM at the edge level, their practical use is limited by two main shortcomings: (1) they are limited to fixed-size networks, being unable to infer LM for new incoming hosts, and (2) they generate a high number of false positive edges, leading to alert fatigue among security analysts. We present LARES, a lightweight, unsupervised framework for detecting LMs in evolving networks without retraining for new hosts. LARES is built on a single observation: lateral movement is causal. It emanates from compromised source hosts and propagates outward to neighbors. Prior methods ignore this structure and score edges as independent anomalies, which is why their precision collapses under realistic class imbalance. LARES mirrors the causal structure of the attack: an inductive encoder learns host behavior independent of identity, generalizing to hosts unseen at training time; a two-stage decoder then localizes compromised sources before tracing their outgoing LM edges. On two realistic enterprise networks, LARES maintains effective detection even as the network grows fivefold, substantially improves precision over recent state-of-the-art methods, and delivers 10-100x faster inference."
authors = ["T Bilot", "A Zouaoui",  "K Al Agha",  "N El Madhoun", "T Pasquier"]
date = "2026-09-10"
publishDate = "2017-01-01T00:00:00Z"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *IEEE Annual Computer Security Applications Conference 2026* (IEEE ACSAC'26)."
publication_short = "*IEEE ACSAC'26*"
featured = false
title = "LARES: Host-centered Lateral Movement Detection via Inductive Graph Reasoning"
url_pdf = "publications/2026-acsac.pdf"
url_project = "https://github.com/TristanBilot/lares"

# Digital Object Identifier (DOI)
doi = ""

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++
