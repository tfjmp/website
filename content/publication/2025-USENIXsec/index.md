+++
abstract = "Past success in applying machine learning to data provenance graphs -- a structured representation of the history of operating system activities -- to detect host system intrusions has fueled continued interest in the security community. Recent solutions, particularly anomaly-based approaches using graph neural networks (GNNs) to detect previously unknown attacks, have reported near-perfect accuracy. Surprisingly, despite this high performance, the industry remains reluctant to adopt these intrusion detection systems (IDSs). We identify Quality of Attribution (QoA) as the key factor contributing to this disconnect. QoA refers to the amount of effort required from a human analyst to investigate an IDS's detection output, uncover the root causes of an attack, understand its ramifications, and dismiss potential false alarms. Unfortunately, prior work often generates large volumes of low-QoA output, much of which is irrelevant to attack activities, leading to alert fatigue and analyst burnout. We introduce Orthrus, the first IDS to achieve high-QoA detection on data provenance graphs at the node level. Orthrus detects malicious hosts using a GNN encoder designed to capture the fine-grained spatio-temporal dynamics of system events. It then reconstructs the attack path through dependency analysis to ensure high-QoA detection. We compare Orthrus against five state-of-the-art IDSs. Orthrus reduces the number of nodes requiring manual inspection for attack attribution by several orders of magnitude, significantly easing the burden on security analysts while achieving strong detection performance."
authors = ["B Jian", "T Bilot", "N El Madhoun", "K Al Agha", "A Zouaoui", "S Iqbal", "X Han",  "T Pasquier"]
date = "2025-01-12"
publishDate = "2017-01-01T00:00:00Z"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *USENIX Security Symposium 2025* (USENIX Sec'25)."
publication_short = "*USENIX Sec'25*"
featured = true
title = "ORTHRUS: Achieving High Quality of Attribution in Provenance-based Intrusion Detection Systems"
url_pdf = "publications/2025-usenixsec.pdf"
url_project = ""

# Digital Object Identifier (DOI)
doi = ""

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++
