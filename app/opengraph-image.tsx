import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Kaname — Specification-Driven AI Delivery'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const googleFontCss = await fetch(
    `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&text=%E8%A6%81`,
    { headers: { 'User-Agent': 'Mozilla/5.0' } }
  ).then((r) => r.text())

  const fontUrl = googleFontCss.match(/src: url\(([^)]+)\) format\('woff2'\)/)?.[1]
  const fontData = fontUrl
    ? await fetch(fontUrl).then((r) => r.arrayBuffer())
    : null

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f172a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontSize: 240,
            color: 'white',
            fontFamily: fontData ? '"Noto Sans JP"' : 'serif',
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          要
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#64748b',
            marginTop: 32,
            letterSpacing: '0.3em',
            fontFamily: 'sans-serif',
          }}
        >
          KANAME
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: 'Noto Sans JP', data: fontData, style: 'normal', weight: 300 }]
        : [],
    }
  )
}
