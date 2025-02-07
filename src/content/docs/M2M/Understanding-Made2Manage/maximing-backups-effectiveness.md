---

title: "Maximizing backups effectiveness"
draft: false
type: Article

---

-	To protect your data against hardware failure, human error, or natural disasters, follow these best practices for regular backups:Determine how many days' work you are willing to lose and back up that often. Daily backups are the best insurance.

-	Store backup copies in three locations:

    -	On your computer or on a network drive.
    -	On storage media you keep in your office.
    -	On storage media kept offsite, in a different building, to protect against fire or natural disasters.
-	Select a backup device with sufficient capacity to back up all of your data on a single disk or tape.
-	Regularly replace disks or tapes, as they wear out. Periodically check for worn- media by attempting to read data from them.
-	Rotate multiple sets of backup disks or tapes, using one for each day of the week, to have an older version in case of failure.


### Made2Manage tips

-	Install Made2Manage program files on each workstation instead of running it e from a single network location, to maintain high network performance by limiting network traffic to data transactions only.
-	Add frequently used pages to Favorites. Once a page is opened and added to Favorites, Made2Manage keeps its database tables open for faster access the next time.
-	Disable transaction logging unless necessary for troubleshooting network issues or changing network hardware, as it can degrade performance.
-	For more information about transaction logging, . See SQL Server documentation.
-	Set the Notifier timer to at least 15 minutes. Frequent checks for new Notifier messages can slow network performance.
-	To configure the Notifier timer.
-	In M2MWin.ini (which is in the Windows directory), adjust the the Forebuffer and the Backbuffer setting to optimize RAM usage. Increase the Forebuffer for foreground processing and decrease the Backbuffer for background processing. Test different settings to determine the most effective configuration for your system.


