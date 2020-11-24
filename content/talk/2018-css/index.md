+++
publishDate = 2018-01-01T00:00:00  # Schedule page publish date.

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date = "2018-10-18T11:30:00"
draft = false

title = "Runtime Analysis of Whole-System Provenance"
abstract = "Identifying the root cause and impact of a system intrusion remains a foundational challenge in computer security. Digital provenance provides a detailed history of the flow of information within a computing system, connecting suspicious events to their root causes. Although existing provenance-based auditing techniques provide value in forensic analysis, they assume that such analysis takes place only retrospectively. Such post-hoc analysis is insufficient for realtime security applications; moreover, even for forensic tasks, prior provenance collection systems exhibited poor performance and scalability, jeopardizing the timeliness of query responses.<br/><br/> We present CamQuery, which provides inline, realtime provenance analysis, making it suitable for implementing security applications. CamQuery is a Linux Security Module that offers support for both userspace and in-kernel execution of analysis applications. We demonstrate the applicability of CamQuery to a variety of runtime security applications including data loss prevention, intrusion detection, and regulatory compliance. In evaluation, we demonstrate that CamQuery reduces the latency of realtime query mechanisms, while imposing minimal overheads on system execution. CamQuery thus enables the further deployment of provenance-based technologies to address central challenges in computer security."
abstract_short = ""
event = "ACM Conference on Computer and Communications Security"
event_url = "https://www.sigsac.org/ccs/CCS2018/"
location = "Toronto, Canada"

selected = false
math = true

url_pdf = "http://tfjmp.org/files/publications/ccs-2018.pdf"
url_slides = ""
url_video = ""

# Optional featured image (relative to `static/img/` folder).

+++
<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/6VBVwH88o4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
