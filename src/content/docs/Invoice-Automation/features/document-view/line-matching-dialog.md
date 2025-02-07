---
title: "Line Matching Dialog"
draft: false
type: Article
---


The Line Matching Dialog allows users to link items on a received invoice to the lines of a Purchase Order from their ERP solution.

## Matching Methods
Invoice Automation will attempt to link lines together automatically using two primary methods.

In addition to the two main methods of line matching, Invoice Automation will also attempt to link lines automatically if only one matched line remains on both the Purchase Order & the Invoice. This check is made both at the start and the end of the line matching process.

### Part Number
If the Part Number column is configured for the Line Details Invoice Automation will attempt to match based on this value by comparing it to both the Part Number & Vendor Part Number on the purchase order.

### Non-Unique Line Matching
If matching by Part Number fails to yield a result Invoice Automation can optionally attempt to match by less precise means. For this to function the Non-Unique Line Matching option needs to be enabled in the [General Settings](../settings/general.md#non-unique-line-matching).
This uses the line Extended Price, Quantity & Unit Price to attempt to find the correct line. To help ensure that Invoice Automation does not produce incorrect results Non-Unique Line Matching has strict requirements in-order to function on any given line.

-	At least two of the three values must exactly match that of the linked Purchase Order.
-	For a value to be used it must be unique on the invoice. For example if an Invoice contains two lines that both have a quantity of 5, then the quantity value will not be used for line matching purposes.

Non-unique Line Matching can be configured to automatically create the link between lines that match, or it can optionally require a user to manually confirm the link. Additionally, if manual confirmation is required Invoice Automation can be configured to remember the line match for future and automatically link these lines when they are seen again. Note: The functionality to remember line matches will only function if the Part Number column is configured on the invoice.

## Matched
Matched lines appear in the top half of the line matching dialog, the left side of the table contains the Invoice Line & the right side contains the matched Purchase Order Line.

Lines can be unmatched by clicking on the line and selecting unmatch. Multiple lines can be unmatched at the same time by using the checkboxes at the start of each line.

### Pack Size Adjustment
Packsize adjustments can be made using the option in the three dots menu at the right side of the Invoice Line Value.

Making a packsize adjustment will alter the Unit Price on the invoice to match a desired quantity while keeping the line value the same. This can be used if the vendors invoice is using a different stocking unit to what your ERP solution is stocking them in.
By default, the desired quantity will be automatically populated with the quantity ordered on the linked Purchase Order.

!!! info
	Packsizes will not be remembered for future use and must be configured each time. For this reason we recommend attempting to keep these units inline with vendors.

## Unmatched
Unmatched lines appear in the lower half of the Line Matching Dialog, much like the matched Lines, the table on the left contains Invoice Lines & the right contains Purchase Order Lines.

To match a line first select an Invoice Line, then a Purchase Order line and click the Match button above, the lines will move to the matched table above and be linked together.

Multiple invoice lines can be first combined and then linked to a single Purchase Order line, this can be used for cases where a vendor has invoiced the same product separately across multiple lines or where something a vendor considers multiple products is considered only a single product in your ERP solution. To link multiple use the checkboxes at the start of the Invoice Lines to select all relevant lines and then select a single Purchase Order Line and click the Merge and Match button.

### Using Part Number/Description as a Shipping Charge Value

If the vendor itemises shipping charge as a product line Invoice Automation can detect and move this line into the dedicated Shipping Charge field. To do this, it needs to be told what a Shipping Charge Line looks like, this can be done in both the [Template Editor](../template-editor/fields.md#fields) and the Line Matching Dialog. Using the three dots menu at the right side of the Invoice table, select either Use Part Number for Shipping Charge or Use Description for Shipping Charge as appropriate. Once selected the line will be removed from the Invoice and its value added to the Shipping Charge total, all future invoices using the same template will automatically have their shipping charge applied if the Part Number/Description matches.

!!! info
	A template can have any number of Part Numbers/Descriptions to match against for shipping charge.

!!! info
	Shipping Charge Values can only be edited if the template is configured to read Shipping Charge from Product Lines. Please see [Template Editor](../template-editor/fields.md)
