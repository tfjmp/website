+++
abstract = "Many users implicitly assume that software can only be exploited after it is installed. However, recent supply-chain attacks demonstrate that application integrity must be ensured during installation itself. We introduce SIGL, a new tool for detecting malicious behavior during software installation. SIGL collects traces of system call activity, building a data provenance graph that it analyzes using a novel autoencoder architecture with a graph long short-term memory network (graph LSTM) for the encoder and a standard multilayer perceptron for the decoder. SIGL flags suspicious installations as well as the specific installation-time processes that are likely to be malicious. Using a test corpus of 625 malicious installers containing real-world malware, we demonstrate that SIGL has a detection accuracy of 96%, outperforming similar systems from industry and academia by up to 87% in precision and recall and 45% in accuracy. We also demonstrate that SIGL can pinpoint the processes most likely to have triggered malicious behavior, works on different audit platforms and operating systems, and is robust to training data contamination and adversarial attack. It can be used with application-specific models, even in the presence of new software versions, as well as application-agnostic meta-models that encompass a wide range of applications and installers."
authors = ["X Han", "X Yu", "T Pasquier", "D Li", "J Rhee", "J Mickens", "M Seltzer", "C Haifeng"]
date = "2021-08-11"
publishDate = "2017-01-01T00:00:00Z"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *USENIX Security Symposium* (USENIX Sec'21)."
publication_short = "*USENIX Sec'21*"
featured = false
title = "SIGL: Securing Software Installations Through Deep Graph Learning"
url_pdf = "publications/2021-usenixsec.pdf"
url_project = ""

# Digital Object Identifier (DOI)
doi = ""

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++

<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/iNaucHm7Z6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
