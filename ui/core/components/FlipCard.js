import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import clsx from 'clsx'
import { forwardRef, isValidElement, useEffect, useMemo, useState, useRef } from 'react'

import { styled } from '@mui/material'
import { animated, useSpring } from 'react-spring'

const MesheryCardLayoutWrapper = styled(animated.div)({
  height: "100%",
  backgroundColor: "transparent",
  perspective: "500px"
})

const MesheryCardContentWrapper = styled(animated.div)(({ flipped }) => ({
  height: '100%',
  backfaceVisibility: 'hidden',
  transform: flipped ? 'scale(-1, 1)' : 'none',
}))

const MesheryCardLayout = ({ onClick = () => { }, children }) => {
  return (
    <MesheryCardLayoutWrapper onClick={onClick}>
      {children}
    </MesheryCardLayoutWrapper>
  )
}

const MesheryFrontContent = ({ children }) => {
  return <Box>{children}</Box>
}

const MesheryBackContent = ({ children }) => {
  return <Box sx={{ transform: 'scale(-1,1)', maxWidth: 'inherit' }}>{children}</Box>
}

const MesheryCardContent = ({
  flipped,
  frontContent,
  backContent
}) => {
  const animationProps = useSpring({
    transform: `scale(${flipped ? -1 : 1}, 1)`,
    config: { tension: 300, friction: 26 }
  })

  return (
    <MesheryCardContentWrapper style={animationProps} flipped={flipped}>
      {flipped ? <MesheryBackContent>{backContent}</MesheryBackContent> : <MesheryFrontContent>{frontContent}</MesheryFrontContent>}
    </MesheryCardContentWrapper>
  )
}

export default function FlipCard({
  duration = 300,
  onClick = () => { },
  onShow = () => { },
  frontContent,
  backContent,
  ...props
}) {
  const [flipped, setFlipped] = useState(false)
  const [activeBack, setActiveBack] = useState(false)

  const timeout = useRef(null)

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current)

    timeout.current = setTimeout(() => {
      setActiveBack(flipped)
    }, duration / 6)

    return () => {
      clearTimeout(timeout.currentt)
    }
  }, [duration, flipped])

  if (!frontContent || !backContent) {
    console.error("FlipCard requires two child items in order to create a Flip Card")
    return null
  }

  return (
    <MesheryCardLayout
      {...props}
      onClick={() => {
        setFlipped(!flipped)
        onClick && onClick()
        onShow && onShow()
      }}
    >
      <MesheryCardContent
        flipped={flipped}
        frontContent={frontContent}
        backContent={backContent}
      />
    </MesheryCardLayout>
  )
}
