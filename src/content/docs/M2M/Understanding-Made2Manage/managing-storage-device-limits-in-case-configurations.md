---

title: "Managing Storage Device Limits in Case Configurations"
draft: false
type: Article

---

 A computer manufacturer might allow tower cases to include up to four storage devices while desktop cases can include no more than two. You cannot use Visual Rules or set feature quantity requirements to handle this scenario. Instead, you must write a short finishing script to identify the case and check whether too many storage devices have chosen. 
 
 If you try select three storage devices and a desktop case, the finishing script will send a message back tothe Product Configurator, preventing the configuration. The customer must either remove the extra storage device or switch to a tower case before the Product Configurator permits the configuration. The following finishing script enforces this condition::

*

* a sample *FoxPro (Also called Visual FoxPro (VFP), Fox) A programming system from Microsoft. Made2Manage is developed largely using Visual FoxPro.* source program as scripted rules for

* the product DSKTOP

*

PARAMETERS piRows, paConfiguration, pcProductID, pcxMsg, poOutline

PRIVATE ALL LIKE l*

** note the PRIVATE ALL LIKE l* above - it is good practice to protect

** interaction with variables at another level, and this performs that** quite well

** assume no problem until proven otherwise (if there is a problem and you

** would like the configuration to NOT be allowed, set pcxMsg to a message

** describing the problem so that the operator can take appropriate action)

pcxMsg = ‘‘

** here's a scripted rule...what it does is find the feature ‘CASE ‘ and

** then looks at the selection (only 1 is allowed)...based on the

** selection, a different number of drive-bay mounted devices are

** allowed...using the value, it then adds up the devices that take up

** drive bays, and if too many, pass back a message, allowing the operator

** a chance to modify the configuration

liMaxDriveBayDevices = 0 && initialize

liSelectedDriveBayDevices = 0 && ditto

lcSelectedCaseID = ‘???' && ditto

lcDriveBayFeatures = ‘‘ && ditto

FOR liObject = 1 TO piRows

lcFeatureID = UPPER(RTRIM(paConfiguration[liObject, 5]))

&& good practice to upcase/rtrim before making comparisons

&& note that references to ‘CHASSI', ‘DSKTOP', ‘TOWER', ‘MINI', etc. are

&& USER supplied Ids for the various features and options of the product

&& being tested

IF lcFeatureID == ‘CHASSI'

&& our ID for the ‘Case/chassis' feature

&& store the ID of the case selected by the operator of the configurator

lcSelectedCaseID = UPPER(RTRIM(paConfiguration[liObject, 6]))

DO CASE

&& don't confuse this CASE with ‘CHASSI'- it is a FoxPro reserved word

CASE lcSelectedCaseID == ‘DSKTOP'

liMaxDriveBayDevices = 3

CASE lcSelectedCaseID == ‘TOWER'

liMaxDriveBayDevices = 5

CASE lcSelectedCaseID == ‘MINI'

liMaxDriveBayDevices = 4

ENDCASE

ELSE

IF INLIST(lcFeatureID, ‘HD', ‘CD', ‘TAPE')

liSelectedDriveBayDevices = liSelectedDriveBayDevices + paConfiguration[liObject, 2]

lcDriveBayFeatures = lcDriveBayFeatures + IIF(EMPTY(lcDriveBayFeatures), ‘‘, ‘, ‘) + paConfiguration[liObject, 1]

ENDIF

ENDIF

NEXT

** the next line of code is to protect in case a new chassis *option An available choice for a product's feature. For example, a computer manufacturer lets the customer select one of three hard disk drives: part numbers HD1600, HD2100, or HD3400. The HD3400 is an option of the hard disk drive feature. An option is usually equivalent to one part on the product's bill of material.* is

** added and this script is not updated to take it into account (good

** programming practice)

IF liMaxDriveBayDevices = 0

pcxMsg = ‘External rules script program ‘ + PROGRAM() + ‘ needs modified to account for new CHASSI option ‘ + lcSelectedCaseID + ‘.'

ELSE

IF liSelectedDriveBayDevices > liMaxDriveBayDevices

** give nice informative message to aid the operator in re-configuring

pcxMsg = ALLTRIM(STR(liSelectedDriveBayDevices)) + ‘ options were selected that occupy drive bays, but the case you have selected only supports up to ‘ + ALLTRIM(STR(liMaxDriveBayDevices)) + ‘.'

pcxMsg = pcxMsg + ‘ The features that require drive bays in the case are: ‘ + UPPER(lcDriveBayFeatures) + ‘.'

ENDIF

ENDIF

RETURN

​