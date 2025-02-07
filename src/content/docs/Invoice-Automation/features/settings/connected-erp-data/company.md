---
title: "Companies"
draft: false
type: Article
---


## Mailbox

Invoice Automation allows you to upload documents directly into the system via email. A unique, random email address is provided for each company within Invoice Automation, please don't share this address with your Vendors as it may change from time to time, it is just for you you. Each company within Invoice Automation will have its own unique email address provided. 

To upload a file via email simply send the PDF as an attachment to the provided email address in the Mailbox Address section. This email and the attachments its contains will be processed by Invoice Automation in the same way as [Manually Uploading](../../document-uploading.md#manually-uploading) a document.

**Please Note: The address can not be used for sending emails.**

!!! warning "Warning"
	Emails sent to the mailbox address are not stored, once the attachments have been processed the email is permenantly deleted. Only the sender & email subject line & PDF attachments are stored. We recommend storing a copy of the original email with your mail provider for your future reference.

!!! tip "Did you know?"
	If you have a dedicated emailing address that Vendors use to send invoices (for exmaple invoices@example.com), re recommend setting up an automatic forwarding rule to send the invoices straight into Invoice Automation. If you need assistance, your mail provider will be able to give guidance on how to do this.

## Failed Document Assignees

Please See [Workflow Assignees - Failed Documents](../workflows/assignees.md#failed-documents).

## Tolerances

Tolerances allow validations to pass even if the figures are not exactly the same but are however ‘close enough’. Three kinds of tolerances exist, Order, Line & Unit Price, they operate on the Order Total, Line Total & Line Unit Price respectively.

To configure a new tolerance first select whether the tolerance should be a percentage of the Document Value or an absolute value. After selecting, enter a minimum and maximum value that the Document Value must be between for this tolerance to apply, if only one tolerance is required, the minimum and maximum buttons can be used to fill these fields. Finally enter the value desired for the tolerance, for values the should be entered in the smallest unit of current (for example 0.05 for 5 pence), for percentages the value should be between 0 – 100.

Any number of tolerances can be created, however care should be taken to ensure the minimum and maximum values do not overlap other configured tolerances, only the first tolerance within any given range will be used.
Note: Tolerances can be used to remove small rounding issues introduced due to differences in the way tax or discounts are calculated from vendor to vendor.

Example:

| Mode  | Minimum | Maximum | Value |
| :---: | :-----: | :-----: | :---: |
| Value | 0       | 9.99    | 0.05  |

Given a Document value of 7.56, the values configured above would matched to an ERP Data value of between $7.51 - $7.71.



!!! info
	Tolerances allow the values to fluctuate in both directions, the Document Value can be either higher or lower than the ERP Data by the configured tolerance.
