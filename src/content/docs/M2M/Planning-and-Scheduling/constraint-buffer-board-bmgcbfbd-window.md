---

title: "Constraint Buffer Board (BMGCBFBD) window"
draft: false
type: Article

---

The **Constraint Buffer Board (BMGCBFBD)** window provides an overall view of the current state of the buffers. It lists all the buffered work centers with their planned buffer and the actual buffer (current WIP queue). Both the Buffer and the Current Queue are measured by the time (hours) it takes to process the WIP inventory in each buffered work center. The state of the Buffer as compared to the current queue is divided into the following five categories (Zones):

- **Starved**: (Late) No other operations at work or waiting in queue. The work center is in a starvation state with queue hours less than buffer hours.

- **Zone 1**: (Expedite) Content of the queue is less than the Zone 1 percentage of the buffer. The work center is close to starvation.

- **Zone 2**: (Track) Content of the queue is more than the Zone 1 percentage of the buffer, but less than the Zone 2 percentage.

- **Zone 3**: (Normal) Content of the queue is more than the Zone 2 percentage of the buffer, but less than the buffer size.

- **Saturated**: (Early) The work center has more queue hours than buffer hours.

**This page has the following controls**:

| Field                        | Description                                                                                                                               |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Facility                     | A filter used to select the facility                                                                                                      |
| Work Center ID               | A filter used to select the work center                                                                                                   |
| Department                   | A filter used to select the department                                                                                                    |
| Constraint                   | A check box that when selected displays only work centers marked as constraints When unselected, all work centers are displayed.          |
| Work Center with Buffer > 0 | A check box that when selected displays only work centers having a positive buffer                                                        |
| Total Queue Hours            | Displays the total WIP queue hours for the work centers included in the filter                                                            |
| Last Refresh Time            | The last date/time the window was refreshed Click **Refresh** to refresh the screen.                                                      |
| Constraint Buffer grid       | Displays the following details: <li> Work center ID <li> Department  <li> Work center name <li> Constraint <li> Buffer hours <li> Queue hours <li> Buffer zone |
|

The Buffer Management Board shows the current WIP queue and the related current zone of all the buffered work centers. The different zones are highlighted with a different user-defined color for each zone. See Customizing the Zone Colors for more information.

The following buttons are present in the Constraint Buffer Grid Actions:

| Button                | Description                                           |
|-----------------------|-------------------------------------------------------|
| Buffer Board Details  | Opens the **Buffer Board Details (BMGBUFDT)** window  |
| Schedule Arrivals     | Opens the **Schedule Arrivals (BMGSCARR)** window     |
| Schedule Completions  | Opens the **Schedule Completions (BMGSCCMP)** window  |
| On-Line Dispatch List | Opens the **On-Line Dispatch List (PSDISPLI)** window |
| Resource Gantt        | Opens the **Single Resource Gantt** window            |
|