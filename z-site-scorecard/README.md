## Overivew

The ONC (Office of the National Coordinator for Health IT) hosts a scorecard to grade C-CDA documents. The online version of that tool is available here: https://sitenv.org/scorecard/

This folder within the repository has a small script that will post all the files in the associated directories to the scorecard and record the scores. 

## Prerequisites 

For the script which runs the automated posting of the files, you will need Node.js and also to have installed the request and pretty-data npm packages

``` npm install request ```

``` npm install pretty-data ```

``` node postScorecard ``` 

This will created the directory layouts as shown in this directory. Note that scores may change over time due to changes in the C-CDA Scorecard offered by the ONC.  

## Score Distribution

TBD