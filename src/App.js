import logo from './logo.svg';
import './App.css';
import Shard from "./shard";
const Images = [
    {logo: "1.png", text: "Obraz nr 1 Mazaj 1 obraz przedstawia mazaki abstrakcyjne", price: 1000},
    {logo: "2.png", text: "Obraz nr 2 Mazaj 2 obraz przedstawia mazaki abstrakcyjne", price: 500},
    {logo: "3.png", text: "Obraz nr 3 Mazaj 3 obraz przedstawia mazaki abstrakcyjne", price: 300},
    {logo: "4.png", text: "Obraz nr 4 Mazaj 4 obraz przedstawia mazaki abstrakcyjne", price: 12000},
    {logo: "5.png", text: "Obraz nr 5 Mazaj 5 obraz przedstawia mazaki abstrakcyjne", price: 15000},
    {logo: "6.png", text: "Obraz nr 6 Mazaj 6 obraz przedstawia mazaki abstrakcyjne", price: 1600},
    {logo: "7.png", text: "Obraz nr 7 Mazaj 7 obraz przedstawia mazaki abstrakcyjne", price: 4600},
    {logo: "8.png", text: "Obraz nr 8 Mazaj 8A obraz przedstawia mazaki abstrakcyjne", price: 4600}

]
function App() {
  return (
    <div className="App">

        {Images.map(image => (
            <Shard Source={image.logo} Text={image.text} Price={image.price}></Shard>
            ))}


    </div>
  );
}

export default App;
