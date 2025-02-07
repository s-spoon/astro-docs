---

title: "Backing up and restoring data"
draft: false
type: Article

---

Regular backups protect your data from  loss due to  hardware failure. 

Backup and restore functionality is managed by SQL Server. For detailed instructions, refer to the Microsoft's SQL Server documentation.

[What are some good backup tips?](getting_the_most_from_your_backups.md)

If you can write DOS batch files to control your backup hardware, then you can use the Command Scheduler to automatically start your regular backups. You can also back up your data outside the schedule, such as before you install a new version of Made2Manage.
-	Use DOS batch files and the Command Scheduler to automate regular backups.
-	Perform manual backups as needed, such as before installing a new version of Made2Manage.

​
**Table name shorthand**

| Letters | Representation                 | Letters | Representation                                       |
|---------|--------------------------------|---------|------------------------------------------------------|
| **AP**  | Accounts Payable               | **PL**  | Financial planning                                   |
| **AR**  | Accounts Receivable            | **PO**  | Purchasing                                           |
| **BC**  | Bar Code                       | **PR**  | Payroll                                              |
| **CS**  | Company Setup                  | **RC**  | Receiving                                            |
| **EX**  | Executive Information System   | **QA**  | Quality                                              |
| **IN**  | Inventory                      | **QT**  | Quotations                                           |
| **GL**  | General ledger                 | **SO**  | Sales orders                                         |
| **JO**  | Job orders                     | **SC**  | Scheduling                                           |
| **LA**  | Labor                          | **SH**  | Shipping                                             |
| **MR**  | Material Requirements Planning | **SL**  | Customers, prospects, distributors, and salespersons |
| **OC**  | Order costing                  | **SY**  | System                                               |
| **OV**  | Overview reports               | **UT**  | Utility                                              |

### Hardware and network tips

-	Use an Ethernet network with a throughput of at least 10 MB per second, but preferably of 100 MB per second.

-	Ensure your file server and workstations are equipped with sufficient RAM. Workstations should have at least 32 MB and file servers must have at least 64 MB, depending on your environment.

-	Defragment hard disks regularly to optimize the use of swap and temporary files.

-	If using a Novell network, disable the "read after write" flag, to speed up disk saves by eliminating verification of written data.

-	If using Novell NetWare version 4.1, install Novell Client 32 drivers for optimal performance. Set Opportunistic locking to False to prevent system lock ups.
