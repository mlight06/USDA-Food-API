import { Button } from "@mui/material";
import React from "react";

export default function Paginate({totalResults, resultsPerPage}) {

  // Need to create number of pages based on total results, and results per page

  let pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i)
  }

  return(
    <div>
      <div>
        { pageNumbers.length > 0 ? pageNumbers.map(number =>

        <Button>
          {number}
        </Button>
        )
        : null
        }
      </div>
    </div>
  )
}