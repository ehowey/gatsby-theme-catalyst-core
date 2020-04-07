<p align="center">
    <img alt="Gatsby Theme Catalyst" src="https://www.erichowey.dev/images/catalyst-logo-100.png" width="100" />
</p>
<h1 align="center">
  Gatsby Theme Catalyst
</h1>

![Test Themes](https://github.com/ehowey/gatsby-theme-catalyst/workflows/Test%20Themes/badge.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinionated set of integrated themes and starters that can be used as a boilerplate to accelerate your next Gatsby project. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters. These themes rely heavily on [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/).

**Catalyzing Start:**

```shell
   # create a new Gatsby site using the basic starter
    gatsby new catalyst https://github.com/ehowey/gatsby-starter-catalyst
   # change into your new directory
    cd catalyst
   # launch the site
    gatsby develop
```

**Example sites built with Gatsby-Theme-Catalyst:**

- [www.erichowey.dev](https://www.erichowey.dev/) - Based on `gatsby-starter-catalyst-blog`, [Github Repo](https://github.com/ehowey/erichoweydev)
- [www.briannasharpe.com](https://www.briannasharpe.com/) - Based on `gatsby-starter-catalyst-hydrogen`, [Github Repo](https://github.com/ehowey/briannasharpe)

## Docs Index

- [List of all themes](#list-of-all-themes)
- [Accessibility](#accessibility)
- [Getting Started](#getting-started)
- [Customizing the themes](#customizing-the-themes)

  - [Theme options](#theme-options)
  - [Modifying gatsby-config.js](#modifying-gatsby-configjs)
  - [Menu Links](#menu-links)
  - [Social Links](#social-links)
  - [Theme-ui, variants, and design tokens](#theme-ui-variants-and-design-tokens)
  - [Breakpoints](#breakpoints)
  - [Typography and changing fonts](#typography-and-changing-fonts)
  - [Changing logos and logo sizes](#changing-logos-and-logo-sizes)
  - [Context Providers](#context-providers)

- [SEO](#seo)
- [Migrating](#migrating)
- [Philosophy](#philosophy---less-is-more)
- [Acknowledgements and Contribution](#next-steps-and-contribution)

## List of all themes

| Theme                               | Demo                                                                                      | Description                                                                                                                                                                                                  |
| ----------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gatsby-theme-catalyst-core`        | [gatsby-starter-catalyst-core](https://gatsby-starter-catalyst-core.netlify.com/)         | This acts as the core theme on which all other themes are based. It houses a basic site architecture and components along with most commonly needed dependencies. Think of this as the foundation of a home. |
| `gatsby-theme-catalyst-header-top`  | [gatsby-starter-catalyst](https://gatsby-starter-catalyst.netlify.com/)                   | This adds a simple header to the core theme which includes support for anchor links and smooth scrolling out of the box. Logo on the left, nav on the right.                                                 |
| `gatsby-theme-catalyst-header-side` | [gatsby-starter-catalyst-blog](https://gatsby-starter-catalyst-blog.netlify.com/)         | This adds a sidebar style header to the core theme which includes support for anchor links and smooth scrolling out of the box. Logo is stacked on top, then title, then nav.                                |
| `gatsby-theme-catalyst-footer`      | [gatsby-starter-catalyst](https://gatsby-starter-catalyst.netlify.com/)                   | This adds a very basic footer to the core theme.                                                                                                                                                             |
| `gatsby-theme-catalyst-blog`        | [gatsby-starter-catalyst-blog](https://gatsby-starter-catalyst-blog.netlify.com/)         | This provides a basic plug-and-play blog for any Catalyst based site.                                                                                                                                        |
| `gatsby-theme-catalyst-sanity`      | [gatsby-starter-catalyst-sanity](https://gatsby-starter-catalyst-sanity.netlify.com/)     | This is a base theme for SANITY.io integration with catalyst themes and starters.                                                                                                                            |
| `gatsby-theme-catalyst-hydrogen`    | [gatsby-starter-catalyst-hydrogen](https://gatsby-starter-catalyst-hydrogen.netlify.com/) | This is a complete site using the catalyst set of themes. Designed to be used by a freelance writer as their portfolio. SANITY.io is used as a CMS.                                                          |

## Accessibility

Accessibility is important to me. I have made every effort to address accessibility issues in these themes and starters but would love additional feedback and help with more advanced accessibility topics as I am sure there are things I missed. Currently this theme is scoring 100 in Google Lighthouse audit for accessibility and passing tests using cypress-axe.

## Getting Started

This set of themes is developer focused and I assume you have a basic knowledge of the command line, GatsbyJS, web development, git, etc. If you are brand new check out the [getting started docs](https://www.gatsbyjs.org/docs/) for GatsbyJS.

The best way to get started is via a gatsby-starter that includes the theme(s) already. Currently the following starters are available:

**gatsby-starter-catalyst-core**:

`gatsby new catalyst-core https://github.com/ehowey/gatsby-starter-catalyst-core`

**gatsby-starter-catalyst**:

`gatsby new catalyst https://github.com/ehowey/gatsby-starter-catalyst`

**gatsby-starter-catalyst-blog**:

`gatsby new catalyst-blog https://github.com/ehowey/gatsby-starter-catalyst-blog`

**gatsby-starter-catalyst-sanity**:

`gatsby new catalyst-blog https://github.com/ehowey/gatsby-starter-catalyst-sanity`

**gatsby-starter-catalyst-hydrogen**:

`gatsby new catalyst-blog https://github.com/ehowey/gatsby-starter-catalyst-hydrogen`

## Customizing the themes

### Theme options

There are a number of options for the core theme, blog theme, and writer theme that act as flags to control various aspects of the site appearance and function. Try experimenting with some of these to get a feel for how it changes the site.

**gatsby-theme-catalyst-core:**

| Option                   | Values                                    | Description                                                                             |
| ------------------------ | ----------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentPath`            | String                                    | Defaults to "content/pages", determines where the pages are created from.               |
| `assetPath`              | String                                    | Defaults to "content/assets", determines where the page assets like images are located. |
| `displaySiteLogo`        | true or false                             | Defaults to true, controls whether the logo is displayed                                |
| `displaySiteLogoMobile`  | true or false                             | Defaults to true, controls whether the logo is displayed at the mobile breakpoint       |
| `displaySiteTitle`       | true or false                             | Defaults to true, controls whether the site title is displayed                          |
| `displaySiteTitleMobile` | true or false                             | Defaults to true, controls whether the site title is displayed at the mobile breakpoint |
| `invertLogo`             | true or false                             | Defaults to false, controls whether the logo is inverted when the mobile menu is open   |
| `useStickyHeader`        | true or false                             | Defaults to false, controls whether the header is sticky or static                      |
| `useSocialLinks`         | true or false                             | Defaults to true, controls whether the social links are displayed or not                |
| `useColorMode`           | true or false                             | Defaults to true, controls whether the dark mode toggle is available.                   |
| `footerContentLocation`  | String value, "left", "right" or "center" | Defaults to "left", determines the location of the footer content.                      |

**gatsby-theme-catalyst-blog:**

| Option          | Values | Description                                                                             |
| --------------- | ------ | --------------------------------------------------------------------------------------- |
| `contentPath`   | String | Defaults to "content/posts", determines where the posts are created from.               |
| `assetPath`     | String | Defaults to "content/assets", determines where the post assets like images are located. |
| `basePath`      | String | Defaults to "/blog", determines the page location for the post list.                    |
| `excerptLength` | String | Defaults to "140", determines the length of the excerpt use for post summaries.         |

**gatsby-theme-catalyst-sanity:**

| Option                   | Values  | Description                                                                                                                                |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| sanityProjectId          | String  | Required, Sanity project ID                                                                                                                |
| sanityDataset            | String  | Defaults to "production", change to reflect the dataset name you are using in Sanity                                                       |
| sanityToken              | String  | Defaults to null, should only be used with env variables for security purposes.                                                            |
| sanityWatchMode          | Boolean | Defaults to true, toggle for watch mode                                                                                                    |
| sanityOverlayDrafts      | Boolean | Defaults to false, toggle for live previews, a token and private dataset is required.                                                      |
| sanityCreatePages        | Boolean | Defaults to true, toggle to turn on/off page generation from SANITY.io.                                                                    |
| sanityCreatePosts        | Boolean | Defaults to true, toggle to turn on/off blog post page generation from SANITY.io.                                                          |
| sanityCreatePostsList    | Boolean | Defaults to true, toggle to turn on/off blog post list generation from SANITY.io.                                                          |
| sanityCreateProjects     | Boolean | Defaults to true, toggle to turn on/off project page generation from SANITY.io.                                                            |
| sanityCreateProjectsList | Boolean | Defaults to true, toggle to turn on/off project list generation from SANITY.io.                                                            |
| sanityPostPath           | String  | Defaults to "/posts", is the path for the posts index and also before posts, e.g. site.com/posts/post-1.                                   |
| sanityProjectPath        | String  | Defaults to "/projects", is the path for the projects index and also before projects, e.g. site.com/projects/post-1.                       |
| useSanityTheme           | Boolean | Experimental. Enables merging the theme-ui theme specification from SANITY.io allowing use of a GUI to change the site theme, e.g. colors. |

**gatsby-theme-catalyst-hydrogen:**

| Option              | Values  | Description                                                                           |
| ------------------- | ------- | ------------------------------------------------------------------------------------- |
| sanityProjectId     | String  | Required, Sanity project ID                                                           |
| sanityDataset       | String  | Defaults to "production", change to reflect the dataset name you are using in Sanity  |
| sanityToken         | String  | Defaults to null, should only be used with env variables for security purposes.       |
| sanityWatchMode     | Boolean | Defaults to true, toggle for watch mode                                               |
| sanityOverlayDrafts | Boolean | Defaults to false, toggle for live previews, a token and private dataset is required. |
| sanityCreatePages   | Boolean | Defaults to true, toggle to turn on/off page generation from SANITY.io.               |

### Modifying Gatsby-Config.JS

Theme options are set via the `gatsby-config.js` file. Specifically the navigation menu, social links menu, author name, site title, etc. The starter sites come with some pre-configured options you can modify. Most of these are fairly standard and where possible I Have included inline comments in the starters to help explain if needed. The `socialLinks` object and `menuLinks` object are a bit more complicated to support easier theme customization via the config file.

#### Menu Links

The `menuLinks` is fairly standard with the addition of one field, `type`, which controls whether the menu link is rendered as a Gatsby Link component or an anchor link using `react-scroll`. The options are `internal` or `anchor`.

Example Config:

```
menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Anchor 1`,
        link: `#anchor-1`,
        type: `anchor`, //internal or anchor
      },
]
```

You can also have a sub-menu or dropdown menu using `gatsby-theme-catalyst-header-top` and `internal` links only. You can see an example of this with `gatsby-starter-catalyst`. Eventually this feature will be expanded to other themes. At present it is _not_ working with anchor links, I do not think there is enough of a use case for this at present.

Example Config:

```
menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1`,
            type: `internal`, //internal or anchor
          },
          {
            name: `Sub 2`,
            link: `/sub-2`,
            type: `internal`, //internal or anchor
          },
        ],
      },
]
```

#### Social Links

The `socialLinks` in gatsby-config is a bit unique. You can specify a social media provider such as Twitter and also three different locations in the settings, `header`, `footer`, and `all` which will locate the icons appropriately. It will work with most major social platforms and has a fallback for displaying the text if a logo isn't pre-configured.

Example Config:

```
socialLinks: [
      {
        name: `Email`,
        link: `eric@erichowey.dev`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/ehowey`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com/erchwy`,
        location: `header`, //Options are "all", "header", "footer"
      },
    ],
```

### Theme-UI, variants, and design tokens

[Read about using theme-ui to customize a theme](https://www.gatsbyjs.org/blog/2019-07-03-customizing-styles-in-gatsby-themes-with-theme-ui/)

Theme-UI based design tokens are used throughout the Catalyst series of themes and starters as this is the suggested best practice when building Gatsby themes. The theme is based on the [tailwind presets](https://github.com/system-ui/theme-ui/tree/master/packages/preset-tailwind) as this provides a good base set of standard spacings, sizings, etc. You will also see a reference to colors like `baseColors.pink[5]` in the theme file, these basecolors can be found on the [TailwindCSS docs](https://tailwindcss.com/docs/customizing-colors/).

The file you should modify to set design tokens is always located in the following location:

    .
    ├── src
      ├── gatsby-plugin-theme-ui
        ├── index.js

Try changing some colors in the file and see what happens!

Most major areas of the site are preconfigured to use [variants](https://theme-ui.com/guides/variants). This allows you to more easily change css styles without having to shadow a whole file. The following are some of the variants are available to use:

- `variants.siteContainer`: Targets the container <div> for the entire site content
- `variants.main`: Targets the <main> component in the site, useful for changing spacing between <header>, <footer>, and <main> areas.
- `variants.contentContainer`: Targets the container <div> for the content, useful for changing site margins/content size.
- `variants.header`: Targets the root <header> component
- `variants.footer`: Targets the root <footer> component
- `variants.siteLogo`: Targets the logo component
- `variants.siteTitle`: Targets the root site title component, useful to change font size of the site title.
- `variants.navLink`: Targets the styles for the nav links in the header, useful to change the nav styles

Here is an example of changing the size of the site title using variants.

```js
variants: {
    siteTitle: {
      fontSize: [4, null, null, 5, null],
    },
  },
```

### Breakpoints

Breakpoints are set using Theme-UI theme file and default to 480px, 768px, 1024px, and 1440px. The mobile menu is enabled at the 2nd breakpoint, 768px, but you can change this by changing the second breakpoint.

```js
breakpoints: ["480px", "768px", "1024px", "1440px"],
```

The array notation is used to target different screen sizes based on the breakpoints set in the theme file. You can use `null`, to inherit the previous value.

```jsx
<h1
  sx={{
    // 0-479px: Red
    // 480px - 767px: Blue
    // 768px - 1023px: Yellow
    // 1024px - 1439px: Yellow
    // 1440px and up: Pink
    color: ["red", "blue", "yellow", null, "pink"],
  }}
>
  Breakpoints
</h1>
```

[Read more about breakpoints in theme-ui](https://theme-ui.com/theming/#breakpoints)

### Typography and changing fonts

To add a custom font you need to first add the font as a dependency in your starter site, for example:

`yarn add typeface-raleway`

Then at the top of `src\gatsby-theme-catalyst-core\theme.js` file you will need to import the font and declare it, like this for Raleway:

```
import { tailwind } from "@theme-ui/preset-tailwind"
import "typeface-raleway"

export default {
  ...tailwind,
  fonts: {
    ...tailwind.fonts,
    body: '"Raleway", sans-serif',
  },
}
```

### Changing logos and logo sizes

A common change you will need to make is to the logo and logo size.

The logo is found by default in the `src/content/assets` folder under the names `catalyst-site-logo.png`. Change this file to reflect your branding. You can use other file extensions, e.g. .jpg but you cannot change the file name. It is queried by file name for those that know graphQL, not by relativePath. So it will work with `catalyst-site-logo.jpg` but not with `logo-main.jpg`.

The logo size is managed in the following location: `src/gatsby-plugin-theme-ui/index.js`. In many cases the size of your logo will control the size of your navbar/header. There is also an option in the sizes file which can override the auto height inherited from content and specify a fixed height.

Try this in `src/gatsby-theme-catalyst-core/components/theme.js` for a big logo:

```
  sizes: {
    ...tailwind.sizes,
    maxPageWidth: "1440px", // Sets the max width of elements like the header/footer on really large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    headerHeight: "auto", // Provides fallback setting to control header height
    logoWidthXS: "80px", // Logo width on extra small screens, up to 480px
    logoWidthS: "150px", // Logo width on small screens, 480px - 768px
    logoWidthM: "150px", // Logo width on medium screens, 768px - 1024px
    logoWidthL: "260px", // Logo width on large screens, 1024px - 1440px
    logoWidthXL: "260px", // Logo width on extra large screens, above 1440px
    logoHeightXS: "80px", // Logo height on extra small screens, up to 480px
    logoHeightS: "150px", // Logo height on small screens, 480px - 768px
    logoHeightM: "150px", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "260px", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "260px", // Logo height on extra large screens, above 1440px
    iconsFooter: "32px", // Sets the icons size for the footer
    iconsHeader: "20px", // Sets the icons size for the header
  },
```

### catalyst-site-social.png

This file is used as the default image in places like Twitter and Facebook. This file is best in a 2:1 aspect ratio, something like 1200x600px. See the [twitter card docs](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image) for more information. You can use alternate image types such as .jpg if you want. It is queried by file name for those that know graphQL, not by relativePath. So it will work with `catalyst-social.jpg` but not with `social-image.jpg`.

### catalyst-site-icon.png

There is also a file called `catalyst-site-icon.png` that provides your icon for use `gatsby-plugin-manifest` to create icons for web, PWA, etc. This file should be square and at least 512x512px in dimensions.

### Context providers

There are two context providers that are globally available in the themes to manage component function or appearance based on state.

`isNavOpen`: True if the mobile nav menu is open

`isHome`: True if you are on the homepage, this can cause a flash of unstyled content so use with caution.

```js
// Import useContext and the context
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const Example = () => {
  // Access the context in your component
  const [isNavOpen] = useContext(NavContext)
  // Conditionally change css or render components
  return (
    <div
      sx={{
        height: "200px",
        width: "200px",
        backgroundColor: isNavOpen ? "red" : "blue",
      }}
    >
      {isNavOpen && <Component />}
    </div>
  )
}

export default Example
```

## SEO

By default Gatsby provides excellent SEO out of the box. I have extended this with a custom SEO component based on [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/) that provides basic open graph and metadata tags. It also provides a default social sharing image based on `catalyst-site-social.png`. The blog theme has a "featuredImage" field in the frontmatter which replaces the default social image. If a twitter profile is included in the `socialLinks` field in `gatsby-config.js` it automatically generates the correct metadata tags based on your profile.

## Migrating

The first place to start is by checking the changelog file.

**v1.0.0**

- Move your theme-ui file from `src/gatsby-theme-catalyst-core/theme.js` -> `src/gatsby-plugin-theme-ui/index.js`. No other change should be needed. This was done to be more in line with recommended best practice. There is now a 'base theme' for Theme-UI which is exported from `gatsby-theme-catalyst-core`. You can use this to write smaller and more condensed themes in the starters using the following syntax:

```
import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"

export default merge(BaseTheme, {
  // Modifications to the base theme go here. This is an example changing colors and using variants to change your navigation links. Uncomment the code below to see what happens.
})
```

- Depreciated `gatsby-theme-catalyst-writer` in favor of `gatsby-theme-catalyst-hydrogen`. If you were using the writer theme it will continue to work, and should work for a long time to come. If you want to migrate to hydrogen then it will be possible with a little effort as the expected data structures from SANITY were unchanged. The main change you need to make is to ensure you have the same SANITY.io schema files in your site as in the theme as this is where the GraphQL query is generated from. If you are having trouble migrating please get in touch via issues and I will help you out.

- This is technically not a breaking change but it could change your sites appearance. Base navigation link styles were simplified in the structural themes and then added back in for the presentational themes using variants in the Theme-UI file. You can see an example of this in `gatsby-theme-catalyst-hydrogen` if you would like to see how to do it on your site, look in `gatsby-theme-catalyst-hydrogen/src/gatsby-plugin-theme-ui/index.js` towards the end of the file.

**Removal of isMobile Context and mobileMenuBreakpoint**

These are depreciated and will stop working post v1.0. There was a perfomance issue with SSR and javascript that was causing a flash of unstyled content. I have reverted back to using normal media queries for changing to the mobile menu at the second breakpoint, 768px by default.

## Philosophy - Less is More

**Simple Core Theme**

`gatsby-theme-catalyst-core` was designed and built to be as simple and unstyled as possible. A barebones starting point which can be easily maintained in the future to manage dependencies on client sites.

**Child themes to extend the core theme**

These child-themes are focused on extending function and remain as design-agnostic as possible. Again this makes longterm maintenance easier for client sites. It is my preference to begin new projects without too much styling that has to be undone.

**Starter sites to extend and style the themes**

The starter sites provide a "quick start" for site development using the themes as dependencies. Currently the starter sites only provide basic implementation of the themes. It is my vision however that in time there could be more styled and complex starters released which do not need as much customization and include more rigid styling.

## Next Steps and Contribution

This is a passion project for me. I would love any additional feedback, suggestions and pull requests. I can be contacted via email at: <eric@erichowey.dev>

I would like to acknowledge all of the help I have gotten in working on this project from people answering questions on the GatsbyJS issues, [Chris Biscardi's blog](https://www.christopherbiscardi.com/), and the work that [@4lpine](https://twitter.com/4lpine) and [@jxnblk](https://twitter.com/jxnblk) have done documenting Theme-ui so well.
