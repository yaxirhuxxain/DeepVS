## DeepVS Demo

### Setup
Download the plugin provided in this repository and follow the guide illustrated below
![DeepVS Setup Demo](../Demo/setup.gif)

### Usage
The DeepVs tool automatically activates after detecting a ".java" file extension. The tool provides suggestion by pressing ctrl+space.
By triggering the tool it takes source code at the current cursor position and suggests most probable next source code tokens given a context by consulting a deep learning-based pre-trained model trained on over 13M source code tokens.

### Demo
![DeepVS Setup Demo](../Demo/example.gif)

#### Note: 
The DeepVS tool works better when auto-completion is turned off and being triggered manually by using ctrl+space.
To turn off the auto-completion put below code in your 'settings.json' file in vs code settings.

```
"editor.quickSuggestions": false,
"editor.acceptSuggestionOnEnter": "off",
"editor.quickSuggestionsDelay": 10,
"editor.wordBasedSuggestions": false,
"editor.acceptSuggestionOnCommitCharacter": false
```

