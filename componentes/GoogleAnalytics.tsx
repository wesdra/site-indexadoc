import Script from "next/script"

const GoogleAnalytics = () => (
    <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-G787D00ZQN`}
    />
    <Script id="GoogleAnalytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G787D00ZQN', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)
export { GoogleAnalytics }

