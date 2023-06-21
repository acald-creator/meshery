import { defaultKeymap } from '@codemirror/commands'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { Delete, DoneAll, Fullscreen, FullscreenExit, Save } from '@mui/icons-material'
import { Box, Button, Divider, Grid, IconButton, SvgIcon, Tooltip, Typography } from '@mui/material'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FlipCard from '@/core/components/FlipCard'
import { TooltipButton } from '@/core/components/TooltipButton'
import { updateGridProps } from '@/core/features/grid/gridSlice'

const INITIAL_GRID_SIZE = { xl: 4, md: 6, xs: 12 }
const FULL_GRID_SIZE = { xl: 12, md: 12, xs: 12 }

function FiltersCard ({
  name,
  filters,
  fullScreen,
  updated_at
}) {
  const dispatch = useDispatch()
  // const filtersData = useSelector((state) => state.filter.filtersData)
  const gridProps = useSelector((state) => state.grid.gridProps)

  const editor = useRef()

  useEffect(() => {
    const startState = EditorState.create({
      doc: 'Hello World',
      extensions: [keymap.of(defaultKeymap)]
    })

    const view = new EditorView({ state: startState, parent: editor.current })

    return () => {
      view.destroy()
    }
  }, [])

  const [flipCardProps, setFlipCardProps] = useState({
    fullScreen: false,
    showCode: false
  })

  const toggleFullScreen = () => {
    setFlipCardProps({
      ...flipCardProps,
      fullScreen: !flipCardProps.fullScreen
    })
  }

  useEffect(() => {
    if (flipCardProps.fullScreen) {
      setFlipCardProps({
        ...flipCardProps,
        showCode: true
      })
    }
  }, [flipCardProps.fullScreen])

  const genericClickHandler = useCallback((ev, fn) => {
    ev.stopPropagation()
    fn()
  }, [])

  const handleRequestFullSize = () => {
    dispatch(updateGridProps({ ...gridProps, FULL_GRID_SIZE }))
  }

  const handleRequestSizeRestore = () => {
    dispatch(updateGridProps({ ...gridProps, INITIAL_GRID_SIZE }))
  }

  return (
    <Fragment>
      {flipCardProps.fullScreen && (
        <section ref={editor} />
      )}
      <FlipCard
        onClick={() => {
          console.log(gridProps)
          handleRequestFullSize()
          handleRequestSizeRestore()
        }}
        duration={600}
        onShow={() =>
          setFlipCardProps({
            ...flipCardProps,
            showCode: true
          })
        }
      >
        <Fragment>
          <div>
            <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" component={'div'}>
                {name}
              </Typography>
              <IconButton
                title="click to download"
                onClick={(e) => {
                  e.stopPropagation()
                  handleDownload()
                }}
              >
                <img src="" />
              </IconButton>
            </Box>
            <div>
              <div>
                {updated_at
                  ? (
                    <Typography color="primary" variant="caption">
                      Modified on:
                    </Typography>
                    )
                  : null}
              </div>
            </div>
          </div>
          <div>
            <div>
              <TooltipButton
                title="Undeploy"
                variant="contained"
                // onClick={(ev) => genericClickHandler(ev, handleUnDeploy)}
              >
                <SvgIcon />
              </TooltipButton>
              <TooltipButton
                title="Deploy"
                variant="contained"
                color="primary"
                // onClick={(ev) => genericClickHandler(ev, handleDeploy)}
              >
                <DoneAll />
              </TooltipButton>
            </div>
          </div>
        </Fragment>

        <Fragment>
          <Grid container spacing={1} alignContent="space-between" alignItems={'center'}>
            <Grid item xs={8}>
              <Typography variant="h6">
                {name}
              </Typography>
              <Tooltip title="Enter Fullscreen" arrow placement="top">
                <IconButton
                  onClick={(ev) =>
                    genericClickHandler(ev, () => {
                      toggleFullScreen()
                    })
                  }
                >
                  {fullScreen ? <FullscreenExit /> : <Fullscreen />}
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={12} onClick={(ev) => genericClickHandler(ev, () => { })}>
              <Divider variant="fullWidth" light />
              {/* <section ref={editor}></section> */}
            </Grid>
            <Grid item xs={8}>
              <div>
                <div>
                  <Typography color="primary" variant="caption">
                    Created at:
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <Tooltip title="Save" arrow placement="bottom">
                  <IconButton onClick={(ev) => genericClickHandler(ev, updateHandler)}>
                    <Save color="primary" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete" arrow placement="bottom">
                  <IconButton onClick={(ev) => genericClickHandler(ev, deleteHandler)}>
                    <Delete color="primary" />
                  </IconButton>
                </Tooltip>
              </div>
            </Grid>
          </Grid>
        </Fragment>
      </FlipCard>
    </Fragment>
  )
}

export default FiltersCard
