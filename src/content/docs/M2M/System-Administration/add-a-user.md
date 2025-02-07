---
title: "Add a user"
draft: false
type: Article
---

Each person who needs to use Made2Manage needs an account in the system. For each user, you can store a user name and password. You can also mark a user as an inactive user.

To add a user

1. Open the **User Management (USER)** page.

    1. Select **Utilities** > **Maintenance** > **User Management**.

    Or

    2. Search for **USER** or **User Management** in the **Navigation box** and then select **User Management**.

    **User Management (USER)** page appears.

2. On the **Toolbar**, click **New**.

3. In the **User Name** and **Initials** fields, type appropriate values.

    What makes a good password?

    >[!IMPORTANT] The values of the **Password** and **Initials** fields are case sensitive.

    >[!IMPORTANT] Ensure that you specify unique initials for the user.

    >[!TIP]  
    >You can avoid retyping the user name and password on each sign in. Select the **Allow Auto Login** check box in the **System Setup (CSSYS)** page. The **USER=** and **PASSWORD=** entries from the **M2MWin.ini** file are used for sign in.   
If the **Allow Auto Login** check box is selected and if your Domain user ID is mapped to your M2M user ID, you can automatically sign in without specifying the **USER=** and **PASSWORD=** entries in the **M2MWin.ini** file. For example, if your Domain user ID is **jsmith**, you can type this in the **Windows User** field, and map it to an M2M user ID, say **USER1**. Made2Manage then automatically signs you in as **USER1** using your Windows credentials.

    >[!NOTE]The password strength is indicated in the **Password** field. A weak password is underlined in red. A medium-strength password is underlined in orange, and a strong password is underlined in green.

4. By default, the **Status** button shows **Active**. Click the **Status** button, and select **Inactive** to mark the user as an inactive user.

    >[!NOTE]   
    >- Inactive users cannot sign in to Made2Manage.   <li> You cannot enable the **AlwaysRunning Option** for inactive users in the **M2M Processor Service Configuration (PROC)** page.  <li> Inactive users are not listed in the **User Permission Wizard (PERMWIZ)** page.  <li> You can make an inactive user active anytime.

5. In the **Last Name** and **First Name** fields, type the last and first names of the user.

6. In the **User Type** list, select the user type: **Beginner**, **Intermediate**, or **Advanced**.

7. Assign the default group for the user:

    1. Click the **Default Group** Lookup Reference.

    The **Lookup For Default Group** window appears.

2. Select the row that contains the required group, and click **Select**. Or, double-click the row that contains the required group.

    >[!NOTE]For more information about user groups, refer to the Group Maintenance page.htm).

    >[!TIP]Made2Manage comes with a permanent user group called **EVERYONE**. By default, the system assigns all Made2Manage users to this group. If you do not have any groups for your Made2Manage company or if you do not want the user to be assigned to any particular group, retain the default group **EVERYONE**.

8. To change the default company permission for the user:

    1. On the **Toolbar**, click **More Actions**.

    2. Select **More Actions** \> **Actions** \> **Permission**.

        On the **User Permissions** page, select the company.

        >[!NOTE] Made2Manage, by default assigns a user of type **Advanced**, **True** permission at the root level. The system, by default assigns users who belong to other types, **False** permission at the root level.

         >[!NOTE] Made2Manage, by default assigns a new user permission to **00** company, which means all companies.

9. Set operational preferences:

    1. In the **Message Duration (Sec)** field, type or select the number of seconds an error message window remains on the page for this user.

         >[!TIP]Type **0** to ensure that Made2Manage always waits for the user to manually clear error messages. For Made2Manage to run unattended, set this to anything but **0**.

    2. In the **Inactivity Timeout (Min)** field, type or select the number of minutes the user can be inactive before Made2Manage signs the user out.

         >[!TIP]Type **0** to ensure that Made2Manage never signs the user out automatically.

        3 . Select the **Automatically Add Detail After Adding Master** check box to automatically switch to the **Add** mode for the **Detail** (line items) tab after you save information in the **Master** tab.

10. Use the other tabs in the **User Management** page to set the other user preferences.

11. On the **Toolbar**, click **Save** to save the user information.

​