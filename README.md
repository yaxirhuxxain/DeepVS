# Test
 
# DeepVS: A deep learning based source code suggestion tool.

This repository contains our DeepVS tool which leverages from deep learning based model to suggest the next source code in an IDE instantly. 
This version of DeepVS tool works based on our Deep Cloud platform. Please compile the plugin from the 
source provided in this repository to use the tool locally or for a differend source code modeling task. 

## DeepVS Demo

### Setup
Download the plugin provided in this repository and follow the guide illustrated below
![DeepVS Setup Demo](demo/setup.gif)

### Usage
The DeepVs tool automatically activates after detecting a ".java" file. The too provides suggestion by pressing ctrl+space.
By triggering the tool it takes source code at current cursur position and suggests most probable nex source code tokens given a context by consulting 
a deep learning model trained on over 13M source code tokens.

### Demo
![DeepVS Setup Demo](demo/example.gif)

Note: The DeepVS tool works better when auto completion is turned off and being triggered manually by using ctrl+space.
To turn off the auto completion put below code in your 'settings.json' file in vs code sesstings.

"editor.quickSuggestions": false,
"editor.acceptSuggestionOnEnter": "off",
"editor.quickSuggestionsDelay": 10,
"editor.wordBasedSuggestions": false,
"editor.acceptSuggestionOnCommitCharacter": false

