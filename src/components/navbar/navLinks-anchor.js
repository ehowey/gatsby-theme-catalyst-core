/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Link as AnchorLink } from "react-scroll"
import { useContext } from "react"
import { NavContext } from "../contexts/navContext"
import { MobileContext } from "../contexts/mobileContext"

const NavLinks = () => {
  const [open, setOpen] = useContext(NavContext)
  const [mobile] = useContext(MobileContext)
  const { theme } = useThemeUI()
  let navOffset = parseInt(theme.sizes.headerHeight)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          anchorLinks {
            name
            link
          }
        }
      }
    }
  `)
  if (typeof window !== "undefined") {
    var is_root = window.location.pathname === "/" //Equals true if we're at the root
  }
  if (typeof window !== "undefined") {
    let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth
    var screenWidth = x
  }
  if (
    screenWidth >= parseInt(theme.breakpoints[0]) &&
    screenWidth <= parseInt(theme.breakpoints[1])
  ) {
    navOffset = 2 * parseInt(theme.sizes.headerHeightTablet)
  } else if (screenWidth >= parseInt(theme.breakpoints[1])) {
    navOffset = parseInt(theme.sizes.headerHeightLaptop)
  }
  if (is_root) {
    return (
      <ul
        sx={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          textAlign: mobile ? "center" : "left",
          listStyle: "none",
          m: 0,
          p: 0,

          ".active::after": {
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            height: "5px",
            backgroundColor: "secondary",
            content: "''",
            opacity: "1",
            transform: "translateY(0px)",
          },
        }}
        aria-label="menu-bar"
        role="menubar"
      >
        {data.site.siteMetadata.anchorLinks.map(link => (
          <li
            sx={{
              my: mobile ? 2 : 0,
              mx: 1,
            }}
            key={link.name}
            role="none"
          >
            <AnchorLink
              sx={{
                color: open ? "header.textOpen" : "header.text",
                textDecoration: "none",
                py: 2,
                px: 1,
                mr: mobile ? 0 : 3,
                cursor: "pointer",
                position: "relative",
                fontWeight: "bold",
                letterSpacing: "1px",

                "::after": {
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "secondary",
                  content: "''",
                  opacity: "0",
                  transition: "height 0.3s, opacity 0.3s, transform 0.3s",
                  transform: "translateY(-10px)",
                },

                ":hover::after, :focus::after": {
                  height: "5px",
                  opacity: "1",
                  transform: "translateY(0px)",
                },
              }}
              to={link.link.replace(/#/g, "").toLowerCase()}
              onClick={() => setOpen(false)}
              role="menuitem"
              spy={true}
              hashSpy={true}
              smooth={true}
              activeClass="active"
              duration={500}
              offset={-Math.abs(navOffset)}
            >
              {link.name}
            </AnchorLink>
          </li>
        ))}
      </ul>
    )
  } else {
    return (
      <ul
        sx={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          textAlign: mobile ? "center" : "left",
          listStyle: "none",
          m: 0,
          p: 0,

          ".active::after": {
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            height: "5px",
            backgroundColor: "secondary",
            content: "''",
            opacity: "1",
            transform: "translateY(0px)",
          },
        }}
        aria-label="menu-bar"
        role="menubar"
      >
        {data.site.siteMetadata.anchorLinks.map(link => (
          <li
            sx={{
              my: mobile ? 2 : 0,
              mx: 1,
            }}
            key={link.name}
            role="none"
          >
            <Link
              sx={{
                color: open ? "header.textOpen" : "header.text",
                textDecoration: "none",
                py: 2,
                px: 1,
                mr: mobile ? 0 : 3,
                cursor: "pointer",
                position: "relative",
                fontWeight: "bold",
                letterSpacing: "1px",

                "::after": {
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "secondary",
                  content: "''",
                  opacity: "0",
                  transition: "height 0.3s, opacity 0.3s, transform 0.3s",
                  transform: "translateY(-10px)",
                },

                ":hover::after, :focus::after": {
                  height: "5px",
                  opacity: "1",
                  transform: "translateY(0px)",
                },
              }}
              to={"/" + link.link}
              role="menuitem"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default NavLinks
