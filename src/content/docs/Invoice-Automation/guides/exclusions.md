---
title: "Using Exclusions to Remove Unnecessary Pages"
draft: false
type: Article
---


This guide will demonstrate the use and effect of using the [Exclusions](../features/template-editor/exclusions.md) feature. We will remove an unnecessary Terms and Conditions page from the middle of a Supplier Invoice document.

## Upload the Document

First, lets upload our Supplier Invoice & wait for Invoice Automation to extract the document information.

Our invoice contains three pages, with the second page containing the suppliers Terms and Conditions.

=== "Page 1"

	![Page 1 of a 3 page Supplier Invoice containing Terms and Conditions](assets/guides/exclusions/page1.jpg){ width="400" }


=== "Page 2"

	![Page 2 of a 3 page Supplier Invoice containing Terms and Conditions](assets/guides/exclusions/page2.jpg){ width="400" }


=== "Page 3"

	![Page 3 of a 3 page Supplier Invoice containing Terms and Conditions](assets/guides/exclusions/page3.jpg){ width="400" }


## The Problem

After Uploading the document & configuring the template for this Suppliers Invoice, we can see that there are some additional Product Lines present in the output. These lines are causing Invoice Automation to fail validation checks for Line & Order Totals.

![Line Details showing incorrect line detection](assets/guides/exclusions/the-problem-line-details.jpg)

As we can see from the image below, these lines are originating from some unfortunately placed numbers in the Terms and Conditions provided by the supplier.

![Excerpt from Uploaded Document showing Terms & Conditions being interpreted as a Document Line Value](assets/guides/exclusions/the-problem.png){width="600"}

There are numerous tools within Invoice Automation to help with issues like this, however this time we will employ a page Exclusion to remove the offending page entirely.

## Creating an Exclusion

Lets create an Exclusion to correct the issue for this document & future documents using this template. First we'll edit the template & open the Exclusion section.

![Template Editor with exclusions section open](assets/guides/exclusions/exclussions-open-empty.jpg)

Next, using the page selection buttons above the [Document Viewer](../features/template-editor/document-viewer.md) we will select the page containing the Terms and Conditions. Once on this page we can select some text that will act as the identifier for Invoice Automation to use when removing pages. The text needs to appear in the same place on every page that should be removed.

Here we'll simply use the words 'Terms and Conditions'.

![Terms and Conditions text has been selected](assets/guides/exclusions/terms-and-conditions-selected.jpg)

![Terms and Conditions text has been added to exclusion table](assets/guides/exclusions/exclusions-open-filled.jpg)

Once we have selected the text we can save the document & allow Invoice Automation to rescan the document using the newly updated template.

## Checking the Output

Now Invoice Automation has rescanned the document we can see that Page 2 of the document has been removed from the output, additionally the incorrect Product Lines are no longer present & the document has successfully processed.

![Line Details showing incorrect lines have been removed from the output](assets/guides/exclusions/fixed-line-details.jpg)

Now all documents received from this supplier that use this template will have their Terms and Conditions removed, even if they are not on Page 2.

!!! info
	Please note that although the page has been removed from the final output a Invoice Automation Document Credit will still be consumed for each page that is removed.
