const fs = require("fs");
const vm = require("vm");

const html = fs.readFileSync("index.html", "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync("js/translations.js", "utf8"), sandbox);

const en = sandbox.window.TRANSLATIONS_EN || {};
const keys = new Set(["meta.title", "meta.description"]);
const re = /data-i18n(?:-aria)?="([^"]+)"/g;
let match;
while ((match = re.exec(html)) !== null) {
  keys.add(match[1]);
}

const missing = [...keys].filter((key) => !(key in en));
const unused = Object.keys(en).filter((key) => !keys.has(key));

console.log("Claves en HTML:", keys.size, "| Claves en EN:", Object.keys(en).length);
console.log("Faltan en EN:", missing.length ? missing.join(", ") : "ninguna");
console.log("Sobran en EN:", unused.length ? unused.join(", ") : "ninguna");
process.exit(missing.length ? 1 : 0);