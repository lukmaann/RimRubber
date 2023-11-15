export const sampledata=()=>{
  const width = [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325];
const rim = [13, 14, 15, 16, 17, 18, 19, 20];
const profile = [35, 40, 45, 50, 55, 60, 65, 70, 75, 90];

const tires = [];

for (let r of rim) {
  for (let w of width) {
    for (let p of profile) {
      const brand=["Appolo","MRF","CEAT","JK","Breadgestone"]
      const locations=['belgaum','dharwad','bengalure','mysore','mumbai','jaipur','delhi']
      const images=['http://res.cloudinary.com/dtjcwbf9t/image/upload/v1699167497/hyjqcjq2cpdyayuxsmiq.jpg','https://res.cloudinary.com/dtjcwbf9t/image/upload/v1699512944/fxux5xbjirgnfic6y0mj.jpg','https://res.cloudinary.com/dtjcwbf9t/image/upload/v1699512957/ag4q16aqstfu7dq8hwxm.jpg','https://res.cloudinary.com/dtjcwbf9t/image/upload/v1699512921/uxxony6q4neel8imwszi.jpg','https://res.cloudinary.com/dtjcwbf9t/image/upload/v1698991644/erxdfebclglmnacfr6sb.jpg','https://res.cloudinary.com/dtjcwbf9t/image/upload/v1699167377/bmsg3ajdrm5bzdfrjzns.jpg']
      const price = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
      const tire = {
        image:images[Math.floor(Math.random()*images.length)] ,
        description: 'this is a sample description about tyres',
        price: price,
        brand: brand[Math.floor(Math.random()*5)],
        rim: r.toString(),
        width: w.toString(),
        profile: p.toString(),
        location:locations[Math.floor(Math.random()*locations.length)],
        status: 'active',
        seller:"6554786cc6f4d431c9d5b719"
      };
      tires.push(tire);
    }
  }
}

return tires

}

