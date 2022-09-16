// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
  const res = await axios.get("http://localhost:3000/api/snippets");
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "yoyo" is now active!');
  console.log(res.data);

  //   console.log(path.basename("../main/newww.json"));

  //   fs.writeFile(path.join("/main", "index.html"), "hello", (err) => {
  //     if (err) {
  //       return vscode.window.showErrorMessage(
  //         "Failed to create boilerplate file!"
  //       );
  //     }
  //     vscode.window.showInformationMessage("Created boilerplate files");
  //   });

  //   fs.closeSync(fs.openSync(path.basename("../main/newww.json"), "w"));
  fs.writeFileSync(path.basename("./snippets/generated.json"), `{${res.data}}`);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "web3-solsnipp.helloWorld",
    function () {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from vscode test!");
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
