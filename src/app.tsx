import { AttendeeList } from './components/attendee-list'
import { Header } from './components/header'

export function App() {
  return (
    <div className='flex flex-col gap-5 py-5 mx-auto max-w-[1216px]'>
      <Header />
      
      <AttendeeList />
    </div>
  )
}

