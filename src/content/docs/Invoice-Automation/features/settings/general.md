---
title: "General Settings"
draft: false
type: Article
---


These settings control how Invoice Automation handles Document Scanning, [Validation Errors](../document-validation-errors.md) & [Document List View](../document-list-view/contents.md) layout among other things.

## Show Unseen Documents First

This option changes the way documents are sorted by default on the [Document List View](../document-list-view/contents.md). When enabled documents that have changed since the last time a user opened the document to view will appear before ones that have not changed. If this options is disabled then documents will be ordered by the last time they were updated newest to oldest.

## Non-Unique Line Matching

This option enables or disabled Invoice Automations ability to match lines based on values other than Part Number/Vendor Part Number. Additionally a third option is available to attempt to match the lines but also require a user to confirm the match is correct. For more information see [Line Matching Dialog - Non-Unique Line Matching](../document-view/line-matching-dialog.md#non-unique-line-matching).

## Remember Confirmed Line Matches

This option disables/enables Invoice Automation from remembering previously matched lines that have been manually confirmed by a user. Once a particular combination of Purchase Order and Invoice line has been matched for a vendor this will automatically be reapplied in future without asking for confirmation. For more information please see [Line Matching Dialog - Non-Unique Line Matching](../document-view/line-matching-dialog.md#non-unique-line-matching).

## Receiver Matching

Receiver Matching allows Invoice Automation to ensure that goods being invoiced for have been received before proceeding. This option can be disabled to allow invoices to flow through the system and export to your ERP solution even if not all the goods have been received.

Invoice Automation will keep track of the Goods Received Notes sent from your ERP solution and apply them to the received vendor invoices, preventing the same goods being counted more than once against multiple invoices.

## Purchase Order Total Validation

This option allows you to change how Invoice Automation validates the Invoice Total against the Purchase Order. By default Invoice Automation will validate the Gross (Invoice) Total, however in some jurisdictions this may cause validation errors to occur because the ERP can not calculate the exact amount of tax that will be paid on the final invoice. Changing this option to Sub Total Invoice Automation will check only the Sub (Nett) Total of the invoice, which although less robust can still give a level of confidence to the figures being reported.

## Disabled Validation

Invoice Automation offers the ability to disable any Validation Error and prevent it from occurring and prevent the checks from being made. 