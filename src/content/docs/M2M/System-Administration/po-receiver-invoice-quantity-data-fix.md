---
title: "PO Receiver Invoice Quantity Data Fix"
draft: false
type: Article 
---

You can run this utility to fix data issues on the invoiced quantities on purchase order receivers or for standard item records with an on-hand balance that are showing in a blank location.

Two repair choices are available on this page. They are:

-   **Correct on hand records with a blank location**
-   **Recalculate quantities invoiced on Purchase Orders and Receivers**

**To Correct on hand records with a blank location**

1.  Open the **PO Receiver Invoice Quantity Data Fix** page.
    1.  Select **Utilities** > **Maintenance** > **Data Utilities** > **PO Receiver Invoice Quantity Data Fix**.

        Or

    2.  Search for **PO Receiver Invoice Quantity Data Fix** in the navigation box and then select **PO Receiver Invoice Quantity Data Fix**.

        **PO Receiver Invoice Quantity Data Fix** page appears.

2.  From the **Function** dropdown list, select **CORRECT ON HAND BALANCE RECORDS WITH A BLANK LOCATION**.
3.  Select the radio button for **All Parts** or **Single Part**.

    **All Parts** - Selecting this will review all item master records with an on-hand balance and update any that have a blank location with the location listed as the default on the item master record for that part/revision/facility combination.

    **Single Part** - Select your Facility, then the part number and revision.

4.  On the **Toolbar**, click **Execute Utility**.

    A message, *Preparing to repair data, proceed?* appears.

5.  Click **Yes** to repair data.

    Click **No** to exit.

**To recalculate quantities invoiced on the Purchase Order and Receivers**

1.  Open the **PO Receiver Invoice Quantity Data Fix** Page.
    1.  Select **Utilities** > **Maintenance** > **Data Utilities** > **PO Receiver Invoice Quantity Data Fix**.

        Or

    2.  Search for **PO Receiver Invoice Quantity Data Fix** in the navigation box and then select **PO Receiver Invoice Quantity Data Fix**.

        **PO Receiver Invoice Quantity Data Fix** page appears.

2.  From the **Function** dropdown list, select **RECALCULATE QUANTITY INVOICED ON PURCHASE ORDERS AND RECEIVERS**.
3.  Select **Single Receiver** or **Single PO** from the **Single** dropdown list.

    Based on your selection **Receiver No field** or **PO NO field** gets displayed on the page.

4.  Enter your receiver or purchase order number in the **Receiver No field** or **PO NO field**.
5.  On the **Toolbar**, click **Execute Utility**.

    A message, *Preparing to repair data, proceed?* appears.

6.  Click **Yes** to repair data.

    Click **No** to exit.