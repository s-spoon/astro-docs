---

title: "Understanding and identifying critical capacity constrained resources"
draft: false
type: Article

---

In a classic Theory of Constraints environment, only one work center is identified as a constraint. But in M2M Advanced Scheduling, you can define multiple work centers as constraints.

A constrained resource is a machine work center, labor work center, or purchased materials that you cannot easily or automatically increase or decrease.

You inform M2M Planning and Scheduling about all your work centers, including those that are constrained resources. When you identify a resource as constrained, M2M Planning and Scheduling lets the resource's availability constrain your schedule.

Inevitably, one of your resources is the most constrained. This resource is known as the critical capacity constrained resource (CCR). You can have M2M Advanced Planning and Scheduling determine your CCR. Made2Manage determines your CCR by calculating average load over the planning horizon and identifying which resource has the highest average utilization. You can set the CCR yourself if you disagree with M2M Planning and Scheduling's setting or if you know your CCR.

In Basic Planning and Scheduling, you must set the constraint manually.

M2M Planning and Scheduling creates a schedule in which all of your other resources serve the CCR. The buffers you set are built around the CCR.

​