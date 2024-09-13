+++
abstract = "Monolithic operating systems are infamously complex. Linux in particular has a tendency to intermingle policy and mechanisms in a manner that hinders modularity. This is especially problematic when developers aim to finely optimize performance, since it is often the case that a default policy in Linux, while performing well on average, cannot achieve the optimal performance in all circumstances. However, developing and maintaining a bespoke kernel to satisfy the need of a specific application is usually an unrealistic endeavor due to the high software engineering cost. Therefore, we need a mechanism to easily customize kernel policies and its behavior. In this paper, we design a framework called FetchBPF that addresses this problem in the context of memory prefetching. FetchBPF extends the widely used eBPF framework to allow developers to easily express, develop, and deploy prefetching policies without modifying the kernel codebase. We implement various memory prefetching policies from the literature and demonstrate that our deployment model incurs negligible overhead as compared to the equivalent native kernel implementation."
authors = ["X Cao", "S Patel ", "SY Lim", "X Han", "T Pasquier"]
date = "2024-07-10"
publishDate = "2017-01-01T00:00:00Z"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *USENIX Annual Technical Conference* (ATC'24)."
publication_short = "*USENIX ATC'24*"
featured = true
title = "FetchBPF: Customizable Prefetching Policies in Linux with eBPF"
url_pdf = "publications/2024-atc.pdf"
url_project = ""

# Digital Object Identifier (DOI)
doi = ""

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++

<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0lo-7dDVFB0?si=qU5yN_IyrVtE_GTP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
