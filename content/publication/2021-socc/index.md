+++
abstract = "Despite the wide usage of container-based cloud computing, container auditing for security analysis relies mostly on built-in host audit systems, which often lack the ability to capture high-fidelity container logs. State-of-the-art reference-monitor-based audit techniques greatly improve the quality of audit logs, but their system-wide architecture is too costly to be adapted for individual containers. Moreover, these techniques typically require extensive kernel modifications, making it difficult to deploy in practical settings. In this paper, we present saBPF (**s**ecure **a**udit **BPF**), an extension of the eBPF framework capable of deploying secure system-level audit mechanisms at the container granularity. We demonstrate the practicality of saBPF in Kubernetes by designing an audit framework, an intrusion detection system, and a lightweight access control mechanism. We evaluate saBPF and show that it is comparable in performance and security guarantees to audit systems from the literature that are implemented directly in the kernel."
authors = ["SY Lim", "B Stelea", "X Han", "T Pasquier"]
date = "2021-11-01"
publishDate = "2017-01-01T00:00:00Z"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *ACM Symposium on Cloud Computing* (SoCC'21)."
publication_short = "*SoCC'21*"
featured = true
title = "Secure Namespaced Kernel Audit for Containers"
url_pdf = "publications/2021-socc.pdf"
url_project = ""

# Digital Object Identifier (DOI)
doi = ""

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++
