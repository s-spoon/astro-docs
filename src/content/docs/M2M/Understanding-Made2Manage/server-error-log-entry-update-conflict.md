---

title: "Server Error log entry (R1-NA)"
draft: false
type: Article

---

If any update conflict occurs, then **Server error log** will look like:

When users receive errors, they can click the Send Report to share a copy of the error log entry with Made2Manage. An internet connection is required to send the error report.

An error log entry contains this information:

| Heading    | Contains       |
|----------|-----------|
| *date/time stamp* | The time and date the error occurred.                                |
| *error message*   | The error text.        |
| Error Code        | Information Made2Manage Systems, Inc., developers use for debugging. |
| User Name         | The user who encountered the error.     |
| Company Number    | The company that encountered the error.                              |
| Active Window     | The window in which the error occurred.       |

### Service order line item statuses

| Status     | Meaning  |
|-------------|-----|
| **A** Active  | The default status for new parts added to a service order.   |
| **T** In Transit / At Repair Site | The status of the Shipper associated with this service order has changed to Shipped. |
| **R** Returned from Repair Site   | The item is on an unconfirmed receiver. Both parts and serial numbers must match.    |
| **I** Installed  | The new component has been installed.       |

### Service order statuses

| Status     | Meaning      |
|----------|----------|
| **Started**               | Y The service order has just been added. You can delete it only while it is in this status. It remains in **Started** until you assign a due date and a field-service technician. |
| **Active**                | A due date and a field-service technician have been assigned to the service order. you can now create a sales order for this service order.  |
| **SO Opened**             | A sales order for this service order has been opened, changing its status to **Open**. |
| **Awaiting Field Report** | The line items of associated sales order's have been shipped. The associated M2M shipper status changes to **Shipped**. |
| **Completed**     | You have confirmed that you have received all parts needed to fulfill the service order. You must manually change the service order's status to **Completed**.  The system updates the sales order associated with this service order by modifying the sales order’s line items to include the actual costs and labor time associated with the service order.         |
| **SO Invoiced**           | The associated sales order’s invoice is posted to the general ledger.              |
| **Closed**                | The issue represented the service order represents has been resolved. You must manually change the service order's status to **Closed**. No additional activity can take place on a closed service order except to record problem and failure detail information.  A service order can only be closed if its status is **Completed** or **SO Invoiced**. If the **Post Expenses** check box was selected on the **Field Service Setup Information (CSFSM)** page, the system also posts any actual expenses entered on the **Report Time** tab (**TBD**)of the **Field Service Control (FSORD)** page. |
| **Cancelled**             | You must manually change the service order to cancel. You no longer need the service order, although the issue may remain unresolved.  You can only cancel a service order when it is in the **Active**, **SO Opened**, or **Awaiting Field Report** statuses. You can’t change, add line items to, or create sales orders against cancelled service orders.     |
