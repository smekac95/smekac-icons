const SMKC_ICONS_MAP = {
  "banan": {
    "keywords": [],
    "path": "m11.999 2c-3.0491 0-6.727 0.71682-9.7553 2.2954 0 3.4084-0.042112 11.902 9.7553 17.705 9.7981-5.8028 9.7568-14.296 9.7568-17.705-3.0283-1.5785-6.7069-2.2954-9.7568-2.2954zm5.2323 5.2338c0.09956 0.022917 0.20381 0.072897 0.31177 0.15965l-5.8995 7.9509-4.2684-5.0124c0.28147-0.20589 1.4831-0.98562 2.3676 0.03615l1.8525 2.2306 4.9206-5.1179h0.0076c0.15674-0.14228 0.4092-0.31576 0.70788-0.24701z"
  },
};

async function getIcon(name) {
  return {path: SMKC_ICONS_MAP[name]?.path};
}
async function getIconList() {
  return Object.entries(SMKC_ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords,
  }));
}

window.customIcons = window.customIcons || {};
window.customIcons["smkc"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["smkc"] = getIcon;
