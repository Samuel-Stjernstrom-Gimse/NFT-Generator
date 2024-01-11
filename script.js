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
    let nft0 = document.createElement("img")
    let nft1 = document.createElement("img")
    let nft2 = document.createElement("img")
    let nft3 = document.createElement("img")
    let nft4 = document.createElement("img")

    nftContainer.style.top = `${(nftCount * 50) + 23}%`
    nftContainer.style.left = `47%`
    nftContainer.style.scale = `3`
    nftContainer.classList.add("frame")

    container.appendChild(nftContainer)

    nft0.style.filter = `drop-shadow(0 100px ${getRandomColor()})`
    nft1.style.filter = `drop-shadow(0 100px rgb(0,0,0)`
    nft2.style.filter = `drop-shadow(0 100px ${getRandomColor()})`
    nft3.style.filter = `drop-shadow(0 100px ${getRandomColor()})`
    nft4.style.filter = `drop-shadow(0 100px ${getRandomColor()})`

    nft0.src = `img/0.png`
    nft1.src = `img/1.png`
    nft2.src = `img/2.png`
    nft3.src = `img/3.png`
    nft4.src = `img/hat-hair/hat-${getRandomNumberInRange(1, 11)}.png`

    nft0.classList.add("image-parts")
    nft1.classList.add("image-parts")
    nft2.classList.add("image-parts")
    nft3.classList.add("image-parts")
    nft4.classList.add("image-parts")

    nftContainer.appendChild(nft0)
    nftContainer.appendChild(nft1)
    nftContainer.appendChild(nft2)
    nftContainer.appendChild(nft3)
    nftContainer.appendChild(nft4)

}

