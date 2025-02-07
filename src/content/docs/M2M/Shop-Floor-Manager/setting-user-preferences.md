---
title: "Setting user preferences"
draft: false
type: Article
---

Use the **User Preferences** (**SFMUPREF**) page to select the settings you want to use when you sign in to Shop Floor Manager. The User Preferences selected are saved only for the user currently signed in to SFM. Each user's settings can be unique. If you use an ID to log into a workstation and then let all the employees use this workstation, you can think of this as **Workstation** preferences.

Permissions to access **Shop Floor Manager** are based on a user's **Made2Manage** permissions. If a user has all permissions, or all **PRODAT** permissions, they automatically have permissions to all the **SFM** pages.

To set user preferences

1. Open the **User Preferences (SFMUPREF)** page.

   Select Production Management > Production Transactions > Shop Floor > User Preferences.

   *Or*

   *Search for* **SFMUPREF** *or* **User Preferences** *in the* **Navigation box** *and then select* **User Preferences**.

   The **User Preferences (SFMUPREF)** page appears.

2. Based on the permissions required, select from the following user preferences:

| **Field/Section**      | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Refresh Rate (Minutes) | Type or select the number of minutes you want the system to wait before refreshing the screen with updated data from Made2Manage. You can enter separate refresh rates for the **Supervisor Console** and the **Work Center Console** fields. The **Refresh Rate** is different than the **Status Generation Con- figuration** that you will set in the **Company Setup** window. The **Status Generation Configuration** controls how often the material available status is calculated. The **Refresh Rate** controls how often Made2Manage sends the information to Shop Floor Manager. To refresh your screen more frequently, you can always click **Shop Floor Manager** > **Generate Material Status**. |
| Highlight Colors       | Select the colors you want to use to identify a late job order and/or different types of material shortages. <ol><li> From the color picker adjacent to the parameter that you want to highlight, select the required color.                                                          <li>On the **Toolbar**, click **Save** to add the color, else click **Cancel**. <li>On the **Toolbar**, click **Color Highlights to Default**, to return all colors to their default. <br>If the supervisor and/or work center console is open, you must close and reopen to see the new colors.   |
| No Keyboard                                                        | Select this check box if no keyboard is available for the user. In the **Work Center Console**, a single mouse click will display the touch-screen keypad. If you do not select this option, you must double-click in a field to display the touch-screen keypad.                                                                       |
| Allow To Edit Notes                                                | Select this check box if you want users to be able to modify job order level shop notes and operation level notes in the **Work Center Console** page.                                                                                                                                                                                  |
| 'JO Complete' Disabled                                           | Select this check box if you do not want users to be able to record job completion without reporting labor.                                                                                                                                                                                                                           |
| 'Break' Disabled                                                   | Select this check box if you do not want **Break** to display in the **Work Center Console** page.                                                                                                                                                                                                                                      |
| Show 'Scan' Button                                                 | Select this check box if you want the **Scan On/Off** to be displayed in the **Work Center Console (SFMWC)** page when you clock on a job or clock off a job.                                                                                                                                                                        |
| Show Successful Transaction                                        | Select this check box if you want to display a message in the lower-right corner of the **Work Center Console** page when you complete a suc- cessful transaction.                                                                                                                                                                      |
| 'Clock On JO' Disabled (If Disabled Cannot Do Parallel Clocking) | Select this check box if you do not want the **Clock On JO** to display in the **Work Center Console** page. If you select this check box, you cannot clock on to any jobs in the Work Center Console unless you are a team lead. If you select this check box, you cannot select parallel clocking as the method for reporting labor. |
| 'Clock On Team' and 'Clock Off Team' Disabled                      | Select this check box if you do not want the **Clock On Team** and **Clock Off Team** to display in the **Work Center Console** page.                                                                                                                       
| Combine JO Queue | Select this check box if you want information listed on the **JOs Arriving**  And JO Arriving On JO Queue Tab Of SFMWC | tab also to be listed in the **JO Queue** tab in the **Work Center Console** page. |
| Show 'Complete Clock Off And Clock Out'  | Select this check box if you want the **Complete Clock Off And Clock Out** to display when you select the **Clock Off JO** in the **Work Center Console** page. <br>**Clock Off JO** is displayed only when you are in the process of clocking off a job. |

3.  On the **Toolbar**, click **Save** to save the entries, else click **Cancel**.