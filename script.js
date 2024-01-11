let container = document.getElementById("container")
const getRandomColor = () => {
    const red = getRandomNumberInRange(0, 255);
    const green = getRandomNumberInRange(0, 255);
    const blue = getRandomNumberInRange(0, 255);
    return `rgb(${red},${green},${blue})`;
}
const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


for (let nftCount = 0; nftCount < 200; nftCount++){
    let nftDivContainer = document.createElement("div")
    let nftContainer = document.createElement("div")
    nftContainer.style.top = `${(nftCount * 50) + 23}%`
    nftContainer.style.left = `47%`
    nftContainer.style.scale = `3`


    nftContainer.classList.add("frame")
    container.appendChild(nftContainer)

    for (let i = 0; i < 5; i++) {

        let nft = document.createElement("img")
        nft.style.filter = `drop-shadow(0 100px ${getRandomColor()})`
        nft.src = `img/${i}.png`
        nft.classList.add("image-parts")
        nftContainer.appendChild(nft)
    }
}

