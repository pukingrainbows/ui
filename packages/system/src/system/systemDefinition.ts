import type { PukingRainbowsSystemDefinition } from "../types/config"
import { palette } from "./color"
import type { Definition } from "./Definition"
import { z } from "./themes/dynamicZ"

export const systemDefinition: PukingRainbowsSystemDefinition<Definition> = {
  rootScaleFactor: 8,
  rootUnit: "rem",
  appearance: [
    "default",
    "primary",
    "error",
    "info",
    "success",
    "warning",
  ] as const,
  size: [
    "small",
    "medium",
    "large",
    "circleSmall",
    "circleMedium",
    "circleLarge",
  ] as const,
  container: ["outlined", "contained", "ghost", "icon", "pill"] as const,
  themes: ["dark"] as const,
  z: z,
  level: ["level-1", "level-2", "level-3", "level-4", "level-5"] as const,
  palette,
}