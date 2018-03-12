# What's this repository?

This is a repository of C-CDA 2.1 XML files, which are interoperable extracts from electronic health records (EHRs). 52 EHRs with 401 C-CDA samples are included here. If you're wondering about the standard, check out HL7's website for  the C-CDA 2.1 standard:  http://www.hl7.org/implement/standards/product_brief.cfm?product_id=379

These samples are fictional. Many of them were created from test cases, so you'll see the same patient data repeated from many EHRs. You'll also see several different document types such as continuity of care documents (CCDs), referral notes and discharge summaries. 

# Where did you get the samples?

All of these samples have been copied, unzipped, renamed, formatted and organized from the following repository: https://github.com/siteadmin/2015-C-CDA-Certification-Samples. The original documents were entered into the public domain through that github repository maintained by the Office of the National Coordinator for Health IT (ONC). We took what was available as of January 2018, so it doesn't represent all certified EHRs. Duplicates of the same vendor, patient and document type have been removed. Please access the original repository for all testing data including duplicates. 

# Why was this repository created?

We created this repository for a joint research study by the Veterans Health Administration (VA), Diameter Health (DH), InterSystems and ONC. That research investigated issues regarding the interoperability of clinical data (submitted for publication in March 2018). The authors on that study are John D'Amore (DH), Omar Bouhaddou (VA), Sandi Mitchell (VA), Chun Li (DH), Russ Leftwich (InterSystems), Todd Turner (VA), Matt Rahn (ONC) and Margaret Donahue (VA). For questions on that study, please contact jdamore at diameterhealth.com who also created this repo (github:jddamore)

This repository contains several directories beginning with "z-" that have non-XML files collected or created as part of the research study:

* z-infographic: This includes a few graphics about human-readable variation and the C-CDA testing architecture for VA
* z-test-cases: Four test scenarios used in testing that represents almost half of the samples in the repository 
* z-test-schematron: Each of the C-CDA documents was passed through the HL7 schematron as part of a research study. The open-source tooling to evaluate XML and is available at https://github.com/ewadkins/cda-schematron The HL7 schematron is available at  https://gforge.hl7.org/gf/project/strucdoc/scmsvn/?action=browse&path=%2Ftrunk%2FC-CDAR2.1%2FSchematron%2F Output of schematron validation was saved as JSON files, organized by EHR  directories. 
  
# How should this repository be used?
  
The C-CDA 2.1 documents in this repository were created for certification to the 2015 Edition of Meaningful Use (roughly correlates with "Stage 3" of Meaningful Use). This repository could be used for application development, software testing, interoperability research or simply as a set of files for sample patient data. 

We (the authors) do not represent any of the EHR vendors listed in the repository. We also don't represent that theses are good examples of C-CDA documents. While many follow the standard well, some concerns relating to the interoperability of these C-CDA documents were identified in the research. For examples reviewed by HL7 that represent "best practices", we recommend you go to: http://cdasearch.hl7.org/ 

And of course, there's an important legal disclaimer to all this. Please read!

THIS INFORMATION IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE INFORMATION OR THE USE OR OTHER DEALINGS IN THE INFORMATION.

# Contact

For questions on this repository or the research study, please contact jdamore at diameterhealth.com (github:jddamore)