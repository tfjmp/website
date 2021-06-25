---
title: "Demonstrating the Practicality of Unikernels to Build a Serverless Platform at the Edge"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- C Mistry
- B Stelea
- V Kumar
- T Pasquier

date: "2020-01-01T00:00:00Z"
doi: "10.1109/CloudCom49646.2020.00001"

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *IEEE International Conference on Cloud Computing Technology and Science*
publication_short: In *IEEE CloudCom'20*

abstract: The rise of IoT has led to large volumes of personal data being produced at the network’s edge. Most IoT applications process data in the cloud raising concerns over privacy and security. As many IoT applications are event-based and are implemented on cloud-based, serverless platforms, we’ve seen a number of proposals to deploy serverless solutions at the edge to address concerns over data transfer. However, conventional serverless platforms use container technology to run user-defined functions. Containers introduce their own issues regarding security – due to a large trusted computing base –, and performance issues including long initialisation times. Additionally, OpenWhisk a popular and widely used containerbased serverless platform available for edge devices perform relatively poorly as we demonstrate in our evaluation. In this paper, we propose to investigate unikernel as a solution to build serverless platform at the edge, addressing in particular performance and security concerns. We present UniFaaS, a prototype edge-serverless platform which leverages unikernels – tiny library single-address-space operating systems that only contain the parts of the OS needed to run a given application – to execute functions. The result is a serverless platform with extremely low memory and CPU footprints, and excellent performance. UniFaaS has been designed to be deployed on low-powered single-board computer devices, such as Raspberry Pi or Arduino, without compromising on performance.

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_code: 'https://github.com/cm16161/EdgeKernel'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
