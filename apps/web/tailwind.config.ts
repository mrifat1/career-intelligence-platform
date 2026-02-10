import type { Config } from "tailwindcss";
import sharedConfig from "@repo/ui/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
    content: [
        "./src/app/**/*.{tsx,ts,jsx,js}",
        "./src/components/**/*.{tsx,ts,jsx,js}",
        "../../packages/ui/src/**/*.{tsx,ts,jsx,js}"
    ],
    presets: [sharedConfig],
};

export default config;
