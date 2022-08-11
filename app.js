const xhr=new XMLHttpRequest()
let url="https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
xhr.open('GET',url)
xhr.onreadystatechange=()=>{
    if(xhr.status===200 && xhr.readyState===4){
        const response=JSON.parse(xhr.responseText)
        let output=''
        for(let i=0;i<response.length;i++){
            output+=`
            <div style="width:22%;margin:0.5em;border:2px solid gray;text-align:center;">
            <h4>Name: ${response[i].name}</h4>
            <h4>Email: ${response[i].email}</h4>
            <h4>Address: ${response[i].address.city}</h4>
            <h4>Phone: ${response[i].phone}</h4>
            <h4>Website: ${response[i].website}</h4>
            <h4>Company: ${response[i].company.name}</h4>
            
            
            
            </div>
            `
        }
        document.querySelector('#finds').innerHTML=output
    }
}
xhr.send()