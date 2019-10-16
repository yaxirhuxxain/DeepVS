/**
 * Created: 10/9/2019
 * Author:  Yasir Hussain (yaxirhuxxain@yahoo.com)
 */

 
const vscode = require('vscode');

/**
 * @param {*} context 
 */

// Plugin activator
exports.activate = function(context) {
    vscode.window.showInformationMessage('DeepVs tool is activated');
    console.log('DeepVs tool is activated')
    require('./suggestion')(context);
    

};


// Plugin deactivator
exports.deactivate = function() {
    vscode.window.showInformationMessage('DeepVs tool is deactivated');
    console.log('DeepVs tool is deactivated')
};