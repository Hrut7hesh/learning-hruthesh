import { useState } from "react";
function Student(){
    let [studentdetail,setdetails] = useState([]);
    let [sname, setname] = useState('');
    let [sage, setAge] = useState('');
   
    function name(e){
        setname(e.target.value);
    }
    function age(e){
        setAge(e.target.value);
    }
    function adddetail(sname,sage){
        let newdetailArr = [...studentdetail, {sname,sage}];
        setdetails(newdetailArr);
    }
    function deletedetail(indexToDelete){
        let newdetails = studentdetail.filter(function(val, index){
            if(indexToDelete == index) return false;
            return true;
        });
        setdetails(newdetails);
    }
    function clear(){
        let detaillist = [];
        setdetails(detaillist);
    }
    return(
        <div className="Hobby">
            <h1>Student Details</h1>
            <input type="text" name="name" value={sname} onChange={name}/>
            <input type="number" name="age" value={sage} onChange={age}/>
            <button onClick={()=>adddetail(sname,sage)}>Add</button>
            <button onClick={clear}>Clear</button>
           
                   {
                    studentdetail.map((val,index)=>{
                        return (
                            <div key={index}>
                                Name: {val.sname}, Age: {val.sage}
                                <button onClick={function(){
                                     deletedetail(index);
                                 }}>Delete</button>
                            </div>
                        )
                    })
                   }
                    
        </div>
    );
}
export default Student;