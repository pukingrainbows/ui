import { css, SerializedStyles } from "@emotion/react"

const variableCSS = {
  display: "var(--stackDisplay)",
  gap: "var(--stackGap)",
  alignItems: "var(--stackAlignItems)",
  justifyContent: "var(--stackJustifyContent)",
  padding: `var(--paddingY, 0) var(--paddingX, 0)`,
}
export const stackColumnCSS = css({
  flexDirection: "column",
  boxSizing: "border-box",
  ...variableCSS,
})

export const stackRowCSS = css({
  flexDirection: "row",
  boxSizing: "border-box",
  ...variableCSS,
})

export const layoutCSS: Record<string, SerializedStyles> = {
  "|---|-|": css({
    "& > :first-child": {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "0%",
    },
    "& > :not(:first-child)": {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
      minWidth: 0,
    },
  }),
  "|-|---|": css({
    "& > :last-child": {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "0%",
      minWidth: 0,
    },
    "& > :not(:last-child)": {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
    },
  }),
  "|-|-|-|": css({
    "& > *": {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "0%",
      minWidth: 0,
    },
  }),
  "|<--->|": css({
    justifyContent: "space-between",
    "& > *": {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
    },
  }),
  "|<->|<->|": css({
    justifyContent: "space-around",
    "& > *": {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
    },
  }),
  default: css({
    "& > *": {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
      minWidth: 0,
    },
  }),
}
