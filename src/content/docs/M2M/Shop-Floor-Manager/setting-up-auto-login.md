---
title: "Setting up auto login"
draft: false
type: Article 
---

Shop Floor Manager requires the use of a mouse or a touch screen monitor as a minimum requirement. Though optional, we recommend using a keyboard.

If you select to have your workstation set up without a keyboard, you must set up your login access to automatically run when you start Shop Floor Manager.

There are limitations and restrictions. Following is a list of examples:

-   You must use the auto login feature. Employees will be unable to log in to the Shop Floor client without a keyboard.
-   Employees will be able to clock in or out, and on or off jobs without a keyboard.
-   The workstation can only be used for one work center. Other users will be unable to log in to Shop Floor Manager without a keyboard.
-   Anything updated in a table requires a keyboard.
-   Supervisors will not be able to change priorities or check on or update information from the work center without a keyboard.

## To set up auto login

1.  Log on to the computer as a Windows user.
2.  Exit all applications.
3.  Browse and open the m2mwin.ini file:
    1.  From the Windows **Start** menu, select **File Explorer**, and then double-click **Local Disk (X:)** icon where X: is your computer’s local drive.
    2.  Double-click the **Windows** folder.
    3.  Double-click the ```m2mwin.ini``` file to open the file.
4.  Add the following information to the [System] section of the ```m2mwin.ini``` file:
    1.  **UserName** = Made2Manage user account (For example: JSMITH).
    1.  **Password** = The password of the account.

        This setting is in plain text and can be viewed by anyone with access to the ```m2mwin.ini``` file.

5.  On the **File** menu, click **Save** to save your changes. Or, click **Exit** and select **No**

    to exit from the m2mwin.ini file without saving your changes.

6.  Sign in to Shop Floor Manager.

    You will be logged in to Shop Floor Manager with the specified username.