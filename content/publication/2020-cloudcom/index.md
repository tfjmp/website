---
title: Demonstrating the Practicality of Unikernels to Build a Serverless Platform at the Edge
authors:
- C Mistry
- B Stelea
- V Kumar
- T Pasquier
date: '2020-01-01T00:00:00Z'
publishDate: '2017-01-01T00:00:00Z'
publication_types:
- paper-conference
publication: In *IEEE International Conference on Cloud Computing Technology and Science*
publication_short: In *IEEE CloudCom'20*
abstract: The rise of IoT has led to large volumes of personal data being produced at the network’s edge. Most IoT applications
  process data in the cloud raising concerns over privacy and security. As many IoT applications are event-based and are implemented
  on cloud-based, serverless platforms, we’ve seen a number of proposals to deploy serverless solutions at the edge to address
  concerns over data transfer. However, conventional serverless platforms use container technology to run user-defined functions.
  Containers introduce their own issues regarding security – due to a large trusted computing base –, and performance issues
  including long initialisation times. Additionally, OpenWhisk a popular and widely used containerbased serverless platform
  available for edge devices perform relatively poorly as we demonstrate in our evaluation. In this paper, we propose to investigate
  unikernel as a solution to build serverless platform at the edge, addressing in particular performance and security concerns.
  We present UniFaaS, a prototype edge-serverless platform which leverages unikernels – tiny library single-address-space
  operating systems that only contain the parts of the OS needed to run a given application – to execute functions. The result
  is a serverless platform with extremely low memory and CPU footprints, and excellent performance. UniFaaS has been designed
  to be deployed on low-powered single-board computer devices, such as Raspberry Pi or Arduino, without compromising on performance.
tags: []
featured: false
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false
projects: []
slides: ''
links:
- type: code
  url: https://github.com/cm16161/EdgeKernel
hugoblox:
  ids:
    doi: 10.1109/CloudCom49646.2020.00001
---
