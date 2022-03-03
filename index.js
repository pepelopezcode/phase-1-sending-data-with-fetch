// Add your code here
/* 
function submit data (2 arg) user name, user email
*/
function submitData(userName, userEmail){
    const userInfo = {
        name: userName,
        email: userEmail,
    }
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userInfo)
    })
    .then(resp => resp.json())
    .then(data => document.querySelector('body').append(data.id))
    .catch(error => document.querySelector('body').append(error.message))
}
