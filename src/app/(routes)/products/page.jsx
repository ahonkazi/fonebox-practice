import React from 'react'
import LayoutDefault, { LayoutSecondary } from '@/layout/LayoutDefault';
export default function Page() {
  return (
    <>
      <LayoutSecondary>
        <div className="site-container">
          Products page
          <div className="h-[2000px]"></div>
        </div>
      </LayoutSecondary>
    </>
  )
}

