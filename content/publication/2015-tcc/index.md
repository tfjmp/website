+++
abstract = "A model of cloud services is emerging whereby a few trusted providers manage the underlying hardware and communications whereas many companies build on this infrastructure to offer higher level, cloud-hosted PaaS services and/or SaaS applications. From the start, strong isolation between cloud tenants was seen to be of paramount importance, provided first by virtual machines (VM) and later by containers, which share the operating system (OS) kernel. Increasingly it is the case that applications also require facilities to effect isolation and protection of data managed by those applications. They also require flexible data sharing with other applications, often across the traditional cloud-isolation boundaries; for example, when government, consisting of different departments, provides services to its citizens through a common platform. These concerns relate to the management of data. Traditional access control is application and principal/role specific, applied at policy enforcement points, after which there is no subsequent control over where data flows;a crucial issue once data has left its owner’s control by cloud-hosted applications andwithin cloud-services. Information Flow Control (IFC), in addition, offers system-wide, end-to-end, flow control based on the properties of the data. We discuss the potential of cloud-deployed IFC for enforcing owners’ data flow policy with regard to protection and sharing, aswell as safeguarding against malicious or buggy software. In addition, the audit log associated with IFC provides transparency and offers system-wide visibility over data flows. This helps those responsible to meet their data management obligations, providing evidence of compliance, and aids in the identification ofpolicy errors and misconfigurations. We present our IFC model and describe and evaluate our IFC architecture and implementation (CamFlow). This comprises an OS level implementation of IFC with support for application management, together with an IFC-enabled middleware."
authors = ["T Pasquier", "J Singh", "D Eyers", "J Bacon"]
date = "2015-10-09"
image_preview = ""
math = true
publication_types = ["2"]
publication = "In *Transactions on Cloud Computing*, IEEE."
publication_short = "In *TCC*"
featured = false
title = "CamFlow: Managed Data-Sharing for Cloud Services"
url_pdf = "publications/2015-tcc.pdf"
url_project = "project/cloudsafetynet/"
projects = ["cloudsafetynet"]

# Digital Object Identifier (DOI)
doi = "10.1109/TCC.2015.2489211"

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = "Overview"

+++
