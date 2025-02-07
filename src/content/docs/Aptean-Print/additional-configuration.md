---
title: "Additional Configuration"
draft: false

type: Article
---

### Connect to Network Printers

Post the installation, configure the network printers, the following steps describe the local setup logon.

1.  Open Service Management Console.

2.  Select **Aptean Print Agent**.

3.  Right click on **Aptean Print Agent** and choose **Properties**.

4.  Navigate to **Log On** tab.

5.  select **This account** and provide the necessary credentials.

6.  Click OK.

    > [!Note] After applying service log on credentials, do a restart of services.

### Modified configuration file

Updating the application.yaml file, needs restart of the system afterward.

1.  Open **Service Management Console**.

2.  Select **Aptean Print Agent**.

3.  Right click on **Aptean Print Agent**.

4.  Click on **Restart**.

    > [!Note] If the service isn't running, click **Start** since the **Restart** option won't be visible.