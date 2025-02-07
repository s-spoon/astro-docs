---

title: "Assign shipper serial numbers to RMA items"
draft: false
type: Article

---

Use the **Assign Serial Numbers (RMASERL)** window to assign shipper serial numbers to RMA items. While adding shipper serial number in the **Assign Serial Numbers (RMASERL)** window, before saving, you can edit the quantities for each shipper serial number.

**To assign shipper serial numbers to RMA items**

1. In the **Return Material Authorization (RMA)** page, click the **Items** tab.

2. In the grid, select the item for which you want to assign the shipper serial numbers.

3. On the **Toolbar**, click **More Actions**.

4. Select **More Actions** > **Actions** > **Serial Numbers**.

    The **Serial Numbers (RMASERL)** window appears.

5. On the child toolbar, click **New**.

    If you have setup rules for the automatic generation of the shipper serial numbers and enforce the rules, select the **Default To Auto Generate Form** checkbox in the**Auto Generate Shipment Serial Number Setup (SSNAGS)** page, the values setup appear as non-editable values in the **Assign Serial Numbers (SERL)** page.

    If you have setup rules for the automatic generation of the shipper serial numbers and have selected the **Default To Auto Generate Form** checkbox but have not enforced the rules in the **Auto Generate Shipment Serial Number Setup (SSNAGS)** page, the values setup appear as editable values in the **Assign Serial Numbers (SERL)** page.

6. Generate the shipper serial numbers:

    If you do not want to auto-generate the shipper serial numbers, perform the following steps:

    a. In the **Serial Number** box, enter the serial number.

    b. In the **Serial Quantity** box, enter the quantity of the item that you plan to ship with that shipper serial number.

    The quantity entered must be lesser than or equal to the quantity returned.

    **To auto generate the shipper serial numbers, perform the following steps:**

    a. Select the **Enable Auto Generate SN** checkbox.

    The **Auto Generate SN Values** area is displayed.

    b. Specify any of the following values if required and if they are editable:

    - Prefix Portion of SN

    - Suffix Portion of SN

    - Date Code Format

        If you specify a date code format, select the **Century** checkbox to set the year in the date to a four-digit year (yyyy). Clear the **Century** checkbox to set the year to a two-digit year (yy).

    c. In the **Auto Generated Number Begins At** box, enter the starting shipper serial number, if required.

    d. In the **SN Number Increment** box, specify the number by which the shipper serial number must be incremented, if required.

    e. In the **Qty of SN To Generate** box, specify the quantity of parts for which you want to generate the shipper serial numbers.

    The quantity entered is updated in the main shipper serial number quantity field.

    The quantity entered must be lesser than or equal to the quantity returned.

    f. In the **Default Qty/SN To Generate** box, specify the number of parts for which you want to assign the same shipper serial number.

    g. On the child toolbar, click **Auto Generate SN**.

7. On the toolbar, click **Save** to save the changes.

    Or click **Cancel** to discard the changes made.

    If the total quantity does not equal the quantity to be returned, a dialog box appears prompting if you want to proceed with the saving. Click **Yes** to confirm. Click **No** to discard the changes.

    The shipper serial numbers generated are listed in the **Assign Serial Numbers (RMASERL)** page.

    [!Note] You can select the shipper serial number only while entering shipping and not when retuning the item.
M2M does not allow you to enter more than the actual quantity returned. After adding the shipper serial number, M2M allows you to modify the quantity but does not allow you to add the same shipper number again.
   

## Change the status of RMA

1. Click the **General** tab.

2. Click the **Status** dropdown to change the status.

3. To set up the status

- **Ready for Credit** is a manual status which indicates that a credit memo can be created for the RMA. When an RMA is changed to this status, it will appear in the “RMA’s Ready for Invoicing” queue. It changes to **Closed** after a credit memo is created.

- **Cancelled** - If any transactions have been completed for RMA, user can not delete the RMA, but can only change the status of the RMA to ‘Cancelled. When canceling an RMA, any related SO and/or JO will also be cancelled automatically.

    A warning message "*No further transactions will be allowed for a closed or cancelled RMA*" appears.

    The options **Started**, **Open**, **Ready For Credit**, **Cancelled**, and **Closed** is enabled based on the selection of Instructions in the Items tab.

4. Change the status of the RMA from **Started to Open**. By default, **Open** status is selected.

5. Click **Proceed** to accept the changes.

   Or Click **Cancel** to exit.