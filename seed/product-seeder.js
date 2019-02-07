var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true } );


var products = [
    new Product ({
        imagePath:"https://vignette.wikia.nocookie.net/assassinscreed/images/0/0b/Assassin%27s_Creed_Unity_Cover.jpg/revision/latest?cb=20140610082722",
        title: "Assassin's Creed Origins",
        description: "historic game",
        price: 10
    }),
    new Product ({
        imagePath:"https://i5.walmartimages.ca/images/Large/300/609/999999-887256300609.jpg",
        title: "Far Cry 4",
        description: "Amazing Game",
        price: 30
    }),
    new Product ({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/71cTCvSFJTL._SY500_.jpg",
        title: "PlayerUnknown's Battle Grounds",
        description: "Marvellous game",
        price: 20
    }),
    new Product ({
        imagePath: "https://images.g2a.com/newlayout/323x433/1x1x0/2fdc57faf840/5910ef2f5bafe38a5d067ed1",
        title: "Sniper: Ghost Warrior 2",
        description: "Sniper Game",
        price: 5
    }),
    new Product ({
        imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-es0F7bFjvQbigf8MgVO1vZmnzraPed9h_bCXXmYSEDJy2wH4r6PLyKE",
        title: "Call Of Duty: Ghosts",
        description: "Astonishing Game",
        price: 25
    }),
    new Product ({
        imagePath: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Battlefield_4_cover_art.jpg/220px-Battlefield_4_cover_art.jpg",
        title: "Battlefield 4",
        description: "War Game",
        price: 20
    }),
    new Product ({
        imagePath: "https://static.raru.co.za/cover/2014/06/29/1784728-l.jpg?v=1404044687",
        title: "The Witcher 3: Wild Hunt",
        description: "Adventrous Game",
        price: 25
    })
];

var done = 0;

for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done == products.length){
            exit();
        }
    })
}

function exit(){
    mongoose.disconnect();
    }
