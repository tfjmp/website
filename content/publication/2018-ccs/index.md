+++
abstract = "Identifying the root cause and impact of a system intrusion remains a foundational challenge in computer security. Digital provenance provides a detailed history of the flow of information within a computing system, connecting suspicious events to their root causes. Although existing provenance-based auditing techniques provide value in forensic analysis, they assume that such analysis takes place only retrospectively. Such post-hoc analysis is insufficient for realtime security applications; moreover, even for forensic tasks, prior provenance collection systems exhibited poor performance and scalability, jeopardizing the timeliness of query responses.<br/><br/> We present CamQuery, which provides inline, realtime provenance analysis, making it suitable for implementing security applications. CamQuery is a Linux Security Module that offers support for both userspace and in-kernel execution of analysis applications. We demonstrate the applicability of CamQuery to a variety of runtime security applications including data loss prevention, intrusion detection, and regulatory compliance. In evaluation, we demonstrate that CamQuery reduces the latency of realtime query mechanisms, while imposing minimal overheads on system execution. CamQuery thus enables the further deployment of provenance-based technologies to address central challenges in computer security."
authors = ["T Pasquier", "X Han", "T Moyer", "A Bates", "O Hermant", "D Eyers", "J Bacon", "M Seltzer"]
date = "2018-10-15"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *Conference on Computer and Communications Security*, ACM."
publication_short = "In *CCS '18*"
featured = true
title = "Runtime Analysis of Whole-System Provenance"
url_code = "http://camflow.org"
url_pdf = "publications/2018-ccs.pdf"
url_project = "project/camflow"
projects = ["camflow"]

# Digital Object Identifier (DOI)
doi = "10.1145/3243734.3243776"

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++
<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/6VBVwH88o4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
