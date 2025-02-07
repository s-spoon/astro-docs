---

title: "Check capable to promise dates for items in quotation"
draft: false
type: Article

---

You can view the CTP dates and ATP quantities for items in a quotation.

**To check capable to promise dates for items in a quotation**

1. [Open the quotation]()

    To use the Made2Manage CTP functionality, you must have the Planning and Scheduling server installed and running.

    The quote must have a status of Open, and contain at least one item, or the CTP will not be available.

2. Click on the **Items** tab and then click the ellipsis under the **Action** column of the item you want to select.

3. Select **Grid Actions** > **CTP** to open the **CTP** window.

4. Select the items you want to include in the CTP calculation:

    - To include individual items, click the **Select** column checkbox next to each item.

    - To include all items, select the **Select** checkbox.

    - To remove all selections, clear the **Select** checkbox.

5. Verify the quantities and request date for each item selected:

    - The **Original Quantity** defaults from the **Quantity** field on the **Quote Items** tab, but you can change it if you need to use a different quantity.

    - The **Request Date** defaults from the Quote, but you can change it if necessary.

6. Select how to request the promise dates:

    - Select **Request a Promise date for EACH selected item** to request an individual date for each item selected.

    - Select **Request a Promise date for ALL selected item** to request a single date for all items selected.

7. Click the **Calculate CTP Dates** to calculate the following:

    - **CTP Date** – The date that you can promise your client each item requested.

    - **ATP Quantity** – The quantity currently available that you can promise to the customer.

8. Click the **CTP Audit** to display the **Audit File report**. You can review this report to see the actions taken by Planning and Scheduling. This report is similar to the one available in Advanced Planning or Advanced Scheduling.

9. Save or ignore CTP dates.

    - Click the **Save CTP Dates** to save the CTP date and CTP transaction date to the quote, and close the **CTP** window.

    - Click **Reject** to close the **CTP** window without saving the dates.

​