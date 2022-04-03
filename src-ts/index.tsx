import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AppBar,
  Grid,
  TextField,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import "./style.css";
import ResultItem from "./components/ResultItem";
import { searchData } from "./api";
import { DataItem } from "./interfaces";

function App() {
  const inputRef = React.useRef();
  const [result, setResult] = React.useState<null | Array<DataItem>>(null);
  const handleChange = React.useCallback((e: any) => {
    const searchKey = e.target.value;
    if (!searchKey) {
      setResult(null)
    } else {
      searchData(searchKey).then((res: {query: string, results: Array<DataItem>}) => {
        if (inputRef?.current?.value  === res.query) {
          setResult(res.results);
        }
      });
    }
  }, []);

  const averageRisk: string = React.useMemo(() => {
    if (!result || !result.length) return "N/A";
    const sum:number = result.reduce((aggregation: number, item: DataItem) => {
      return aggregation + item.risk_score;
    }, 0)
    return (sum / result.length).toFixed(1);
  }, [result]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Search prototype</Typography>
        </Toolbar>
      </AppBar>
      <Box mt={1}>
        <Grid
          alignItems="center"
          container
          direction="column"
          justify="center"
          spacing={3}
        >
          <Grid item md={6} sm={9} xs={12}>
            <TextField label="Search" onChange={handleChange} inputRef={inputRef}/>
          </Grid>
          <Grid item md={6} sm={9} xs={12}>
            {result && <Typography>Results count: {result?.length} | Average risk: {averageRisk}</Typography>}
          </Grid>
          <Grid item md={6} sm={9} xs={12}>
            {result && result.map((item: DataItem) => 
              <ResultItem key={item.id} data={item}/>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
