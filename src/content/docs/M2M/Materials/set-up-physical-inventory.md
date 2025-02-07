---

title: "Set up physical inventory"
draft: false
type: Article

---

Setting up for physical inventory means specifying certain methods and preventing inventory transactions from occurring during the counting days (so that you have stable quantities to count). You can also specify the type of tags you want to print, including tags for all item master primary locations, locations with an on-hand balance, or both.

Pre-populated tags are not created for items with inventory on-hand balance of zero.

**To set up physical inventory**

1. Open the Phy Inventory Set-up (PHYSET) page.

    - Select **Production Management** > **Production Transactions** > **Inventory** > **Physical Inventory**.

    Or

    - Search for **PHYSET** or **Phy Inventory Set-up** in the **Navigation box** and then select **Phy Inventory Set-up.**

    The **Phy Inventory Set-up (PHYSET)** page appears.

2. Prepare to set up physical inventory:

    1. Make the necessary changes.

    2. Click the **Facility** arrow and select the facility.

3. Specify the freeze dates and methods:

    1. In the **Freeze Date** box, type the date of the first day to prevent inventory transactions.

        Or click the icon at the end of the **Freeze Date** field. This displays the calendar. You can select the desired date.

        Or double-click in the field to populate the system date.

    2. Click the **Freeze Method** arrow and select to prevent transactions from occurring.

    3. In the **Un-Freeze Date** field, type the date to begin allowing transactions again.

        Or click the arrow at the end of the **Un-Freeze Date** field. This displays the calendar. You can select the desired date.

        Or double-click in the field to populate the system date.

4. In the **Post** **GL** **Date** field, type the date on which to post the updated inventory value to the general ledger.

    Or click the icon at the end of the **Post GL Date** field. This displays the calendar. You can select the desired date.

    Or double-click in the field to populate the system date.

5. Specify other methods:

    1. Click the **Parts Not Counted** arrow at the end of the field and select to ignore or zero-out any or all parts you do not count.

    2. To enforce lot control on tag entries, select the **Fully Enforce Lot Control On Tag Entries** check box.

    3. Click the **Archive Method** arrow at the end of the field and select whether to store or remove the inventory tag records after you have posted them.

6. Select the location from which you want to create physical inventory tags:

    1. To create physical inventory tags for all item master primary locations, select the **Item Master Primary Location** check box.

    2. To create physical inventory tags for locations with an on-hand balance, select the **On Hand By Location** check box.

    3. To create physical inventory tags for locations with an on-hand balance not equal to 0, then for all item master records, select the **Item Master Primary Location** and the **On Hand By Location** check boxes.

7. Under each location you select:

    1. To create physical inventory tags for stock items only, select the **Stock Items Only** check box.

    2. If you do not want to create physical inventory tags for obsolete parts, select the **Exclude Obsolete Items** check box.

        If you select to create physical inventory tags for both item master primary locations and parts with an on-hand balance, and you want to exclude obsolete items, select both **Exclude Obsolete Items** check boxes.

8. To zero out all the existing on-hand inventory quantities and on-hand dimensions for multi-dimensional inventory (MDI) parts, click the **Zero Existing Balance** on the **Toolbar**.

9. Click **Save** on the **Toolbar** to keep the physical inventory setup.

    The next step is to assign ranges of counting tags to areas or supervisors.



​