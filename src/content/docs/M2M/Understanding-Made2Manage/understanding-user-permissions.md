---

title: "Understanding user permissions"
draft: false
type: Article

---

User permissions are an essential part of your system's security and help to protect sensitive business data by controlling user access to specific pages. For example, you can restrict engineers from running general ledger reports or changing sales orders items. The following permissions can be assigned to each user for each page:

- **View Permission**: Open the page to view the records. For example, view job orders. Restricting this permission prevents the user from perform any actions on the page.

- **Edit Permission**: Modify records on the page. **For example,** change an item in a quotation.

- **Add Permission**: Add new records to the page. **For example,** add a **Sales Order (SO)**.

- **Change Status Permission**: Change the status of the record., For example, change the status from **Open** to **Completed**.

- **Delete Permission**: Remove records from the page. **For example,** delete a purchase order when a customer cancels an order.

- **Author Override Permission**: On the **ECO Summary (ECOSUM)** page, this permission allows users to make changes to **Engineering Change Orders (ECOs)** that they haven't authored.

- **Approval Permission**: Approve records so they can move to a new phase. **For example,** approve a quotation so a salesperson can submit it to a prospect.

To assign permissions, use the **User Permission Wizard (PERMWIZ)** page. Made2Manage groups related pages in a parent-child hierarchy. Related pages can inherit permissions from their parent. Additionally, all pages can inherit permissions from the ROOT grandparent page. The **User Permission Wizard** page shows hierarchy by indenting child pages two characters under its parent.

See an example

-   To manage permission, use the **Inherited** check box on the **User Permissions** page to control whether a page inherits permissions from its parent. 
-   To open the page, go to **User Management** page.
-   Select **More Actions** > **Permission**. <br>  The **User Permissions** page appears.


​