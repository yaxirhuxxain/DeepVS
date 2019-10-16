# DeepVS: a deep learning based source code suggestion tool
This plugin is a working example of our proposed [DeepVS](https://github.com/yaxirhuxxain/DeepVS) tool which leverages from deep learning based model to suggest the next source code in an IDE. 


## Running the DeepVS locally
Please compile the plugin from the [source](https://github.com/yaxirhuxxain/DeepVS) to use the tool locally or for a differend source code modeling task.

## DeepVS Working
The DeepVS tool works better when auto completion is turned off and being triggered manually by using ctrl+space

To turn off the auto completion put below code in your 'settings.json' file in vs code sesstings.

```
"editor.quickSuggestions": false,
"editor.acceptSuggestionOnEnter": "off",
"editor.quickSuggestionsDelay": 10,
"editor.wordBasedSuggestions": false,
"editor.acceptSuggestionOnCommitCharacter": false
```
