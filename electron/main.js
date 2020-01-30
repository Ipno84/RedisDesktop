const { app, BrowserWindow, Menu, MenuItem } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const fs = require("fs");
const url = require("url");

let mainWindow;

global.rootPath = path.resolve(__dirname);
global.rootFilePath = `file://${rootPath}`;
global.redisCliPath = url
    .format({
        pathname: path.join(__dirname, "./redis-cli/index.js"),
        // protocol: "file:",
        slashes: false
    })
    .replace(/\s/g, "\\ ");

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
            nodeIntegration: true,
            devTools: isDev,
            webSecurity: false,
            preload: path.join(__dirname, "preload.js")
        }
    });

    mainWindow.maximize();

    if (isDev) mainWindow.webContents.openDevTools();

    const appEntry = isDev
        ? "http://localhost:3000"
        : url.format({
              pathname: path.join(__dirname, "../index.html"),
              protocol: "file:",
              slashes: true
          });
    mainWindow.loadURL(appEntry);

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
