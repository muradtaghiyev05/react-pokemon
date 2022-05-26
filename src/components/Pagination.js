import React from 'react'

function Pagination({toNext, toPrevious, previousPage, nextPage}) {
  return (
    <div>
        {previousPage && <button onClick={toPrevious}>previous</button>}
        {nextPage && <button onClick={toNext}>next</button>}
    </div>
  )
}

export default Pagination