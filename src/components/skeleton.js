// components/SkeletonLoader.js
const SkeletonLoader = () => {
  return (
    <div className='p-4'>
      <div className='flex animate-pulse space-x-4'>
        <div className='h-6 w-6 rounded-full bg-gray-400'></div>
        <div className='flex-1 space-y-4 py-1'>
          <div className='h-3 w-3/4 rounded bg-gray-400'></div>
          <div className='space-y-2'>
            <div className='h-3 rounded bg-gray-400'></div>
            <div className='h-3 w-5/6 rounded bg-gray-400'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader
