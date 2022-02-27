const home = () => {
    const handle=()=>{
        alert("Home")
    }
    const para=(Name)=>{
        alert(`This ia a ${Name} page`)
    }
    return ( 
        <div>
            <button onClick={()=>para("to-do")}>Pass parameter</button>
        </div>
     );
}
 
export default home;