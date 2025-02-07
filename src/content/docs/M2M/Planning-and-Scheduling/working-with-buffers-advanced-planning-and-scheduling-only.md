---

title: "Working with buffers (Advanced Planning and Scheduling only)"
draft: false
type: Article

---

M2M Advanced Planning and Scheduling lets you set buffers at three points in the schedule:

- **The constraint buffer**keeps the critical capacity constrained resource (CCR) always running by deliberately scheduling the manufacture or purchase of materials going into the CCR some hours or days earlier than actually needed. If those materials arrive a bit late for one reason or the other, the CCR chugs along unaffected. The flip side is that when material arrives on time, it can pile up in front of the CCR. To minimize the pileup, you vary the buffer's size based on your experience and relative success in using it.

- **The assembly buffer**keeps assembly operations downstream of the CCR always running by deliberately scheduling the related work centers some hours or days earlier than actually needed. If the CCR's output is combined with other materials in an assembly operation, that assembly step is part of a critical path. To keep CCR output from piling up, you buffer the scheduled arrival of those other materials at assembly.

- **The shipping buffer** lets you plan or schedule a job order's completion before the job order's date in order to account for problems in manufacturing or possible backups in shipping. For example, if the shipping buffer is 2 days and the sales order due date is June 3rd, the job order will be planned or scheduled to start early and to complete by June 1st.

It is fast and effective to set these buffers manually based on your knowledge of your plant's operations. You decide what these buffers need to be and set them in M2M Planning and Scheduling.

​