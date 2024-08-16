import Image from "next/image";
const NavBar = () => {
  return ( 
    <nav className="flex h-screen flex-col bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2 gap-4"> 
      <div className="flex items-center">
        <Image className="max-w-full"  src='/next.svg' alt="Next" width={200} height={200}/>
      </div>
      <ul className=" flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40"> 
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer ">Home</li>
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer ">Games</li>
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer ">Top 10</li>
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer ">Walkthrougs</li>
      </ul>
      <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer ">User</li>
      </ul>
    </nav>
   );
}
 
export {NavBar};