export const sampleoffers=[
    {
        "_id": "654c85597ae2e2d686f6af8d",
        "buyer": {
            "_id": "654c80c66b19deec62acbf47",
            "username": "lukmaannadaf",
            "firstName": "lukmaan",
            "lastName": "nadaf",
            "email": "lukmaandnadaf@gmail.com",
            "mobile": 919108623716,
            "isadmin": false,
            "offers": [
                "654c88d77682309e705e2968",
                "654d8c1b98b04b9902092484"
            ],
            "__v": 0
        },
        "item": {
            "_id": "654c84d17ae2e2d686f6ab0f",
            "image": "https://res.cloudinary.com/dtjcwbf9t/image/upload/v1698991644/erxdfebclglmnacfr6sb.jpg",
            "description": "this is a sample description about tyres",
            "price": 1505,
            "brand": "JK",
            "rim": "15",
            "width": "155",
            "profile": "65",
            "location": "dharwad",
            "status": "active",
            "seller": {
                "_id": "654c811f6b19deec62acbf50",
                "username": "TestUser01",
                "firstName": "test",
                "lastName": "user",
                "email": "testuser@gmail.com",
                "mobile": 9108623716,
                "isadmin": false,
                "offers": [],
                "__v": 0
            },
            "offers": [],
            "__v": 0,
            "createdAt": "2023-11-09T07:05:54.099Z",
            "updatedAt": "2023-11-09T07:05:54.099Z"
        },
        "offeredPrice": 1505,
        "status": "pending",
        "__v": 0
    },
    {
        "_id": "654c87921895c69712e655f7",
        "buyer": {
            "_id": "654c80c66b19deec62acbf47",
            "username": "lukmaannadaf",
            "firstName": "lukmaan",
            "lastName": "nadaf",
            "email": "lukmaandnadaf@gmail.com",
            "mobile": 919108623716,
            "isadmin": false,
            "offers": [
                "654c88d77682309e705e2968",
                "654d8c1b98b04b9902092484"
            ],
            "__v": 0
        },
        "item": {
            "_id": "654c84d17ae2e2d686f6aa51",
            "image": "https://res.cloudinary.com/dtjcwbf9t/image/upload/v1699512944/fxux5xbjirgnfic6y0mj.jpg",
            "description": "this is a sample description about tyres",
            "price": 2237,
            "brand": "CEAT",
            "rim": "14",
            "width": "155",
            "profile": "65",
            "location": "belgaum",
            "status": "active",
            "seller": {
                "_id": "654c811f6b19deec62acbf50",
                "username": "TestUser01",
                "firstName": "test",
                "lastName": "user",
                "email": "testuser@gmail.com",
                "mobile": 9108623716,
                "isadmin": false,
                "offers": [],
                "__v": 0
            },
            "offers": [],
            "__v": 0,
            "createdAt": "2023-11-09T07:05:54.088Z",
            "updatedAt": "2023-11-09T07:05:54.088Z"
        },
        "offeredPrice": 2200,
        "status": "pending",
        "__v": 0
    },
    {
        "_id": "654c88d77682309e705e2968",
        "buyer": {
            "_id": "654c80c66b19deec62acbf47",
            "username": "lukmaannadaf",
            "firstName": "lukmaan",
            "lastName": "nadaf",
            "email": "lukmaandnadaf@gmail.com",
            "mobile": 919108623716,
            "isadmin": false,
            "offers": [
                "654c88d77682309e705e2968",
                "654d8c1b98b04b9902092484"
            ],
            "__v": 0
        },
        "item": {
            "_id": "654c84d17ae2e2d686f6aa52",
            "image": "https://res.cloudinary.com/dtjcwbf9t/image/upload/v1698991644/erxdfebclglmnacfr6sb.jpg",
            "description": "this is a sample description about tyres",
            "price": 2043,
            "brand": "Appolo",
            "rim": "14",
            "width": "155",
            "profile": "70",
            "location": "mumbai",
            "status": "active",
            "seller": {
                "_id": "654c811f6b19deec62acbf50",
                "username": "TestUser01",
                "firstName": "test",
                "lastName": "user",
                "email": "testuser@gmail.com",
                "mobile": 9108623716,
                "isadmin": false,
                "offers": [],
                "__v": 0
            },
            "offers": [
                "654c88d77682309e705e2968"
            ],
            "__v": 0,
            "createdAt": "2023-11-09T07:05:54.088Z",
            "updatedAt": "2023-11-09T07:23:03.789Z"
        },
        "offeredPrice": 2000,
        "status": "pending",
        "__v": 0
    },
    {
        "_id": "654d8c1b98b04b9902092484",
        "buyer": {
            "_id": "654c80c66b19deec62acbf47",
            "username": "lukmaannadaf",
            "firstName": "lukmaan",
            "lastName": "nadaf",
            "email": "lukmaandnadaf@gmail.com",
            "mobile": 919108623716,
            "isadmin": false,
            "offers": [
                "654c88d77682309e705e2968",
                "654d8c1b98b04b9902092484"
            ],
            "__v": 0
        },
        "item": {
            "_id": "654c84d17ae2e2d686f6a993",
            "image": "http://res.cloudinary.com/dtjcwbf9t/image/upload/v1699167497/hyjqcjq2cpdyayuxsmiq.jpg",
            "description": "this is a sample description about tyres",
            "price": 2971,
            "brand": "CEAT",
            "rim": "13",
            "width": "155",
            "profile": "65",
            "location": "belgaum",
            "status": "active",
            "seller": {
                "_id": "654c811f6b19deec62acbf50",
                "username": "TestUser01",
                "firstName": "test",
                "lastName": "user",
                "email": "testuser@gmail.com",
                "mobile": 9108623716,
                "isadmin": false,
                "offers": [],
                "__v": 0
            },
            "offers": [
                "654d8c1b98b04b9902092484"
            ],
            "__v": 0,
            "createdAt": "2023-11-09T07:05:54.077Z",
            "updatedAt": "2023-11-10T01:49:16.342Z"
        },
        "offeredPrice": 2300,
        "status": "pending",
        "__v": 0
    }
]




















