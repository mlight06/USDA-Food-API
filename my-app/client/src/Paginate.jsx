import { Button } from "@mui/material";
import React from "react";

export default function Paginate({totalResults, resultsPerPage, setPageNumber}) {

  // Need to create number of pages based on total results, and results per page
  console.log("paginate", totalResults, resultsPerPage)
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i)
  }

  return(
    <div>
      <div>
        { pageNumbers.length > 0 ? pageNumbers.map(number =>

        <Button onClick={() => setPageNumber(number)}>
          {number}
        </Button>
        )
        : null
        }
      </div>
    </div>
  )
}