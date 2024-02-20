import React from 'react'

const Stats = () => {

    const stats = [
        { id: 1, name: 'Maids Data', value: '1200+' },
        { id: 2, name: 'happy Customer', value: '7000+' },
        { id: 3, name: 'Support', value: '24x7 ' },
      ]
      
        return (
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-lg leading-7 font-semibold capitalize ">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-[#0856a9] text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }
      


export default Stats