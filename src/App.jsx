
const App = ()=>{
  // const [username, setusername] = useState("");

  const submithandler = (e)=>{
    e.preventDefault();
    console.log(username);
  };
  
  return(
    <div className="p-3 rounded w-[80%] mx-auto mt-10 bg-zinc-300"> 
      <form onSubmit={submithandler}>
        <input
         type="text" 
         placeholder="username"
         name="username"
         onChange={(e)=> setusername(e.target.value)}
         value={"nikita"}
         />
       
         <button>submit</button>
         
         </form>
    </div>
  )
}
export default App; 