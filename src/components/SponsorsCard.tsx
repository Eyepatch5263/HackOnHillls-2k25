import React from 'react'

const SponsorsCard = ({company,color}:{company:string,color:string}) => {
  return (
    <div className={`${color} p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105`}>
    <div className="bg-white/10 p-6 rounded-lg">
      <p className="text-white text-xl font-bold text-center">{company}</p>
    </div>
  </div>
  )
}

export default SponsorsCard