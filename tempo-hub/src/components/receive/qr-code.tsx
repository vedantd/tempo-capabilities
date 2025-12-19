'use client'

import { QRCodeSVG } from 'qrcode.react'

interface QRCodeProps {
  value: string
  size?: number
  className?: string
}

export function QRCode({ value, size = 200, className }: QRCodeProps) {
  return (
    <div className={`flex items-center justify-center p-4 bg-white rounded-lg ${className}`}>
      <QRCodeSVG
        value={value}
        size={size}
        level="H"
        includeMargin={false}
        fgColor="#000000"
        bgColor="#ffffff"
      />
    </div>
  )
}

