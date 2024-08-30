import logo from './logo.svg';
import './App.css';
import Products from './components/products/Products';

function App() {
  return (
  <div  className='flex items-center justify-center bg-zinc-200 h-screen gap-x-6'>
    <Products  title="China" price={12000}  image="./imges/bg-move-4.png"></Products>
    <Products  title="Iran"  price={22000}  image="./imges/bg-move-6.png"></Products>
    <Products  title="France" price={3000}  image="./imges/bg-move-9.png"></Products>
    <Products  title="America"  price={89000} image="./imges/bg-move-10.png"></Products>
  </div>
   
  );
}

export default App;
