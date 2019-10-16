/**
 * Created: 10/9/2019
 * Author:  Yasir Hussain (yaxirhuxxain@yahoo.com)
 */

const vscode = require('vscode');

/**
 * @param {*} document 
 * @param {*} position 
 * @param {*} token 
 * @param {*} context 
 */

module.exports = function(context) {
	const provider = vscode.languages.registerCompletionItemProvider(
		'java',
		{
			provideCompletionItems(document, position, token, context) {
				
				//get whole document until currect position
				let range = new vscode.Range(new vscode.Position(0, 0), new vscode.Position(position.line, position.character)) 
				let source_code = document.getText(range)

				// Preprocess the source code as per your task's requirenments
				// prepare your code context to query the server 
				// below function requires code_context based on your task
				//console.log(code_context)
					
				const fetch = require("node-fetch");

				// This function returns a promise object 
				const getSuggestions = async url => {
				try {
					const response = await fetch(url);
					const json = await response.json();
                    //console.log(json);
					
					//converting json to completionItems 
					var completionItems = [];
					count = 1
                    json.forEach(element => {
						var completionItem = new vscode.CompletionItem(count+": "+String(element));
						completionItem.detail = "DeepVS: A deep learning based model for Source code suggestion";
						completionItem.filterText = String(element);
						completionItem.insertText = String(element);
						completionItems.push(completionItem);
						count += 1
                    });

					return completionItems //return completions as Promise object

				} catch (error) {
					//console.log(error);
					console.log('Server Connection Issue...');
				}
				};
				
				const url = "http://127.0.0.1:80/suggestion?code=" + code_context +" "; //for local server
				
                return  getSuggestions(url)

			}
			
		}
	);

	context.subscriptions.push(provider);
};

