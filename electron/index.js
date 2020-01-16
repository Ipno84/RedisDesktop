const { app, BrowserWindow, Menu, MenuItem } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

let mainWindow;

global.rootPath = path.resolve(__dirname);
global.rootFilePath = `file://${rootPath}`;
global.redisCliPath = path.resolve(__dirname, "./redis-cli/index.js");

global.createContextMenu = items => {
    let menu = new Menu();
    items.forEach((item, i) => {
        menu.insert(i, new MenuItem(item));
    });
    return menu;
};

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        center: true,
        resizable: true,
        movable: true,
        minimizable: true,
        maximizable: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.maximize();

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    const url = isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "./build/index.html")}`;
    mainWindow.loadURL(url);

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
