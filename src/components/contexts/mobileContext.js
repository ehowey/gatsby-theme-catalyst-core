import React, { useState, createContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useWindowSize } from "./windowSizeContext"

export const MobileContext = createContext()

export const MobileProvider = props => {
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        headerPosition
        mobileMenuBreakpoint
      }
    }
  `)
  const { width } = useWindowSize()
  const mobileBreakpoint = parseInt(data.catalystConfig.mobileMenuBreakpoint)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (width < mobileBreakpoint) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [width, mobileBreakpoint])

  return (
    <MobileContext.Provider value={[mobile, setMobile]}>
      {props.children}
    </MobileContext.Provider>
  )
}
