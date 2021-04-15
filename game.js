
//intruction
var game = document.createElement("div");

game.style.position = "relative";
game.style.display = 'flex'
game.style.justifyContent = 'center'
game.style.alignItems = 'center'
document.body.appendChild(game);
var carHolder = [
    {
        img: './img/trucxanh0.jpg',
        value: 0,
        show: false,
        available: 2,
    },
    {
        img: './img/trucxanh1.jpg',
        value: 1,
        show: false,
        available: 2,
    },
    {
        img: './img/trucxanh2.jpg',
        value: 2,
        show: false,
        available: 2,
    },
    {
        img: './img/trucxanh3.jpg',
        value: 3,
        show: false,
        available: 2,
    },
    {
        img: './img/trucxanh4.jpg',
        value: 4,
        show: false,
        available: 2,
    },
    {
        img: './img/trucxanh5.jpg',
        value: 5,
        show: false,
        available: 2,
    },
    {
        img: './img/trucxanh6.jpg',
        value: 6,
        show: false,
        available: 2,
    },
    {
        img: './img/trucxanh7.jpg',
        value: 7,
        show: false,
        available: 2,
    },
    {
        img: './img/trucxanh8.jpg',
        value: 8,
        show: false,
        available: 2,
    },
    {
        img: './img/trucxanh9.jpg',
        value: 9,
        show: false,
        available: 2,
    },

]

function createImage(imageDetail, top, left, width, height, index) {
    var cover = document.createElement('div')
    var child = document.createElement('img')
    cover.style.backgroundImage = "url('./img/cover.jpg')";
    cover.style.position = 'absolute';
    cover.innerHTML = index
    cover.id='cover'+index
    cover.style.color = 'white'
    cover.style.display = 'flex'
    cover.style.justifyContent = 'center'
    cover.style.alignItems = 'center'
    cover.addEventListener('click', () => {
        clickCover(cover,imageDetail)
    })
    width && (cover.style.width = width + "px");
    height && (cover.style.height = height + "px");
    cover.style.top = top + "px";
    cover.style.left = left + "px";

    child.src = imageDetail.img;
    child.id='child'+index
    child.style.position = "absolute";
    width && (child.style.width = width + "px");
    height && (child.style.height = height + "px");
    child.style.top = top + "px";
    child.style.left = left + "px";
    game.appendChild(child);

    game.appendChild(cover);

}
var clickedImage = []
var clickedId=[]
function clickCover(cover,imageDetail) {
    imageDetail.show=true
    cover.style.display='none'
    clickedId.push(cover.id)
    clickedImage.push(imageDetail.value)
    if (clickedImage.length == 2) {
        if (clickedImage[0] === clickedImage[1]) {
            
            console.log("Same")
            setTimeout(() => {
                clickedId.map(item=>{
                    document.getElementById('child'+item.substring(5)).style.display='none'
                    console.log('Erase: ',item)
                    clickedId=[]
                    clickedImage=[]
                })
            }, 1000);

        }
        else {
            setTimeout(() => {
                clickedId.map(item=>{
                    document.getElementById('cover'+item.substring(5)).style.display='flex'
                    console.log('close:', item)
                    clickedImage=[]
                    clickedId=[]
                })
            }, 2000);
            console.log("Diff")
        }
  
      
    }

}

var img = document.createElement('img');
img.src = './img/trucxanh_bg.jpg';
document.body.appendChild(img);
var score = 0;
function getScore() {
    var ss = document.getElementById('score');
    ss.innerHTML = score.toString();
}
getScore()
function onClick() {
    score++
    getScore()
}
var btn = document.getElementById('btn')
btn.addEventListener('click', onClick)

//createImage('./img/trucxanh0.jpg', 10, 10, 100, 100, 1)

// var testing = document.createElement('div')
// testing.style.backgroundColor='green'
// testing.style.backgroundImage= "url('./img/cover.jpg')";
// testing.innerHTML='Hello'
// testing.style.display='flex'
// testing.style.justifyContent='center'
// testing.style.alignItems='center'
// testing.style.width='200px'
// testing.style.height='200px'
// testing.style.color='white';
// game.appendChild(testing)

function shuffleCard() {
    var count = 1;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            do {
                var randCard = Math.floor(Math.random() * carHolder.length)
            } while (carHolder[randCard].available == 0)
            carHolder[randCard].available--
            createImage(carHolder[randCard], i * 100, j * 100, 100, 100, count++)
        }
    }
}
shuffleCard()
var table = document.createElement('table');
for (var i = 1; i <= 5; i++) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var text1 = document.createTextNode('Text1');
    var text2 = document.createTextNode('Text2');

    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
}
document.body.appendChild(table);

window.addEventListener('click',(item)=>{

})