import React from 'react'

const Filter = (props) => {

    let filterData = props.filterData;
    let domain = props.domain;
    let setDomain = props.setDomain;

  function filterHandler(domain) {
    setDomain(domain);
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center text-black'>
      {
        filterData.map( (data) => (
          <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
          ${domain === data.domain ? 
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}
          `}
            key={data.id}
            onClick={() => filterHandler(data.domain)}
            >{data.domain} 
          </button>
        ))
      }
    </div>
  )
}

export default Filter

