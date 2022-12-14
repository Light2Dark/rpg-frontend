import Confession from "./components/Confessions"
import {useQuery} from "urql"
import { GetUsersDocument } from "./graphql/generated"

function App() {

  // query the api
  const [results] = useQuery({
    query: GetUsersDocument
  })

  return (
    <div className="w-4/5 m-auto mt-4">

      <div className="flex flex-row items-center gap-4 bg-orange-400">
        <h1 className="font-formal font-bold text-lg pl-2">Sun Confessions</h1>
        <a href="#" className="font-formal text-sm">post</a>
        <a href="#" className="font-formal text-sm">login</a>
      </div>

      <div className= "bg-[#F6F6EF]/80 px-2 py-2">
        {
          results.data?.users.map((user, index) => <Confession key={index} content={user.posts} />)
        }
      </div>
    </div>
  )
}

export default App
