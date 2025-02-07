---

title: "Running-Print-Agent-on-MacOS"
draft: false
type: Article

---


**Steps for installation**

1.  Download and install `Java 11` or the newer version.

2.  Download the setup folder `ApteanPrintAgentSetup` 

3.  Edit the *Application.yaml* file inside the *ApteanPrintAgent* folder with the correct configuration.

4.  Edit the *startPrint.sh* file to have the correct and full paths of *printclient.jar* and *application.yaml*.

5.  Edit the *com.aptean.printclient.plist* file. Replace the paths as shown below.

<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" ["http://www.apple.com/DTDs PropertyList-1.0.d](http://www.apple.com/DTDs/PropertyList-1.0.d)

<plist version="1.0">

<dict>

<key>Label</key>

<string>com.aptean.printclient</string>

<key>ProgramArguments</key>

<array>

//Give full Path to *startPrint.sh* file present inside the setup folder.

<string>{full path to startPrint.sh}</string>

</array>

<key>RunAtLoad</key>

<true/>

<key>StandardErrorPath</key>

//Give full path to *err.log* file that will be created on service start inside ApteanPrintAge

<string>{Full path to ApteanPrintAgent/ApteanPrintAgent.err.log}</string>

<key>StandardOutPath\</key>

//Give full path to *out.log* file that will be created on service start inside ApteanPrintAgent

<string>{Full path to ApteanPrintAgent/ApteanPrintAgent.out.log}</string>

</dict>

</plist>

6.  After properly following the previous steps, Open terminal and go to the setup folder. Run the *serviceStart.sh* file.

7.  Verify the installation is working by going to the *ApteanPrintAgent.out.log* file in *ApteanPrintAgent* folder.

8.  If nothing in the *ApteanPrintAgent.out.log* that means installation did not happen correctly. 

Check *ApteanPrintAgent.err.log* for any errors.

### Debugging common issues

#### Error: operation not permitted

- Check from Security & Privacy that terminal and bash should have full disc access.

- If the **operation not permitted** error comes on running the `.serviceStart.sh` file, it means the user doesn't have sufficient privileges to run the file. Try running the commands using Sudo command-line utility. 
If it doesn't help, try disabling the SIP by running `Csrutil disable` command in recovery mode.

#### Access issues

- If there are access issues, provide the read, write, and execute permissions to the files by running `chmod \+wrx` {filePath}.

Make sure the paths provided are full and correct.
