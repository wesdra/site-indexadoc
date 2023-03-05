import Script from "next/script"
const GoogleAnalytics = () => (
    <>
        <Script async
            src="https://www.googletagmanager.com/gtag/js?id=G-G787D00ZQN"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-G787D00ZQN');
                `}
        </Script>
    </>
)
export { GoogleAnalytics }

