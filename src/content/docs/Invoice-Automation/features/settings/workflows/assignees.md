---
title: "Assignees"
draft: false
type: Article
---


All validation errors can be assigned to users or sets of users. When a validation error is captured by an assignee it will appear in that user or set of users [Todo List](./todo-list.md).

## Usage
Configuring assignees is based on a hierarchy of Company, Facility, Vendor & Validation Message. Any of these can be specified or left blank, however each one is holds higher precedence than the prior.

For Example:

| Field              | Value |
| :----------------- | ----: |
| Company            | DEF1  |
| Facility             | Blank |
| Vendor           | ABC1  |
| Validation Message | Blank |

Has a higher precedence and will be used instead of:

| Field              | Value |
| :----------------- | ----: |
| Company            | DEF1  |
| Facility             | Blank |
| Vendor           | Blank |
| Validation Message | Blank |

For documents where both the Company is `DEF1` & Vendor is `ABC1`

## Failed Documents

As failed documents don’t have a lot of the information required to be assigned inline with other errors, you can configure a user or User Group to assign failed documents to on a per company basis from within the [Connected ERP Data - Companies](../connected-erp-data/company.md).