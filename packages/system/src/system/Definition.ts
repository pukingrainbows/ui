import { palette } from "./color"
import { z } from "./themes/dynamicZ"
export interface Definition {
  appearance: ["default", "primary", "error", "info", "success", "warning"]
  size: [
    "small",
    "medium",
    "large",
    "circleSmall",
    "circleMedium",
    "circleLarge",
  ]
  container: ["outlined", "contained", "ghost", "icon", "pill"]
  z: typeof z
  themes: ["dark"]
  palette: typeof palette
  level: ["level-1", "level-2", "level-3", "level-4", "level-5"]
}