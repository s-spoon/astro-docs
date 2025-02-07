---
title: "Transaction Audit Configuration (TRANAUDT) page"
draft: false
type: Article
---

*See Also*

Use the **Transaction Audit Configuration (TRANAUDT)** page to:

- Enable or disable transaction record auditing.

- Enable or disable auditing of pages running under the Made2Manage Processor Service.

- Select the auditing type for the business objects or pages.

    >[!NOTE]By default, no auditing is performed.

In the **Transaction Audit Configuration (TRANAUDT)** page, select one of the following audit types:

- **None**: No auditing is performed.

- **Single**: A single audit entry is made for Insert, Edit, and Delete transactions. Each field update in a row is audited.

- **Full**: An entry is made for every non-empty field value for Insert, Edit, and Delete transactions. Each field update in a row is also audited.