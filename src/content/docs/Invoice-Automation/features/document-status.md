---
title: "Document Statuses"
draft: false
type: Article
---


Documents will go through numerous statuses as the traverse through Invoice Automation, each status represents a distinct part of the documents lifecycle.

Generally a document should move linearly though statuses, not back tracking. However this can occur if modifications made to the document cause errors within the validation process.

``` mermaid
graph LR
  Uploaded[Uploaded] --> Duplicate[Duplicate] & Partial[Partially Processed] & Failed[Failed] & Unprocessable[Unprocessable];
  Partial --> SystemHold[System Hold];
  SystemHold .-> Approval[Approval] & FullyProcessed[Fully Processed];
  Approval .-> FullyProcessed;
  FullyProcessed --> Exported[Exported];

```

| Status | Description |
| :----: | :---------- |
| Uploaded | The document has been uploaded and is currently being processed, this process can take up to 10 minutes for larger documents. |
| Partially Processed | The document has validation errors preventing progression, these errors relate specifically to the values that Invoice Automation has retrieved from the document. Usually arithmetic errors. |
| System Hold | The document has validation errors preventing progression, these errors relate to the document values when being compared to data from your ERP solution. These errors may be that Invoice Automation can not find any ERP data, or that the data does not match. |
| Approval | The document has successfully be processed and is awaiting one or more [Workflow - Approval](./settings/workflows/approvals.md). |
| Fully Processed | The document has been successfully processed and is awaiting export to your ERP solution (if applicable for the document type). |
| Exported | The document has been successfully exported to your ERP solution can no long be modified in Invoice Automation. |
| Failed | Invoice Automation failed to find a matching template for the document. |
| Manually Processed | Processed: The document has been manually processed in your ERP solution and has been removed from the flow of Invoice Automation. |
| Duplicate | The document has been detected previously so is being held back to prevent duplicates being exported to your ERP solution. |
| Unprocessable | An unrecoverable error has occurred with the document preventing it from being processed successfully, documents in this state have their credits returned & the original document is available to download to either reupload and try again or process the document manually. |
