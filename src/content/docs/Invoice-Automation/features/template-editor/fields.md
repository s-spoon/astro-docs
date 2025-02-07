---
title: "Fields"
draft: false
type: Article
---


Fields are used to detect the relevant information on the document. Some fields are mandatory & must be provided & some optional.

!!! info
	Even optional fields should be provided where possible. The more information Invoice Automation has available the more validation checks can be run to ensure the results are as accurate as possible.

For more information on how to poplate the fields please see [Populating Fields](./populating-fields.md)

Fields are split into two main categories.

## Keys

Keys are used to identify which documents should be connected to the template. For this reason the keys must remain the same across all documents for the template. Keys also have some additional quirks:

-	Although the keys are named Company Name, Email, Web Address etc it is not strictly necessary to select those pieces of information & the labels should be viewed as a guide. The most important requirement is that the selected value is something unique and belongs to that vendor.
-	Two keys is the minimum requirement for each template, however the more keys that are provided the more accurate the document scanning will be and can result in less false positives.
-	Document type is required in addition to the other keys. Although like a key its purpose is slightly different. Whereas normal keys are used to identify which vendor the document belongs to, Document Type is used to identify which type of template for the vendor should be used (Purchase Invoice, Statement etc). To correctly select text for this key, the value needs to be unique to this type of document that the vendor sends. The text does not need to be unique across all vendors, only to the current vendor.

## Document Details

These fields are what form the main data of the document and are what will be displayed & be editable in the [Document View](../document-view/contents.md). Not all fields are required however they should be provided when they are available on the document.

There are 4 main types of document values:

-	Text: Simple plain text fields.
-	Number: Numbers will be attempted to be read, account for currency symbols, decimal & thousand separators & non-numeric characters.
-	Date: Dates will be parsed to a format, when selecting a date a format also needs to be selected.
-	Table: Tables contain configuration for the area to use for each column along with configuration for how the column should be detected.