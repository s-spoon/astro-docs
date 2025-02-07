---  

title: "Settings"  
draft: false 
type: Article

---
Click ![](../assets/Getting-started/image059.png) icon on top right corner  to view the Settings. This option allows you to modify the default settings to your personal preferences and displays information specific to you. 

Under the **Settings** section you can see the below information : 

  * **User ID** You can see the user name of the user role who is logged in. 
  * **DB** The database and plant name is displayed under: **DB:....., Plant**
  * **Change Password** allows you to change password. If selected, you can see **Change Password** pop up. In the pop up:
  * You can enter **Current Password** field with the existing password.
  * You can enter **New Password** field with the new password. This should meet the password acceptance criteria. 
  * You can re enter the new password in **Confirm Password** field to confirm. 
  * You can click on **Save** to update the new password. **Password Changed Successfully! Please Relogin.** message appears. You can re-log in with the new password.
  * You can click on **Cancel** to close the pop up without updating.
  * **About EAM** allows you to view the information about Aptean EAM application such as **Company Name, Web Address, Address, Time Zone, Corporate Currency, Plants and Contact** details in a pop up. 

  * **Edit Preferences:** Click Edit preferences to customize the application. The **Preferences** window opens and you get below options:

    ![](../assets/Getting-started/Edit_pref.jpg)

Field |  Description  
---|---  
Default Store Location |  It is displayed only if you have the **Multiple Warehousing** option activated. You can select default store locations from the drop-down of store locations that you have got access.   
Select Date Format |  You can select the date format as **MM/DD/YYYY** or **MM-DD-YYYY** or **DD/MM/YYYY** or **DD-MM-YYYY** or **YYYY-MM-DD**. The format selected will be applied throughout the application.   
Default Email to  | You can enter the default email Id in Email Address field. The messages will be sent to that default email.  
When Entering Requisition Lines, Copy Data From Previous Line |  If you have access to Requisition Module, you can click the check box. This allows the application to copy the fields values from the previous line to a new line entered at the time of new line creation. 
|Show Time Zone Alert|The toggle button introduces a **Do Not Show Again** checkbox on the ‘*TimezoneDiffMsg*’ popup. By selecting this checkbox, users can prevent the time zone mismatch message from appearing.|  
View mode  |  The option ‘View Mode’ is a radio button, and its values are ‘Default’ and ‘Compact’. The purpose of this field is to reduce white spacing in the application. The mode is set to **Default** , user can change to **Compact** mode. <br> Default mode has 2 columns with more white space. <br> Compact mode has more compressed view and less white space such as having more fields in a card in one row (number of columns - 3).<br> **Note**: At Plant level, the setting is Default Mode. User can change it to Compact Mode. <br> **Note**: Changing the spacing mode requires refresh/ relaunch of application to affect the changes. Click Save to continue.  
Color Theme  |  A drop-down is available to select color theme. This is available only when Standard Theme is selected (Disabled in Dark Mode). Each theme has different background color, required /optional field color, title header, text/ label color. The three options available are: <ul> <li>Dark-Dark Theme</li> <li> F&B-F&B Theme</li><li> Standard -Standard Theme
Font Size |  The option is used to change the font size as Small, Medium, Large, Custom. Next to the font selection field, the new field 'Font size (%)' gives the value of the selected font size. The default setting is 100%. User can choose from the below options to change the Font size: <br> <table><td colspan="2">
  
  **Font** | **Font Size** | **Font Value Editable** 
  ---|---|---  
  Custom-Custom | 75% to 125% | YES   
  Default-Default | 100% | NO   
  Large-Large | 125% | NO   
  Small-Small  | 75% | NO  </table>Ex: If you select Small-Small, the font size value is fixed to 75% and if Custom-Custom is selected, the font size value can be set between 75% and 125%.<br> **Note** Changing the font size requires refresh/ relaunch of application on Save. Click Yes to continue.  </td>
  Clear User Cache |  Click to clear user cache from the browser. **User cache cleared** confirmation message appears. Click **OK** to exit the alert window. 
Clear Plant Cache  |  Click to clear plant cache from the browser. **Plant cache cleared** confirmation message appears. Click on **OK** to exit the window.   
Cancel |  Click to exit out **Preferences** window.  
Save |  Click to save changes made in **Preferences** window.  
  
  * **Cloud Printer Preferences** allows the user to set up the Default Printer and Favorite Printer List. Refer, to know how to set Cloud Printer preferences.

    >[!Note]
    >The **Cloud Print Preferences** setting is enabled, only if the plant is setup
to use cloud print.

  * **Notifications** allows you to enable the notifications and subscribe to different users/job messages. See [Notifications](Settings.md#notifications) for more details.

  * **Change Plant** allows you to change the plant. When you click **Change Plant** , a window opens with drop down and displays all the plants that you have access. Select the required plant and click on **Save** to update the new plant. If saved, your screen will be refreshed and reloaded. You can click on **Cancel** to exit the window.
  * **Change Language** allows you to change the language. When you click **Change Language** , a window opens with drop down and displays all the languages that you have access. Select the required language and click on **Save** to update the new language. If saved, your screen will be refreshed and reloaded. You can click on **Cancel** to exit the window.
  * **About** allows you to view the information about Aptean EAM application such as **Application Version, Assembly Version** and **Build Id**. 
  * **Contact Us** allows you to get in touch with the support team. You can view the Contact information in a separate pop up.
  * **Log** allows you to view all the logs generated in the application in this logged in session. This information can be used to provide additional details to the support team to solve any issues which you might have encountered. You can view the logs for different time period. You can select the type of log (**All Logs, Info, Warning, Accessibility, Fatal, Error**) in Log Type field. Only those logs will be displayed based on the selection. You can search for a specific log in **Filter...** field. You can click on **Delete** Icon to clear all logs and **X** button to close the log window.

  * **Signoff** allows you to log out of the application. For more information, see the [Logout](Login.md#logout) section. 

### Notifications

Notifications screen consists of the following sections: You can click on
**Save** to update the changes.

Settings

Enable Message Notification toggle is available only if you have **Messaging**
option activated in EAM (Back end). If the toggle is enabled, you can see the
following :

  * Send My Messages via E-Mail: Enable this check box to sent messages to your email. 
  * Merge Into Single Message: Enable this check box to merge all messages into a single message.
  * Delete Info/User messages after (days): Defines the interval of time in days to delete messages from the Message Log window. 

#### Subscribe to User Messages

This grid displays the list of users with Id and Name. You can subscribe or
unsubscribe the required user/s to view their messages.

You can perform any of the following actions:

  * **Subscribe** : Click + icon to open Add Employee panel. You can enter or search the required employee in **Employee*** field and click **Add** to add that employee to the grid. You can click on Cancel to discard the panel. 
  * **Unsubscribe** : You can select one or multiple user ID from the grid and click on **Unsubscribe**. The confirmation panel appears. You can click on the following:
    * **Yes**: to unsubscribe the selected user ID. Unsubscribed user ID will be removed from the grid. 
    * **No** to remove the panel. 
    * Send Email to notify the concerned person
  * **Select/Select All**: You can select the required user or all users in the grid.

#### Subscribe to Job Messages

You can select or unselect each components to subscribe or unsubscribe to that
job function/s.  
Only the subscribed job function messages will be visible to you.  
The list of job functions can be configured in the **Validation Codes** in
Setup and Security module.

