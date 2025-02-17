function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function main() {
   
    console.log(`start at ${getCurrentTime()}`);
    console.log(`end will appear later...`);

    await delay(2000);
    console.log(`★ at ${getCurrentTime()}`);

    await delay(3000);
    console.log(`◆ at ${getCurrentTime()}`);
    await delay(2000); 
    console.log(`end at ${getCurrentTime()}`);
}
main();