import { SettingsSection } from "spcr-settings";

export const settings = new SettingsSection("The Bird Ping Pong Ballizer", "the-bird-pingpongballizer");

settings.addToggle("ppb-enabled", "Enabled?", true);


settings.addButton("save-ppb-settings", "Save Settings", "Save & Reload", () => {
    window.location.reload();
});