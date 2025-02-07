---
title: "User Permission Wizard (PERMWIZ) page"
draft: false
type: Article 
---

*See Also*

Use the **User Permission Wizard (PERMWIZ)** page to configure user permissions. Use this page to:

■ Assign or change permissions of a user or a group.

■ Add a group to another group.

■ Add a user to one or more groups.

■ Configure page permissions for one or more users or groups.

■ Define the pages that have no security.

■ Assign default permissions for new pages/reports.

■ Create table and field permission templates.

■ Configure table or field permissions for one or more users or groups.

{b} {color \#000000} Note: {/color} {/b} You can audit the changes made in the **User Permission Wizard (PERMWIZ)** page. To audit the changes, in the **Transaction Audit Configuration (TRANAUDT)** page, select the **Audit Type** for the page to:  
\- **Single**: A single entry is made for Insert and Delete transactions. Each field update in a row is audited.  
\- **Full**: An entry is made for every non-empty field value for Insert and Delete transactions. Each field update in a row is audited.

The **User Permission Wizard (PERMWIZ)** page has the following nine tabs in the order specified:

1\. **Introduction**: To get an overview of all the other tabs and understand the legend of the icons used on the various pages of the wizard.

2\. **Groups**: To define the hierarchy of the groups.

3\. **Users**: To assign users to groups or to remove users from groups.

4\. **Screens With Default Permissions**: To specify the pages/reports that must be excluded from user permissions and to assign default permissions for new pages/reports.

5\. **Screens**: To assign pages to one or more groups.

6\. **User Permission**: To assign or revoke company, group, and page-level permissions to users.

7\. **Tables Fields Template**: To create a list of tables and fields that can be used to configure permissions.

8\. **Tables Permission**: To assign table-level permission to users using the table templates.

9\. **Fields Permission**: To assign field-level permission to users using the field templates.

{b} {color \#000000} Tip: {/color} {/b} You can navigate to any tab by selecting it from the top of the wizard.

Made2Manage calculates user permissions additively. When a user belongs to multiple groups and the same pages/reports are added to the different groups with different permissions in each group, the permissions from all groups are assigned to the user. For example if **User A** belongs to the **Sales** group and the **Purchasing** group, and if the **Purchasing** group has **View**, **Edit**, and **Delete** permissions for the **Purchase Orders (PO)** page and if only **View** permissions are assigned to the **Sales** group for the **Purchase Orders (PO)** page, **User A** is assigned **View**, **Edit**, and **Delete** permissions for the **Purchase Orders (PO)** page.

When the user has individual page/report permissions outside a group, then that takes precedence over the group permissions. If **User A** is individually assigned **View**, **Edit**, **Delete**, and **Change Status** permissions for the **Purchase Orders (PO)** page, then this takes precedence over the permissions assigned to the **Sales** and **Purchasing** groups.