import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetdata from '../use-site-metadata'

function Head(props) {
  const siteMetadata = useSiteMetdata()
  const title = props.title
    ? `${props.title} | ${siteMetadata.title}`
    : siteMetadata.title
  const description = props.description || siteMetadata.description
  const lang = props.lang || siteMetadata.lang

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteMetadata.imageUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <script async src='https://www.googletagmanager.com/gtag/js?id=UA-221877909-1'></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-221877909-1');
        `}
      </script>
      <html lang={lang} />
    </Helmet>
  )
}

export default Head
