async function example(){
    const drop = await fetch('fetch.json')
    const date =await drop.json();
    console.log(date);
}
example()