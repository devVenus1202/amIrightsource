import * as React from "react";
import {
  Card,
  CardContent,
  Link,
  Typography,
} from "@material-ui/core";
import { DataItem } from "../interfaces";
type PropsType = {
  data: DataItem
}
export default function ResultItem(props: PropsType) {
  const data: DataItem = props.data;
  return (
    <Card className="mb-1">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {data.date_published}
        </Typography>
        <Typography variant="h5" component="h2">
          {data.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          <Link
            href={data.url}
            rel="noopener"
            target="_blank"
          >
            {data.url}
          </Link>
        </Typography>
        <Typography gutterBottom variant="body2" component="p">
          {data.snippet}
        </Typography>
        <Typography align="right" color="textSecondary" variant="body2">
          Risk score: {data.risk_score}
        </Typography>
      </CardContent>
    </Card>
  )
}
