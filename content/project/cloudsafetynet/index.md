+++
# Date this page was created.
date = "2013-01-01"

# Project title.
title = "CloudSafetyNet"

# Project summary to display on homepage.
summary = "End-to-end application security in the cloud explores the use of Information Flow Control to achieve greater security in cloud computing."

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = ["information flow control", "cloud", "provenance"]

# Optional external URL for project (replaces project detail page).
external_link = "http://www.cl.cam.ac.uk/research/srg/opera/projects/csn/"

# Featured image
# To use, add an image named `featured.jpg/png` to your project's folder.
[image]
# Caption (optional)
caption = "CloudSafetyNet"

# Focal point (optional)
# Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
focal_point = "Smart"

+++

Security considerations are a major issue holding back the widespread adoption of cloud computing: many organisations are concerned about the confidentiality and integrity of their users' data when hosted in third-party public clouds. Today's cloud providers struggle to give strong security guarantees that user data belonging to cloud tenants will be protected "end-to-end", i.e. across the entire workflow of a complex cloud-hosted distributed application.  The focus of the CloudSafetyNet project is to  fundamentally rethink how platform-as-a-service (PaaS) clouds should handle security requirements of applications. The overall goal is to provide the CloudSafetyNet middleware, a novel PaaS platform that acts as a "safety net", protecting against security violations caused by implementation flaws in applications ("intra-tenant security") or vulnerabilities in the cloud platform itself ("inter-tenant security").

CloudSafetyNet follows a "data-centric" security model: the integrity and confidentiality of application data is protected according to data flow policies -- agreements between cloud tenants and the provider specifying the permitted and prohibited exchanges of data between application components. It will enforce data flow policies through multiple levels of security mechanisms following a "defence-in-depth" strategy: based on policies, it creates "data compartments" that contain one or more components and isolate user data. A small privileged kernel, which is part of the middleware and constitutes a trusted computing base (TCB), tracks the flow of data between compartments and prevents flows that would violate policies. Previously such information flow control (IFC) models have been used successfully to enhance programming language, operating system and web application security.
