---  

title: "Sales Order Acknowledgement Queue (SOACKQ) Page"  
draft: false 
type: Article

---

The **Sales Order Acknowledgement Queue (SOACKQ)** page is available only if you have enabled **Advanced Scheduling**. You can view this page only if you have assigned permissions for the page in the **User Permission Wizard (PERMWIZ)**. For more information, see **Assign default permission to the new windows/reports** and **Manage user permissions**.

Sometimes, you may not be able to meet the promised shipping date for a **Sales Order (SO)**. When you execute scheduling, the shipping date suggested by the system may differ from the promised shipping date. Use the **Sales Order Acknowledgement Queue (SOACKQ)** page to review and update the SO shipping dates based on the scheduling results.

## Tabs on the Page
This page has two tabs:
- **Newly Scheduled**: Displays the newly scheduled SOs.
- **Late Orders**: Displays the existing SOs whose shipping date has been modified.

The **Sales Order Acknowledgement Queue (SOACKQ)** page displays all the newly scheduled SO items in the **Newly Scheduled** tab, regardless of their lateness. For rescheduled sales orders, the **Late Orders** tab lists only the rescheduled items that are either:
- Going to be late (delayed)
- Inside the shipping buffer (the shipping date is likely to be delayed)

The **Late Orders** tab does not list rescheduled sales order items that will be shipped on time.

## Grids on the Tabs
The grids on the two tabs display the following data:
- **SO Number**
- **SO Item Number**
- **SO Release Number**
- **Part Number**
- **Part Revision Number**
- **Late type** indicating whether the schedule is:
  - **On Time**
  - **Late**
  - **Inside Ship Buffer**  
  > **Note**: Late SO items are highlighted in red.

- **Current Ship Date** of the SO line item
- **Scheduled Date** of the SO line item
- **Suggested Ship Date** (Scheduled Date + Shipping Buffer)

You can:
- Filter the SOs displayed in the tabs
- Modify the suggested shipping date if required
- Mark the changed shipping date as the final shipping date

After you mark a shipping date as final, the SO item is not considered for further scheduling and is no longer listed in the **Sales Order Acknowledgement Queue (SOACKQ)** page.

## Customer Notification
After you update the shipping date, the customer receives a notification regarding the change, provided the following conditions are met:
- You must have added the **SALES ORDER DUE DATE CHANGED** event for the **SalesOrder** object in the **Events & Actions (EANOTI)** page.
- You must have added the customer as an external recipient of the notification.
- You must have configured the customer's email or SMS settings.

> **Tip**: For more information about configuring events and actions, see **Create alerts for existing Events & Actions entries**. For more information about adding customer details, see **Add a customer**.

You can also view the changed dates in the **Sales Order Document (RPSO)** report.
