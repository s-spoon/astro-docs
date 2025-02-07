---

title: "What is Buffer Management (Advanced Scheduling only)"
draft: false
type: Article

---

Since TOC buffers are already supported in Advanced Scheduling and Advanced Planning, previously there was no way these buffers could be monitored...until now. Enter Buffer Management. It is a tool that monitors the buffers that are in front of the critical constraint work centers as well as the Shipping Buffer.

The main advantage of using Buffer Management is it allows the timely reaction to disturbances in the process before they result in reduced throughput and late jobs. If not monitored, a disruption in the process can cause a work center to become idle from lack of material, or material starvation, which reduces the total number of units produced and can even cause jobs to become late in getting to customers.

Buffer Management uses Constraint Buffers, planning and scheduling parameters which become a property of the work center. A Part property can also be maintained by the user. The buffer for each job are the work center and part properties added together.

The Constraint Buffer Board support two different approaches to constraint buffer monitoring:

1. Monitoring each job's arrival at the constraint buffer rather than the target Buffer schedule. The Target Buffer Schedule is defined at the time the job is released. This provides a stable reference to measure that actual execution against the Target Schedule at the Buffer gates. This is the approach described in TOC literature.

2. Monitoring the actual and projected WIP queue in front of the buffered work center rather than the planned buffer. This visibility provides insight into potential future issues that could affect the projected queue in front of the buffered work centers. Projected issues can be identified where there is a possibility of the work center starving (running out of material) or have a less desirable amount of work in the queue.

The Constraint Buffer Board provides an overall view of all the buffers listing the buffered work centers with their planned buffer and the actual buffer (also called WIP Queue) side-by-side. Further detail can be achieved by using three different windows:

- Buffer Board Detail - supports method 1 below

- Schedule Arrival - supports method 2 below

- Schedule Completion - supports method 2 below

The Shipping Buffer Board monitors the Shipping Buffer and provides a detailed monitoring of the actual job completion (its arrival at the Shipping Buffer) as compared with the target buffer schedule. The Target Buffer Schedule is defined at the time the job is released. The buffer start time is the schedule completion of the job at the time the job is released. Using this method provides a stable reference to measure the actual execution against the target schedule completion.

The Shipping Buffer is maintained as a global property on the Global Parameters window. The buffer for each specific job is defined as this global property plus a part property (which can be maintained as an incremental value).

The Buffer Management feature includes several graphical reports you can use to review and analyze the buffers execution in the past.

- The History of Buffer Penetration reports are based on the first approach described above. See Buffer Penetration.

- The History of Constraint Buffer Queue reports are based on the second approach described above. See Constraint Buffer Queue.

- The Late Reason Analysis reports are based on the user entered Late Reason data. See Reason Late Analysis.

​