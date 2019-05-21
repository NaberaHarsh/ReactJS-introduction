import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';



/*function App(){
return(
 <h1>Hello World</h1>)}
export default App;

function App(){
return(
<div>
<h1>Hello World</h1>
<h1>Hello World</h1>
  </div> );}
export default App;
  
//ARROW funtion
let App=()=> {
  return (
    <div>
   <h1>Hello World</h1>
    <h1>Hello World</h1>
</div> )}
export default App;
*/

// function App(props)
// {
//  return <div>
//  <h1>{props.msg1}</h1>
//  <h1>{props.msg2}</h1>
//   </div> 
// }   
// function OtherComponent(props)
//   { const flag=1;
//      let output;
//     if(flag)
//       output= <p  className={props.cName}>Message</p>;
//     else
//      output= <p  className={props.cName}>No Message to show</p>;  
// return output;
//   }
// function Listdemo(props){
//   var arr=[];
//     for(let i=0; i<props.name.length;i++)
//     {
//      {arr.push(<li>{props.name[i]}</li>)}
//     }
//      return <ul>{arr}</ul>  
//     }
//   function Parent()
//   { return(
//     <div>
//     <App msg1='First Message' msg2='Second message'/>
//     <OtherComponent cName='styled'/>
//     <Listdemo name={["item1","item2","item3","item4"]}></Listdemo>
//     </div>
//   )
//   }
  // export default Parent;
 
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.list=this.props.list;
  }
  getList=()=>
{
  let items=[];
  for(let item of this.props.list)                                    
   items.push(<li>{item}</li>);
   //this.props.list.map((item)=><li>{item}</li>);
 return  items;
}

getValue=(e)=>
{
  console.log(e.target.value);
  this.newItem= e.target.value;
}
setValue=(e)=>
{
    let l= this.state.list;
    l.push(this.newItem);

    this.setState(
      {list:l}
      // document.getElementById("")
  )
}

render()
{
  return <div className="text-center todo" >
    <h1 className="alert alert-danger">To-Do List </h1>

    <button onClick={this.setValue}  >CLICK</button>
    <br></br>
    <br></br>
    <input type="text"  onChange={this.getValue}></input>
    <br></br>
    <br></br>
    <p>Total Items: {this.props.list.length}</p>
    
    <div className="container ">
    <ul className="List Groups demo" > 
    { this.getList() }
    </ul>
    </div>

  </div>
 // [remaining parts- blank in input block, changing item list to button, hover on every button including click,
// sm-12]
 
}
}
export default App;
