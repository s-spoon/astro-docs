---
title: "Select records for engineering changes control"
draft: false
type: Article
---

Engineering Change Management (ECM) enables you to control changes you make to new records. You can control engineering changes to standard items in the item master, to make-to-order (MTO) and make-to-stock (MTS) job orders, and to sales orders.

To control engineering changes to records that existed before you implemented ECM or to change ECM control for individual records, see the **.

## To select records for engineering changes control

1. Open the **Production (CSPROD)** page.

    1. Select **Utilities** > **Company Setup** > **Module Setup** > **Production**.

    Or

    2. Search for **CSPROD** or **Production** in the **Navigation box** and then select **Production**.

    The **Production (CSPROD)** page appears.

2. Click the **ECM** tab.

3. In the **Control Configuration** section, select the **ECM Control On/Off** checkbox to enable ECM control for changes to the following documents:

    - ITEM MASTER

    - JOB ORDER (MTO)

    - JOB ORDER (MTS)

    - SALES ORDER

4. Specify the ECM controls for each of the document types:

    - Select the **Master Record** checkbox to enable ECM control for changes to new master records.

    - Select the **BOM** checkbox to enable ECM control for changes to new bills of material.

    - Select the **Routing** checkbox to enable ECM control for changes to new routings.

    - Select the **Allow Override** checkbox to permit employees with ECM override permission to override the system and make changes.

    - Select the **Allow User-Defined Revision Numbers** checkbox to permit users to specify the part revision numbers.

    - Select the **Update Routing Batch Information On Job Order Creation** checkbox to update routing fields when a new job order is created.

5. In the **Messaging** section, specify how customers or vendors must be notified about the engineering changes:

    - Select the **Use Notifier** checkbox to use the Made2Manage Notifier.

    - Select the **Use Email** checkbox to use the default Email application.

6. In the **Item Master** section, specify the **Default Status of New Item Master Records**.

    - Select **Started** to set the **Default Status of New Item Master Records** to **Started**.

    - Select **Active** to set the **Default Status of New Item Master Records** to **Active**.

7. On the toolbar, click **Save**. The ECM control changes are saved.



​