const rando = ['Monday', 2, 'Wednesday', 4 ,'Friday', 6 , 'Sunday']

const iterateWithAsyncAwait = async(array) => {

    for(const value of array) {
        await new Promise (resolve => setTimeout(resolve,1000));
        console.log(value);
    }
    /* await new Promise(resolve => {
        setTimeout(() => {
            array.forEach(element => console.log(`${element}`)
                );
                resolve(); }, 1500);}); */

    
}

iterateWithAsyncAwait(rando);

const BASEURL = 'https://reqres.in/api/users/2'
const awaitCall = async() => {
    try{
        let response = await fetch(`${BASEURL}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            }
        })

        let user = await response.json();
        console.log(user);
    }catch(error){
        console.error(`Failed fetch`)
    }
}

awaitCall();

