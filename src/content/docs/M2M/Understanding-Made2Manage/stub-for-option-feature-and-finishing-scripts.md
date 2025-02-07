---

title: "Stub for option, feature, and finishing scripts"
draft: false
type: Article

---

Here is a stub of a feature, option, or finishing script. Use it as a starting point for your own scripts. You can copy it from here and paste it right into Visual FoxPro.



* this is a stub for an external rules script Visual FoxPro 5 program

* that is linked to a feature, an option, or as the FINISHING SCRIPT   
* for a product for the Made2Manage for Windows Product Configurator...

* basically, any processing whatsoever may be placed in this script...

* if you wish to stop the current process, then set the pcxMsg parameter

* to text describing the reason for the stoppage and the configurator

* will display the text and stop the most recent action (that is. FINISH of

* a product or selection of an option)

*

* entry: piRows...# of rows passed in the next

* parameter

* @paConfiguration...array representing the current

* configuration

* (column #1=description

* #2=number of selected options, if item is a feature with   
* list of options

* #3=text of selected option(s), sep by carriage returns if   
* multiple selections

* #4=‘Q'=Quantitative entry, ‘F'=Feature with list, else   
* ‘floating option' (selected option that is not tied under

* a feature)

* #5=object ID (feature ID if #4=F, else the option ID of the   
* floating/selected option)

* #6=IDs of selected option(s), separated by carriage returns   
* if multiple selections

* #7=internal part (not to be used)

* #8=quantity

* #9=outline node index the item relates to)

*

* pcProductID...ID of configured product

* pcxMsg...a character-type variable used to

* pass back a message to the

* operator...if returned blank,

* all is assumed well, else the

* process generating the call here   
* is not allowed and this text is  
* displayed

* poOutline...OLE outline object that contains  
* the configuration

* poConfigurator...the form/parent object of the OLE

* outline control containing the

* configuration

*

* (NOTE: not all of the passed parameters are needed under every condition...in fact, you  
* will probably only use a few...many are passed because they are needed by API calls that  
* you may need to use)

*

PARAMETERS piRows, paConfiguration, pcProductID, pcxMsg, poOutline, poConfigurator

PRIVATE ALL LIKE l*

EXTERNAL ARRAY paConfiguration

* first, always initialize this to blank to assume all is well unless

* proven otherwise

pcxMsg = ‘‘

******

*

* here is where your custom processing goes

*

******

* return to the Configurator

RETURN

​