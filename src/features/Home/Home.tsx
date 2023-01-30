import React from 'react'
import HomeWrapper from './Home.styles'
import { HomeProps } from './types'

function Home({title} : HomeProps) {
  return (
    <HomeWrapper>{title}</HomeWrapper>
  )
}

export default Home