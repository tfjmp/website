+++
abstract = "We present GoodKit, a new framework for live virtual machine introspection (LVMI) designed for performance, scalability, and safe integration in modern cloud environments. Unlike existing approaches—such as LibVMI—which rely on heavy VM pausing, GoodKit executes observers as lightweight VMs colocated with the VMM, enabling native-speed access to the target state while preserving strong isolation. GoodKit introduces fine-grained, lock-aware memory–coherence mechanisms, a configurable probing subsystem for I/O and kernel-level events, and a mutualization layer that allows multiple observers to operate concurrently without degrading target performance. Across 21 real world use cases, including rootkit detection, ransomware monitoring, and scheduler introspection, GoodKit delivers high performance (compared to LibVMI), strong isolation, and broad applicability."
authors = ["D Teguia", "L Duval",  "T Pisenti",  "K Lazri", "D Hagimont", "T Pasquier", "R Lachaize", "A Tchana"]
date = "2026-04-28"
publishDate = "2017-01-01T00:00:00Z"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *USENIX Symposium on Operating Systems Design and Implementation 2026* (USENIX OSDI'26)."
publication_short = "*USENIX OSDI'26*"
featured = true
title = "Inside Out: A Paradigm Shift In VM Introspection"
url_pdf = "publications/2026-osdi.pdf"
url_project = ""

# Digital Object Identifier (DOI)
doi = ""

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++
