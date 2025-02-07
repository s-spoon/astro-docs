---
title: "Turn automatic posting on or off"
draft: false
type: Article
---

Turn automatic barcode posting off at times such as month-end or year-end closing when you do not want any new postings to appear. Use the **Bar Code Posting (SFM BCP)** button to turn posting on and off.

While posting is off, the collection program continues to collect information, storing it where the posting program can access it. When you turn posting back on, the posting program retrieves the stored information and posts it to Made2Manage.

When posting is turned on, the posting program automatically posts the information to Made2Manage. Made2Manage creates a log file for each company for each day to keep track of the barcode postings. The system creates the XML log files in the \<SYSPATH\>/Logs folder. The naming format for the log files is **BarCodeLog_xx_yyyymmdd**, where **xx** is the company number and **yyyymmdd** is the date on which the log file was created.

To turn barcode posting on or off from within Made2Manage

1. Click on the **User** Settings.

2. Select **SFM BCP**.

3. Use the toggle button to enable or disable the **Bar Code Posting**.