import { useEffect, useState } from "react"
import supabase from "@/lib/supabase"
function RouteLayout() {
  const [count, setCount] = useState(0)
  const [items, setData] = useState<any>('')
console.log(items)
  useEffect(()=>{
    async function getData(){
    const {data} = await supabase.from('items').select('*');
      setData(data)
  }
  getData();
  },[])
  
  return (
    <>
      <div>
        <span className='text-red-900 font-bold'>TEST SUPABASE</span>
    
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {JSON.stringify(items,null,2)}
      </div>
    </>
  )
}

export default RouteLayout