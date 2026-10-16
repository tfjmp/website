---
title: Research
type: landing
sections:
- block: page-header
  id: research
  content:
    title: Research
    links:
    - name: Publications
      url: '#publications'
    - name: Service
      url: '#service'
  design:
    spacing:
      padding: ['3rem', '0', '1.5rem', '0']
- block: content-collection
  id: publications
  content:
    title: Publications
    count: 0
    filters:
      folders:
      - publication
      featured_only: false
    order: desc
  design:
    view: citation
    columns: 2
    spacing:
      padding: ['1.5rem', '0', '3rem', '0']
- block: section-content
  id: service
  content:
    title: Service
    page: sections/service
  design:
    spacing:
      padding: ['3rem', '0', '3rem', '0']
---
