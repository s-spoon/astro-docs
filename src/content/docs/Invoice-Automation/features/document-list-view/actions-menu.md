---
title: "Actions Menu"
draft: false
type: Article
---


The actions menu, accessed via the 3 dots next to a document contains options relevant to managing documents.

-	Rescan Document: Removes all document information and attempts to re-process the document against a template. Any changes a user has made will be lost. Two options are available, ‘Rescan This Document’ & ‘Rescan Original Document’. These options are used if the document forms only part of a larger PDF that was uploaded. The former will rescan only the pages detected in this document, the latter will remove all related documents and rescan the entire PDF as it was uploaded.
-	Manually Process: This removed the document from the flow of Invoice Automation Processing & allows you to process the document in your ERP solution directly. This document will never be exported.
-	Edit Template(s): Opens the template editor for the template this document is assigned to.
-	Create Additional Template: Opens the template editor in a blank state to allow you to create additional templates for the document.
-	Download Original Document: Downloads a copy of the original PDF that was uploaded. For more information see [Download Original Document](#download-original-document)
-	Delete Document: Deletes this document from Invoice Automation, removing all data relating to it. THIS ACTION IS NOT REVERSIBLE. If all documents from an uploaded PDF have been deleted & none of the documents have ever been exported to an ERP solution then the original PDF & all data will also be purged from Invoice Automation (including the PDF files themselves).

## Download Original Document

The Download Original option in Invoice Automation downloads the uploaded file that the document was scanned from. In some circumstances this item will have 2 additional items inside it.

If the document being downloaded is the only document contained within the uploaded file then this option will directly download the original PDF file, Invoice Automation does not modify this file in any way & as such is an exact copy of that which was uploaded.

If the file that was uploaded contains multiple documents then this option will contain two additional options

- This Document: Downloads a copy of the original PDF containing only the relevant pages for this document. Note that while Invoice Automation is excluding irrelevant pages from the file the remaining pages exist exactly as they were uploaded.
- Entire File: This options downloads the entire original file including any pages not relevant to this document. Invoice Automation does not modify this file in any way & as such is an exact copy of that which was uploaded.