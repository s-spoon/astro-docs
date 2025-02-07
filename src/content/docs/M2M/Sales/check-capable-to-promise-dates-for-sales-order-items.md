---

title: "Check capable to promise dates for sales order items"
draft: false
type: Article

---

You can view the CTP date the ATP quantity for items on a sales order.

**To check capable to promise dates for sales order items**

1. Open the sales order.

    To use the Made2Manage CTP functionality, you must have the Planning and Scheduling server installed and running.

    The Sales Order must have an **Open** status and contain at least one item, or the CTP will not be available.

    When calculating CTP dates, the requested dates must be within the schedule horizon, including the shipping buffer. If they are not, the dates cannot be calculated.

2. Click the **Items** tab.

3. Select the item

4. Click the ellipsis under the **Action** column.

5. Select **Grid Actions** > **CTP** to open the **CTP** window.

6. Select the items you want to include in the CTP calculation:

    - To include individual items, click the **Select** column checkbox next to each item.

    - To include all items, select the **Select** checkbox.

    - To remove all selections, clear the **Select** checkbox.

7. Verify the quantities and request date for each item selected:

    - The **Order Quantity** defaults from the item **Quantity** field on the **SO Items** tab, but you can change it if you need to use a different quantity.

    - The **Request Date** defaults from the Sales Order, but you can change it if necessary.

8. Select how to request the promise dates:

    - Select **Request a Promise date for EACH selected item** to request an individual date for each item selected.

    - Select **Request a Promise date for ALL selected item** to request a single date for all items selected.

9. Click the **Calculate CTP Dates** to calculate the following:

    - **CTP Date** – The date that you can promise your client each item requested.

    - **ATP Quantity** – The quantity currently available that you can promise to the customer.

10. Click the **CTP Audit** to display the **Audit File report**. You can review this report to see the actions taken by Planning and Scheduling. This report is similar to the one available in Advanced Planning/Advanced Scheduling.

11. Accept or reject the CTP dates.

    - Click **Accept** to save the CTP dates to the Sales Order, and close the **CTP** window. If you changed the request date or quantity, the item will be updated on the Sales Order. The system will check the **CTP Approved** box on the **Sales Order Items** tab and the **Sales Order Releases (SORELS)** page.

    - Click **Reject** to clear all of the CTP dates. The **CTP** window will remain open so you can change the item selections or request dates.

​