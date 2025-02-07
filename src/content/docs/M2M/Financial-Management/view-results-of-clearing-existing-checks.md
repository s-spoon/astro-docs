---

title: "View results of clearing existing checks"
draft: false


---

After you set a clear date for existing withdrawals, you can check for errors.

You can view a summary of cleared transactions. For more information see the **Related Information**.

**To check results of clearing existing checks**

1.  View the log file:

    1.  In Windows Explorer, find the **CLRCHKS.TXT** file in the directory containing the data that the **ClearChecks** utility was executed.

    This is usually **X:\\M2Mwin**.

    where, **X** is the drive letter that stores your Made2Manage data.

    If the **CLRCHKS.TXT** file does not appear in your data directory, check the root directory of the machine where you run the utility.

    2.  Open the **CLRCHKS.TXT** file.

2.  Read the **CLRCHKS.TXT** file for records that encountered errors. To locate errors, find messages containing the word "error."

3.  Fix the errors.

    You can fix many errors in Made2Manage's various financial windows, but you must fix other errors in the database.

4.  Run the **Clearchecks** utility until all errors are resolved. If the problem persists, contact customer support.
