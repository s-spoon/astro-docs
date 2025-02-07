---

title: "made2manage tips.md"
draft: false
type: Article

---
- Install Made2Manage program files on each workstation rather than having every user run Made2Manage from a single network location. This helps maintain high network performance since only data transactions cross the network.
- Add the pages you use most often to Favorites. Once you open a page from Favorites, Made2Manage keeps that page's database tables open, allowing the page to open much faster the next time you access it.
- Avoid using transaction logging unless you encounter network issues or are changing network hardware. Transaction logging can slow down performance.
- SQL Server handles transaction logging. For more details, refer to Microsoft's SQL Server documentation.
- Set the Notifier timer to at least 15 minutes. The Notifier timer controls how frequently Made2Manage checks the file server for new Notifier messages. More frequent checks can slow down network performance.
- To learn how to set the Notifier timer, refer to the "Set a user's Notifier preferences" section in the Related Information.
- In the `M2MWin.ini` file (located in the `\Windows` directory), increase the **Forebuffer** setting and decrease the **Backbuffer** setting to allow Made2Manage to make better use of available RAM. You may need to test different Forebuffer and Backbuffer settings to determine the optimal values for your system. The **Forebuffer** controls the percentage of RAM that Windows uses for foreground processing, while the **Backbuffer** controls the percentage of RAM used for background processing.
