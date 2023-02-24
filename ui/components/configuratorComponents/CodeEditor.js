import { Eco } from "@material-ui/icons";
import { Card, CardContent, IconButton } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StreamLanguage } from "@codemirror/language";
import { oneDark } from "@codemirror/theme-one-dark";
import { basicSetup } from "codemirror";
import { useEffect, useMemo, useState } from "react";

import CodeMirror from "rodemirror";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  wrapper : {
    [theme.breakpoints.up('md')] : {
      top : ({ scrollPos }) => scrollPos >= 106 ? 106 : window.scrollY > 0 ? 208 - scrollPos : "auto",
      position : "fixed",
      minWidth : "calc(50% - 175px)",
      maxWidth : "calc(50% - 175px)",
    },
  },
}))

export default function CodeEditor({ cleanHandler }) {
  const [yaml, isYaml] = useState(false);
  const [setStyle] = useState(67);
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => { })
    }
  }, [])

  const handleScroll = () => {
    setStyle(window.scrollY)
  }

  const extensions = useMemo(
    () =>
      isYaml
        ? [basicSetup, oneDark, StreamLanguage.define(yaml)]
        : [basicSetup, oneDark],
    [isYaml]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.wrapper}>
        <Card elevation={0} style={{ position : "sticky" }}>
          <CardContent>
            <CodeMirror
              value={yaml}
              extensions={extensions}
            />
            <IconButton
              style={{
                position : "absolute",
                right : "24px",
                bottom : "30px",
                color : "#fff",
                zIndex : 11,
                backgroundColor : 'rgb(255,255,255,0.05)'
              }}
              onClick={cleanHandler}
            >
              <Eco />
            </IconButton>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  )
}

/*
const useStyles = makeStyles(theme => ({
  cardRoot : {
    position : "sticky"
  },
  codeMirror : {
    '& .CodeMirror' : {
      minHeight : "300px",
      height : ({ scrollPos }) => getDynamicVh(scrollPos),
    }
  },

  icon : {

  }
}));
*/

/*
export default function CodeEditor({ yaml, saveCodeEditorChanges, cleanHandler }) {
  const [style, setStyle] = useState(67)
  const classes = useStyles({ scrollPos : style });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  },[])

  const handleScroll = () => {
    setStyle(window.scrollY)
  }

  return (
    <div className={classes.wrapper} >
      <Card
        elevation={0}
        // @ts-ignore
        className={classes.cardRoot}
      >
        <CardContent >
          <CodeMirror
            value={yaml}
            className={classes.codeMirror}
            options={{
              theme : "material",
              lineNumbers : true,
              lineWrapping : true,
              gutters : ["CodeMirror-lint-markers"],
              mode : "text/x-yaml",
            }}
            onBlur={(a) => saveCodeEditorChanges(a)}
            style={{
              '& .CodeMirror' : {
                minHeight : "300px",
                height : '54vh',
              }
            }}
          />
          <IconButton className={classes.icon} onClick={cleanHandler}>
            <Eco />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
}
*/

/**
 * Provides dynamic height according to scroll calculations
 *
 * @param {DoubleRange} scrollPos
 * @returns dynamically calcultaed height in vh
 */
/*
function getDynamicVh(scrollPos) {
  if (window.scrollY == 0) {
    return '67vh'
  }
  const per = getScrollPercentage()
  const threshold = 0.06;
  const vh = 67 + 15*(per/threshold); // calc(67vh)
  if (per < threshold) {
    return scrollPos > 106 ? `${vh}vh` : '67vh';
  } else if (per > 0.95) {
    return 'calc(100vh - 232px)'
  } else {
    return "82vh"
  }
}

function getScrollPercentage() {
  return window.scrollY/(document.body.scrollHeight - window.innerHeight)
}
*/