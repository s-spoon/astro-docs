---

title: "Working with horizons"
draft: false
type: Article

---

When you forecast anything, things you forecast to happen in the near term are more likely to come true than things that you forecast to happen in the long term. The farther out a thing is forecast to happen, the greater is the chance of unforeseen occurrences changing the events. That is why the weather forecast for tomorrow is more detailed and accurate than the weather forecast for five days from now.

M2M Planning & Scheduling recognizes this fact by giving you a scheduling horizon for the near term and a planning horizon for the long term. The scheduling horizon is only available in M2M Scheduling if you select the **Schedule Open Jobs** checkbox in the **Global Parameters** window. The Planning Horizon is available in both M2M Scheduling and M2M Advanced Scheduling.

The planning horizon is a period of time that starts with the current shop date. Your planning horizon should be no shorter than the longest lead-time product running in the shop or the longest acquisition lead-time for purchased materials. M2M Planning uses the planning horizon to create jobs based on independent demand (sales orders and/or a demand forecast). You get finished-good jobs that start earlier than the end of the planning horizon and component jobs that start even earlier. These jobs then feed MRP and the purchasing queue so that required purchased materials for those jobs can be available when the jobs start.

The scheduling horizon is also a period of time that starts with the current shop date. The scheduling horizon should be at least as long as your longest job. It must be shorter than the planning horizon. You use the scheduling horizon to schedule and sequence job operations on work centers. M2M Scheduling produces Gantt charts for the scheduling horizon.

​