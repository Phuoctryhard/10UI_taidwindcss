import Five from './Five/Five'
import ProductReview from './Four'
import UserProfile from './ONE'
import JobList from './TWO'
import Collectionlist from './Three'
import Notification from './Six/Notification'
import Sevent from './Sevent/Sevent'
import JobPosition from './Eight/JobPosition'
import Nice from './Nice/Nice'
function App() {
  return (
    <>
      {/* có thể thêm h-screen ở ui:  1 2 */}
      <div className='w-full min-h-screen bg-[#E6EFFA] flex justify-center items-center '>
        {/* <UserProfile /> */}
        {/* <JobList /> */}

        {/* <Collectionlist/> */}
        {/* <ProductReview /> */}
        {/* <Five /> */}
        {/* <Notification /> */}
        {/* <Sevent /> */}
        {/* <JobPosition /> */}
        <Nice />
      </div>
    </>
  )
}

export default App
