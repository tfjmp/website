+++
abstract = "The eBPF framework enables execution of user-provided code in the Linux kernel. In the last few years, a large ecosystem of cloud services has leveraged eBPF to enhance container security, system observability, and network management. Meanwhile, incessant discoveries of memory safety vulnerabilities have left the systems community with no choice but to disallow unprivileged eBPF programs, which unfortunately limits eBPF use to only privileged users. To improve run-time safety of the framework, we introduce SafeBPF, a general design that isolates eBPF programs from the rest of the kernel to prevent memory safety vulnerabilities from being exploited. We present a pure software implementation using a Software-based Fault Isolation (SFI) approach and a hardware assisted implementation that leverages ARM’s Memory Tagging Extension (MTE). We show that SafeBPF incurs up to 4% overhead on macrobenchmarks while achieving desired security properties."
authors = ["SY Lim", "T Prasad", "X Han", "T Pasquier"]
date = "2024-10-18"
publishDate = "2017-01-01T00:00:00Z"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *ACM Cloud Computing Security Workshop* (ACM CCSW'24)."
publication_short = "*ACM CCSW'24*"
featured = true
title = "SafeBPF: Hardware-assisted Defense-in-depth for eBPF Kernel Extensions"
url_pdf = "publications/2024-ccsw.pdf"
url_project = ""

# Digital Object Identifier (DOI)
doi = ""

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++
