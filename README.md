
Solusi with Ollama is an open-source browser extension that provides a sidebar and web UI for your local AI model. It allows you to interact with your model from any webpage.

## Installation

Solusi with Ollama supports Chromium-based browsers like Chrome, Brave, and Edge, as well as Firefox.


## Features

- **Sidebar**: A sidebar that can be opened on any webpage. It allows you to interact with your model and see the results.

- **Web UI**: A web UI that allows you to interact with your model like a ChatGPT Website.

- **Chat With Webpage**: You can chat with the webpage and ask questions about the content.

want more features? Create an issue and let me know.

### Manual Installation

#### Pre-requisites

- Bun - [Installation Guide](https://bun.sh/)
- Ollama (Local AI Provider) - [Installation Guide](https://ollama.com)
- Any OpenAI API Compatible Endpoint (like LM Studio, llamafile etc.)

1. Clone the repository

```bash
git clone https://github.com/solusi/solusi-with-ollama.git
cd solusi-with-ollama
```

2. Install the dependencies

```bash
bun install
```

3. Build the extension (by default it will build for Chrome)

```bash
bun run build
```

or you can build for Firefox

```bash
bun build:firefox
```

4. Load the extension (chrome)

- Open the Extension Management page by navigating to `chrome://extensions`.

- Enable Developer Mode by clicking the toggle switch next to Developer mode.

- Click the `Load unpacked` button and select the `build` directory.

5. Load the extension (firefox)

- Open the Add-ons page by navigating to `about:addons`.
- Click the `Extensions` tab.
- Click the `Manage Your Extensions` button.
- Click the `Load Temporary Add-on` button and select the `manifest.json` file from the `build` directory.

## Usage

### Sidebar

Once the extension is installed, you can open the sidebar via context menu or keyboard shortcut.

Default Keyboard Shortcut: `Ctrl+Shift+Y`

### Web UI

You can open the Web UI by clicking on the extension icon which will open a new tab with the Web UI.

Default Keyboard Shortcut: `Ctrl+Shift+L`

Note: You can change the keyboard shortcuts from the extension settings on the Chrome Extension Management page.

## Development

You can run the extension in development mode to make changes and test them.

```bash
bun dev
```

This will start a development server and watch for changes in the source files. You can load the extension in your browser and test the changes.



## License

MIT

