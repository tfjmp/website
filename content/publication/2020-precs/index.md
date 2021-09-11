+++
abstract = "Host-based anomaly detectors generate alarms by inspecting audit logs for suspicious behavior. Unfortunately, evaluating these anomaly detectors is hard. There are few high-quality, publiclyavailable audit logs, and there are no pre-existing frameworks that enable push-button creation of realistic system traces. To make trace generation easier, we created Xanthus, an automated tool that orchestrates virtual machines to generate realistic audit logs. Using Xanthus’ simple management interface, administrators select a base VM image, configure a particular tracing framework to use within that VM, and define post-launch scripts that collect and save trace data. Once data collection is finished, Xanthus creates a self-describing archive, which contains the VM, its configuration parameters, and the collected trace data. We demonstrate that Xanthus hides many of the tedious (yet subtle) orchestration tasks that humans often get wrong; Xanthus avoids mistakes that lead to non-replicable experiments"
authors = ["X Han", "J Mickens", "A Gehani", "M Seltzer", "T Pasquier"]
date = "2020-05-01"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *International Workshop on Practical Reproducible Evaluation of Systems* (P-RECS'20)."
publication_short = "*ACM P-RECS'20*"
featured = false
title = "Xanthus: Push-button Orchestration of Host Provenance Data Collection"
url_pdf = "files/publications/2020-precs.pdf"
url_project = "project/camflow"
projects = ["camflow"]

# Digital Object Identifier (DOI)
doi = ""

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++

<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/50PpVxcy5WM?start=4017" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
