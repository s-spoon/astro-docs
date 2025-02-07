---
title: "Change user information"
draft: false
type: Article
---

You can change a user's settings, including the user's password, at any time.

To change user information

1. Select the user.

2. Make the necessary changes:

    - In the **Initials** field, type the new information to change the initials.

        You can avoid retyping the user name and password on each sign in. Select the **Allow Auto Login** check box in the **System Setup (CSSYS)** page. The **USER=** and **PASSWORD=** entries from the **M2MWin.ini** file are used for sign in.   
        If the **Allow Auto Login** check box is selected and if your Domain user ID is mapped to your M2M user ID, you can automatically sign in without specifying the **USER=** and **PASSWORD=** entries in the **M2MWin.ini** file. For example, if your Domain user ID is **jsmith**, you can type this in the **Windows User** field, and map it to an M2M user ID, say **USER1**. You are then automatically signed in as **USER1** using your Windows credentials.

        The **Initials** field is case-sensitive.

        If you select the **Enforce Password Policy** check box in the **System Setup (CSSYS)** page, while changing the password, ensure that it does not match the previous three passwords set for the user.

        >[!NOTE]The **New Password** field indicates the password's strength. A weak password is underlined in red. A medium-strength password is underlined in orange, and a strong password is underlined in green.

        Ensure that you specify unique initials for the user.

    - The **Status** button shows **Active** by default. Click the **Status** button, and select **Inactive** to mark the user as an inactive user. Select **Active** to make an inactive user active.

        You cannot make the current user inactive.

      >[!NOTE] You cannot make a user inactive if active transactions exist in any of the following pages: <li>**Salesperson (SLPN)**: If a sales manager is defined. <li>**Master ECO Summary (ECOMAST)**: If other than cancelled / completed data exists. <li>**Approval Maintenance List (ECOAPP)**: If the user name exists in the ECO approval list. <li>**Activity Report (BAACTV)** : If any incomplete activity exists for the user.  <li>**AP Payment EFT (APEFT)**: If any non-voided EFT data exists.  <li>**Notifier™ Overview (NOVW)**: If any unfired records exist.  <li>**Events & Actions (EANOTI)**: If an entry is available in the page or in recipients for the user.  <li>**Command Scheduler (CMDS)**: If any command is defined for execution by the user.

        >[!NOTE] <li>Inactive users cannot sign in to Made2Manage.  <li>You cannot enable the **Always Running Option** for inactive users in the **M2M Processor Service Configuration (PROC)** page. <li>Inactive users are not listed in the **User Permission Wizard (PERMWIZ)** page. 

    - In the **User Type** list, select the new user type.

    - In the **Message Duration (Sec)** or **Inactivity Timeout (Min)** fields, type or select values to change message duration or inactivity timeout.

3. On the **Toolbar**, click **Save** to save your changes.

​