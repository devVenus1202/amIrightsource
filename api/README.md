# Mock API

This directory contains the code for our mock API. It generates fake data that you can search through. It should be considered a placeholder for a real API that the UI would eventually use.

The API exposes a single endpoint at `/search` which accepts a single `query` search param. If searching for "foo" the path and query will look like `/search?query=foo`. The search algorithm is very rudimentary right now, but will serve for our purposes.

By default the API is served on port `3000`, but feel free to change this if you need.

The API response body should look like this:

```
{
  "results": [
    {
      "date_published": // ISO 8601 date string representing the publish date of the result
      "id": // UUID string for the result
      "risk_score": // integer between 1 and 100
      "snippet": // a paragraph of text taken from the result as a string
      "title": // title of the result as a string
      "url": // URL for the result
    }
    ...
  ]
}
```

The API simulates delay so it is possible for responses to arrive in a different order than requests. The API does not support pagination and no more than 20 results will be returned for any query. If there are no results the `results` array will be empty.
