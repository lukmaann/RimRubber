export const sampledata=()=>{
  const width = [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325];
const rim = [13, 14, 15, 16, 17, 18, 19, 20];
const profile = [35, 40, 45, 50, 55, 60, 65, 70, 75, 90];

const tires = [];

for (let r of rim) {
  for (let w of width) {
    for (let p of profile) {
      const brand=["Appolo","MRF","CEAT","JK","Breadgestone"]
      const images=['http://res.cloudinary.com/dtjcwbf9t/image/upload/v1699167497/hyjqcjq2cpdyayuxsmiq.jpg','https://res.cloudinary.com/dtjcwbf9t/image/upload/v1698991644/erxdfebclglmnacfr6sb.jpg','https://res.cloudinary.com/dtjcwbf9t/image/upload/v1699167377/bmsg3ajdrm5bzdfrjzns.jpg']
      const price = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
      const tire = {
        image:images[Math.floor(Math.random()*3)] ,
        description: 'nice tyre but i want to sell it',
        price: price,
        brand: brand[Math.floor(Math.random()*5)],
        rim: r.toString(),
        width: w.toString(),
        profile: p.toString(),
        location: 'Belgaum',
        status: 'active',
        seller:"65473b77e7d6fa9d2f7f40cb"
      };
      tires.push(tire);
    }
  }
}

return tires

}