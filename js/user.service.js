const url = "http://localhost:55555/api/users";
//AJAx call
    const Userlist = () => {
        
        //makes a call to get data
        $.getJSON(url)
        //onse you are executing .done than you know the data is back 
        .done( (res) =>{
    console.log(res)
    //refresh passes in the data
    refresh(res);
    
        });
};
const userdetail= (Id) => {
    
    //makes a call to get data
    $.getJSON(`${url}/${Id}`)
    //onse you are executing .done than you know the data is back 
    .done( (res) =>{
console.log(res)
//refresh passes in the data
refresh(res);
    });


};