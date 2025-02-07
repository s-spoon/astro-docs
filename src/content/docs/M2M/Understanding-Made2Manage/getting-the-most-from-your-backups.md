---

title: "Getting the most from your backups"
draft: false
type: Article

---

For the best protection against losing data due to hardware failure, human error, or natural catastrophe, back up regularly and follow other good backup practices. Here are some backup tips:

- How many days' work are you willing to recreate from scratch? You should back up that often. Daily backups are the best insurance.

- Keep a copy of your backup in three places:

- On your computer or on a network drive.

- On storage media you keep in your office.

- On storage media you keep in a different building, in case of fire or natural catastrophe.

- Buy a backup device that has enough capacity to back up all of your data on a single disk or tape.

- Disks and tapes wear out. Replace your backup disks or tapes regularly. Occasionally check for worn-out media by trying to read information from them.

- Rotate several sets of backup disks or tapes so you have an older version in case one fails. Use one disk or tape for each day of the week.

**Made2Manage tips**

- Install Made2Manage program files on each workstation rather than having every user run Made2Manage from a single network location. This keeps network performance high because only data transactions cross the network.

- Add the pages you use most often to Favorites. After you open a page that you've added to Favorites, Made2Manage keeps that page's database tables open so the page opens much more quickly the next time you need it.

- Do not use transaction logging except when you experience network problems or change network hardware. Transaction logging slows performance.

- SQL Server handles transaction logging. See *SQL Server documentation from Microsoft* for more information.

- Set the Notifier timer to at least 15 minutes. The Notifier timer controls how often Made2Manage checks the file server for new Notifier messages. Frequent checks slow network performance.

- To learn how to set the Notifier timer, see "Set a user's Notifier preferences" in the **.

- In **M2MWin.ini** (which is in the **\\Windows** directory), increase the Forebuffer setting and decrease the Backbuffer setting so Made2Manage can better use available RAM. You will need to test different Forebuffer and Backbuffer settings to see what works best for you. Forebuffer controls the percent of RAM that Windows uses in foreground processing. Backbuffer controls the percent of RAM that Windows uses in background processing.

