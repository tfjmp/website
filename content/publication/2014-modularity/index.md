+++
abstract = "This paper reports on our experience with providing Information Flow Control (IFC) as a library. Our aim was to support the use of an unmodified Platform as a Service (PaaS) cloud infrastructure by IFC-aware web applications. We discuss how Aspect Oriented Programming (AOP) overcomes the limitations of RubyTrack, our first approach. Although use of AOP has been mentioned as a possibility in past IFC literature we believe this paper to be the first illustration of how such an implementation can be attempted. We discuss how we built FlowR (Information Flow Control for Ruby), a library extending Ruby to provide IFC primitives using AOP via the Aquarium open source library. Previous attempts at providing IFC as a language extension required either modification of an interpreter or significant code rewriting. FlowR provides a strong separation between functional implementation and security constraints which supports easier development and maintenance; we illustrate with practical examples. In addition, we provide new primitives to describe IFC constraints on objects, classes and methods that, to our knowledge, are not present in related work and take full advantage of an object oriented language (OO language). The experience reported here makes us confident that the techniques we use for Ruby can be applied to provide IFC for any Object Oriented Program (OOP) whose implementation language has an AOP library."
authors = ["T Pasquier", "J Bacon", "B Shand"]
date = "2014-04-22"
image_preview = ""
math = true
publication_types = ["1"]
publication = "In *International Conference on Modularity*, IEEE."
publication_short = "In *Modularity*"
featured = false
title = "FlowR: Aspect Oriented Programming for Information Flow Control in Ruby"
url_pdf = "publications/2014-modularity.pdf"
url_project = "project/cloudsafetynet/"
projects = ["cloudsafetynet"]

# Digital Object Identifier (DOI)
doi = "10.1145/2577080.2577090"

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = "Overview"

+++
