// export const interests = [{ name: "Python", id: 1 }, { name: "Deep Learning", id: 2 }, { name: "Web Development", id: 3 }, { name: "Startup", id: 4 }, { name: "Design", id: 5 }]
// import './reactChallange.css';
// import { useState } from 'react';


// const ReactChallange=()=>{
//   const[isChecked,setIsChecked]=useState(false)
// const [interest,setInterest]=useState([{name:"Python", id:1},{name:"Deep Learning", id:2},{name:"Web Development", id:3},{name:"Startup", id:4},{name:"Design", id:5}]);
// let [selectedInstrests,setSelectedIntrests]=useState([])
// let newArr=[];
// let newSelectedIntrestes=[];
// const clickHundler=(data)=>{
//      newArr=interest.filter(item=>item.id!==data.id);
//      newSelectedIntrestes= selectedInstrests;
//     newSelectedIntrestes.push(data);
//     console.log({newSelectedIntrestes,newArr});
//     setInterest(newArr);
//     setSelectedIntrests(newSelectedIntrestes);
// }
// const swapedItem=(data)=>{
//    setSelectedIntrests(selectedInstrests.filter(item=>item.id!==data.id));
//    interest.push(data)
//    setInterest(interest);
//    console.log({interest});
// }