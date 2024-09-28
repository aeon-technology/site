---
layout: base.njk
eleventyNavigation:
  key: Tutorial
  parent: Web
---

# DFFWeb Tutorial

In this tutorial, you will learn the basics of DFFWeb by perparing your models for simulation using DFFWeb.

## Steps

1. Prepare a molecular model for simulation. Currently the file formats supported are MOL2 and PDB. The molecular model file should be complete, which means the hydrogen atoms are included, the formal charges are set, and the structure is reasonably relaxed. DFF will automatically complete required data. If the input model is not well prepared, it is recommended to examine the output structure file to make sure that meets your need.

2. Upload and Run
   In the "Upload" cell, browse your computer files and select the molecular model file to upload.

3. Select one of the designated simulation software packages, currently GROMACS and LAMMPS are supported. The selection will determine available force fields in TEAMFF, and the format of output which are input files for the simulation package.

4. Select one or more force fields in the pulldown menu. In most case, the _general_ force field is sufficient. You may select other or multiple force fields. If multiple force fields are selected, adjust the order is critical. The system will start from the top of the selection list, only when required parameters are incomplete the next force field will be called.

5. Optionally, set the Temperature of target application. A small correction will be made to the LJ-12-6 parameters so that the predicted thermodynamic properties are more accurate at elevated temperatures. Note that at different temperature, the assigned parameters are different, which cannot be used on different temperatures.

6. Click "Run" button to start the background jobs. If the model file is large (>10K atoms) the system will take a few seconds to finish the computation. The results will be shown on the screen.

7. If everything looks good, the "Download" button is activated. Click the button to download result files which are the input files for the simulation packaged selected. The computation results will be saved under your account for a period of time (~30 days) for late retrieving. If anything goes wrong, an error message will be prompted. Try to correct the errors according to the error message. If need an help, click "Support button to send messages.
