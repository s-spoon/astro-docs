---
title: "Set up a company logo (R1-NA)"
draft: false
type: Article
---

You can set up Made2Manage to print your company's logo on reports and documents. The logo files must be in Windows Bitmap (**.bmp**) format. You need two logos for each company:

| File name   | Size                   | Contents and usage                                                                    |
|-------------|------------------------|---------------------------------------------------------------------------------------|
| Logo.bmp    | 3/8 inch by 1 1/4 inch | The logo without address information, for use in reports.                             |
| Logodoc.bmp | 1 inch by 3 inches     | The logo with address information, for use in documents you send outside the company. |

If your logo is larger or smaller, Made2Manage scales it to fit. Scaled logos frequently are not very clear. For best results, create a logo that's the size Made2Manage needs.

An unhandled exception occurs if the logo files are larger than the SSRS default settings and are not uploaded. Refer to [To configure the logo file size](#to-configure-the-logo-file-size) for instructions about handling this error.

### To set up the company logo for use in Made2Manage documents

TBD-Copy the **Logo.bmp** and the **Logodoc.bmp** files to your company’s data directory, which is the Dataxx folder of your \<SysPath\>.

### To set up the company logo for use in Made2Manage reports

1. Copy the **Logo.bmp** and the **Logodoc.bmp** files to the company’s data directory, which is the Dataxx folder (where xx corresponds to the company number) of your \<SysPath\>.

2. Execute the M2M Report Deployment wizard to upload the company logo to your report server. For more information about using the M2M Report Deployment wizard, refer to the *M2M Report Deployment Wizard User Guide*.

>[!TIP]In the M2M Report Deployment wizard, select the **Deploy Images** check box to deploy the company logo.

### To configure the logo file size

1. Locate the SSRS **Web.Config** file.

    >[!TIP]This file is located in the \<Installation directory\>\Reporting Services\ReportServer folder.

2. Copy the file and rename the copy as **web.config_Pure**.

3. Open the **Web.Config** file with administrator rights, using a text editor like Notepad.

4. Locate the following line:

    \<httpRuntime executionTimeout="9000" /\>

5. Change the line to:

    \<httpRuntime executionTimeout="9000" maxRequestLength="16000" /\>

6. Save the changes made to the file.

7. Restart the SQL Server Reporting Services.

​