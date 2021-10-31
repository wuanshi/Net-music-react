import React from 'react'

import { NewAblumWrapper, NewAblumContent } from './style'
import ThemeHeaderRCM from "@/components/theme-header-rcm";
function NewAblum() {
  return (
    <NewAblumWrapper>
      <ThemeHeaderRCM  title="新碟上架" target="/discover/album"/>
      <NewAblumContent>
        hhh
      </NewAblumContent>
    </NewAblumWrapper>
  )
}

export default NewAblum
