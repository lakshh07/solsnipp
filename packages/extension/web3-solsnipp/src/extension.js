const vscode = require("vscode");
const axios = require("axios");
const fs = require("fs");

async function activate(context) {
  console.log('Congratulations, your extension "SolSnipp" is now active!');

  let disposable = vscode.commands.registerCommand(
    "web3-solsnipp.searchSnippet",
    async function () {
      const res = await axios.get(
        "http://localhost:3000/api/snippets-extension"
      );

      const snip = await vscode.window.showQuickPick(res.data, {
        matchOnDetail: true,
      });

      // vscode.window.showInformationMessage(
      //   "Choose your smart contract template"
      // );

      if (snip == null) return;

      let { document } = vscode.window.activeTextEditor;
      let filePath = document.uri.path;

      fs.writeFile(filePath, snip.body.join("\n"), (err) => {
        if (err) {
          return vscode.window.showErrorMessage(
            `Failed to create ${snip.label} file!`
          );
        }
        vscode.window.showInformationMessage(`Created ${snip.label} file 🚀`);
      });
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
