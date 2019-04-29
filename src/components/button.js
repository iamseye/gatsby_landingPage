import React from "react"

import { COLORS, GRADIENT } from "../styles/constants"
import "../styles/button.scss"

const Button = ({ children }) => (
  <button
    style={{
      color: COLORS.lightWhite,
      background: GRADIENT,
    }}
  >
    {children}
  </button>
)

export default Button
