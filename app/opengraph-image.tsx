import { ImageResponse } from 'next/og'

export const alt = 'Abdikarim Singir — Senior Graphic Designer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          padding: '90px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '140px',
            height: '10px',
            backgroundColor: '#FFB400',
            marginBottom: '48px',
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: '84px',
            color: '#141414',
            fontWeight: 300,
            letterSpacing: '-1px',
          }}
        >
          Abdikarim Singir
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '30px',
            color: '#8a8a8a',
            marginTop: '20px',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            fontWeight: 400,
          }}
        >
          Senior Graphic Designer
        </div>
      </div>
    ),
    { ...size }
  )
}
