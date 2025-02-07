---
title: "Shipper Data Utility"
draft: false
type: Article 
---

You can run this utility to fix several kinds of data issues related to sales order shippers.

The Shipper Data Utility page has three options:

-   **Fix Order/Ship Quantities**

    This option looks at the sales order entered to rebuild make, buy, and stock quantities and the shipped and to ship quantities for each sales order line item. This is the option you would run when you are unable to ship a sales order because the supply orders for this demand are not linked properly.

-   **Fix Invoiced Quantities**

    This option looks at invoiced items in the AR items table and fixes invoiced quantities in sales order and shipper tables for each line item. This is the option you would run when you are unable to invoice a sales order shipper.

-   **Remove Shipped Goods Not Invoiced**

    This option sets the selected shippers to a status of invoiced, thus removing them from the Shipped Goods Not Invoiced report. Use this option to clear a shipper that you do not intend to invoice so that it will not show up in the selection of available shippers to invoice.

**To Fix Oder/Ship Quantities**

1.  Open the Shipper Data Utility page.
    1.  Select **Utilities** \> **Maintenance** \> **Data Utilities** \> **Shipper Data Utility**.

        Or

    2.  Search for **Shipper Data Utility** in the Navigation box and select **Shipper Data Utility**.

        **Shipper Data Utility** page appears.

2.  In the Utility Options list, select **FIX ORDER/SHIP QUANTITIES**.

    {b} {color \#000000} Note: {/color} {/b} The **Document type** field has the default value set as **Single SO**.

3.  In the SO Number field, type the sales order number.

    Or, click the **SO Number** lookup reference, and select the sales order from the **Lookup for Sales Order** window.

    {b} {color \#000000} Tip: {/color} {/b} You need to enter a valid document number. Or it will throw errors in the Audit file.

4.  On the **Toolbar**, click **Execute**.

    A message *Preparing to Repair Data. Proceed?* appears.

5.  Click **Yes** to continue to the data correction.

    Click **No** to exit.

    When the data correction is done, A message *Process is completed. Do you want to download the Audit file?* appears.

6.  Click **Yes** to download the audit file.

    Click **No** to exit.

    {b} {color \#000000} Tip: {/color} {/b} If you want to download the audit file for the last audit run any time later, click **Audit** on the **Toolbar**.

**To Fix Invoiced Quantities**

1.  Open the Shipper Data Utility page.
    1.  Select **Utilities** \> **Maintenance** \> **Data Utilities** \> **Shipper Data Utility**.

        Or

    2.  Search for **Shipper Data Utility** in the Navigation box and select **Shipper Data Utility**.

        **Shipper Data Utility** page appears.

2.  In the Utility Options list, select **FIX INVOICE QUANTITIES**.

    {b} {color \#000000} Note: {/color} {/b} The Document type field has the default value set as **Single SO**.

3.  In the SO Number field, type the sales order number.

    Or click the **SO Number** lookup reference and select the sales order from the **Lookup for Sales Order window**.

    {b} {color \#000000} Note: {/color} {/b} You need to enter a valid document number. Or it will throw errors in the Audit file.

4.  On the **Toolbar**, click **Execute**.

    A message *Preparing to Repair Data. Proceed?* appears.

5.  Click **Yes** to continue to the data correction.

    Click **No** to exit.

    When the data correction is done, A message *Process is completed. Do you want to download the Audit file?* appears.

6.  Click **Yes** to download the audit file.

    Click **No** to exit.

    {b} {color \#000000} Tip: {/color} {/b} If you want to download the audit file for the last audit run any time later, click **Audit** on the **Toolbar**.

**To Remove Shipped Goods Not Invoiced**

1.  Open the Shipper Data Utility page.
    1.  Select **Utilities** \> **Maintenance** \> **Data Utilities** \> **Shipper Data Utility**.

        Or

    2.  Search for **Shipper Data Utility** in the Navigation box and select **Shipper Data Utility**.

        **Shipper Data Utility** page appears.

2.  In the **Utility Options** list, select **REMOVE SHIPPED GOODS NOT INVOICED**.
3.  In the **Document type** list, you can select one of the following options
    -   **Single Shipper**: Select this option to move a single shipper to the invoiced status.
        1.  Type the shipper number in the Shipper field.

            Or

        2.  Click the **Shipper** lookup reference and select the shipper from the **Lookup for Shipper window**.
    -   **Shipper Range**: Select this option to move a range of shippers to the invoiced status. Selecting this option enables the **From** and **To** fields.
        1.  Type the first and last value of the shipper range in the From and To fields.

            Or

        2.  Select the first and last value of the shipper range from the **From** and **To** lookup reference.
4.  On the **Toolbar**, click **Execute**.

    A message *Preparing to Repair Data. Proceed?* appears.

    {b} {color \#000000} Note: {/color} {/b} You need to enter a valid document number. Or it will throw errors in the Audit file.

5.  Click **Yes** to continue to the data correction.

    Click **No** to exit.

    When the data correction is done, A message *Process is completed. Do you want to download the Audit file?* appears.

6.  Click **Yes** to download the audit file.

    Click **No** to exit.

    {b} {color \#000000} Tip: {/color} {/b} If you want to download the audit file for the last audit run any time later, click **Audit** on the **Toolbar**.