+++
abstract = "Provenance graphs capture causal interactions among operating-system entities, underpinning modern endpoint intrusion detection. Existing graph-based detectors use generic text encoders trained on small datasets to embed entities solely from their labels (e.g., file paths and process command lines). Embeddings are thus independent of the graph, missing behavioral semantics encoded in graph neighborhoods. However, much like a natural language that carries linguistic structures that can be learned once and transferred broadly, OS entities such as system binaries, configuration files, and common services engage in recurring types of activity with similar inter-entity relationships across executions. These behavioral regularities can be learned offline from provenance graphs and approximated at inference time from entity labels alone. Based on this insight, we introduce SPIDER (System Provenance-Informed Distilled Entity Representations), a text-only entity encoder distilled from provenance graphs. SPIDER uses a graph-based teacher that models who an entity interacts with via graph attention and how it interacts with them through behavioral signatures. These representations are distilled into a transformer-based student that maps raw entity text to embeddings in a single forward pass, providing pretrained behavioral priors that downstream detectors can use for real-time inference without requiring graph access. With only 5.2M parameters, SPIDER can be deployed directly on endpoints and optionally finetuned for specific detection tasks. We show that a single checkpoint improves detection performance as a drop-in replacement for four recent intrusion detection systems across Linux, FreeBSD, Windows, and Android, surpassing both GNNand LLM-based baselines."
authors = ["T Bilot", "X Han", "T Pasquier"]
date = "2026-09-25"
publishDate = "2017-01-01T00:00:00Z"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *Annual Conference on Neural Information Processing Systems 2026* (NeurIPS'26)."
publication_short = "*NeurIPS'26*"
featured = true
title = "Learning Transferable Representations from Operating System Entities via Provenance Graph Distillation"
url_pdf = "publications/2026-neurips.pdf"
url_project = "https://github.com/ubc-provenance/PIDSMaker"

# Digital Object Identifier (DOI)
doi = ""

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++
