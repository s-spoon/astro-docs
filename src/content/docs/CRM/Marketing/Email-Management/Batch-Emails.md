---
title: "Batch Emails"
draft: false
type: Article
---



## Communication Queue
Emails are sent through queues that you can define under **Communication Queue**. so that you may control Maximum rows processed per run. They are also batched so that users sending documents do not have to wait for large lists to be processed.

All emails go to a default queue and this process is transparent to users. Setup includes a page to configure and view statistics for a queue.

## Communication Lists
Communication or Email lists define a group of contacts you wish to the email on a regular basis, sending a monthly newsletter for example. Contacts can be added to communication lists through mass assign (**Contact list page** > **Workflow** > **Assign Communication List**) or campaign workflow actions.

Communication Lists are managed under **Marketing** > **Email Marketing**. Statistics regarding the delivery success for each run are displayed here. In addition to active emails, you can also view emails on the list that were found to be invalid.

Once a list is defined, emails may be scheduled for a communication list. When a run is defined, you select which template you wish to send, from whom, and details about the activity created after the emails are sent.

Communication runs are processed by a task that runs on a regular basis. Emails from runs are placed into the email queue when they are due.
