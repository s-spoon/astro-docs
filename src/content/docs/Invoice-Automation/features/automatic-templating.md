---
title: "Automatic Templating"
draft: false
type: Article
---


When a PDF is first uploaded to Invoice Automation the file will be checked to see if an existing template for this vendor can be used. If a suitable template is not found the system will utilize AI to understand the document and content and generate a new template.  The template generation accuracy will vary and must be reviewed. It may be correct or may require revisions to correctly recognize all the needed data.

If a template can not be sucessfully created from the uploaded file the file will be left in the [Failed Status](./document-status.md#document-statuses).

!!! info
	AI Template Generation may not always get things right, be sure to carefully check the the resulting template to ensure its accuracy.
