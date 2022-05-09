import React from 'react'
import Document, {Html, Main, Head, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components' // ServerStyleSheet 는 styled component 를 ssr 할 수있게 제공

// document 커스텀
export default class MyDocument extends Document {
	// document 와 app.js 에서는 사용 getInitialProps (SSR Method)
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			// 원래 document 기능에다가 styleSheet 가 styled components 를 ssr 을 해주는 기능
			ctx.renderPage = () => originalRenderPage({
				enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
			});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
						<>
							{initialProps.styles}
							{sheet.getStyleElement()}
						</>
				),
			};
		} catch (error) {
			console.error(error);
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
				<Html>
					<Head/>
					<body>
					<Main/>
					<NextScript/>
					</body>
				</Html>
		);
	}
}