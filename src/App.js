import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NB from './Components/NavBar';
import Homepage from './Components/Homepage';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import ScrollToTop from './Components/ScrollToTop';
import EverydayValue from './Components/EveryDayValue';
import AlaCarteCombo from './Components/AlaCarteCombo';
import Sharing from './Components/Sharing';
import SnackNBevrages from './Components/SnackNBevrages';


import KrunchBurger from './Components/EverydayValue/KrunchBurger';
import RiceNSpice from './Components/EverydayValue/RiceNSpice';
import KrunchDrink from './Components/EverydayValue/KrunchDrink';
import Zingerettha from './Components/EverydayValue/Zingerettha';


import Twister from './Components/AlaCarteCombo/Twister';
import ZingerBurger from './Components/AlaCarteCombo/ZingerBurger';
import ZingerStacker from './Components/AlaCarteCombo/ZingerStacker';
import KentuckyBurger from './Components/AlaCarteCombo/KentuckyBurger';


import ValueBucket from './Components/Sharing/ValueBucket';
import FFONE from './Components/Sharing/FFONE';
import FFTWO from './Components/Sharing/FFTWO';
import FFTHREE from './Components/Sharing/FFTHREE';


import CrispyBox from './Components/Bevrages/CrispyBox';
import Boneless from './Components/Bevrages/Boneless';
import Wow from './Components/Bevrages/Wow';
import Duo from './Components/Bevrages/CrispyDou';


import data1 from './Components/FF1Data';
import data2 from './Components/FF2Data';
import data3 from './Components/FF3Data';
import data4 from './Components/ValueBucketData';
import data6 from './Components/KBData';
import data7 from './Components/ChipsData';
import data8 from './Components/ZingData';
import data9 from './Components/KBDData';
import data10 from './Components/CrispyDuoData';
import data11 from './Components/BonelessData';
import data12 from './Components/CrispyData';
import data13 from './Components/WowData';
import data14 from './Components/TData';
import data15 from './Components/ZBData';
import data16 from './Components/ZSCData';
import data17 from './Components/KBurgerData';
import Bucket from './Components/Bucket';
import Footer from './Components/Footer';






function App() {
  const [num, setNum] = useState([])
  const [count, setCount] = useState(1);
  const { items1 } = data1
  const { items2 } = data2
  const { items3 } = data3
  const { items4 } = data4
  const { items6 } = data6
  const { items7 } = data7
  const { items8 } = data8
  const { items9 } = data9
  const { items10 } = data10
  const { items11 } = data11
  const { items12 } = data12
  const { items13 } = data13
  const { items14 } = data14
  const { items15 } = data15
  const { items16 } = data16
  const { items17 } = data17
  const itemPrice = num.reduce((a, c) => a + c.price * c.qty, 0)




  const incre = () => {
    setCount(count + 1);
  }


  const decre = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }



  const Add = (item) => {
    const exist = num.find((x) => x.id === item.id)//checks if item is alreadry in the cart

    if (exist && count === 1) {// to increase the item number

      const newItem = num.map((x) => {
        return x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x

      })

      setNum(newItem)
      localStorage.setItem('num', JSON.stringify(newItem))

    }



    else if (exist && count > 1) {
      const newItem = num.map((x) => {

        return x.id === item.id ? { ...exist, qty: exist.qty + count } : x
      })

      setNum(newItem)

    }


    else {
      const firstTime = [...num, { ...item, qty: count }]//adds the item if not already added

      setNum(firstTime)

      localStorage.setItem('num', JSON.stringify(firstTime))


    }

    setCount(1)

  }





  const onRemove = (item) => {
    const exist = num.find((x) => x.id === item.id)

    if (exist.qty === 1) {

      const newcartItems = num.filter((x) => x.id !== item.id)
      setNum(newcartItems)
      localStorage.setItem('num', JSON.stringify(newcartItems))

    }



    else {
      const newItem = num.map((x) => {
        return x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
      })

      setNum(newItem)

      localStorage.setItem('num', JSON.stringify(newItem))

    }

  }



  const onremove = (item) => {
    const exist = num.find((x) => x.id === item.id)

    if (exist.qty >= 1 && count >= 1) {
      const newcartItems = num.filter((x) => x.id !== item.id)
      setNum(newcartItems)
      localStorage.setItem('num', JSON.stringify(newcartItems))

    }



    else {
      const newItem = num.map((x) => {
        return x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x

      })

      setNum(newItem)

      localStorage.setItem('num', JSON.stringify(newItem))

    }

  }



  useEffect(() => {
    setNum(localStorage.getItem('num') ? JSON.parse(localStorage.getItem('num')) : [])
  }, [])


  return (

    <div>

      <BrowserRouter>

        <ScrollToTop />

        <NB onRemove={onRemove} Add={Add} itemPrice={itemPrice} num={num.length} Num={num} />

        <Routes>

          <Route exact path='/' element={<Homepage Add={Add} items6={items6} items7={items7} items10={items10} items11={items11} />} />
          <Route exact path='/h' element={<Login />} />
          <Route exact path='/s' element={<Signup />} />
          <Route exact path='/a1' element={<EverydayValue Add={Add} items6={items6} items7={items7} items8={items8} items9={items9} />} />
          <Route exact path='/b1' element={<AlaCarteCombo Add={Add} items14={items14} items15={items15} items16={items16} items17={items17} />} />
          <Route exact path='/d1' element={<Sharing Add={Add} items1={items1} items2={items2} items3={items3} items4={items4} />} />
          <Route exact path='/e1' element={<SnackNBevrages Add={Add} items10={items10} items11={items11} items12={items12} items13={items13} />} />


          {/*Everyday Value routes */}
          <Route exact path='/krunchyBurger' element={<KrunchBurger incre={incre} decre={decre} count={count} Add={Add} items6={items6} />} />
          <Route exact path='/RiceNSpice' element={<RiceNSpice incre={incre} decre={decre} count={count} Add={Add} items7={items7} />} />
          <Route exact path='/KrunchBurgerDrink' element={<KrunchDrink incre={incre} decre={decre} count={count} Add={Add} items9={items9} />} />
          <Route exact path='/Zingeratha' element={<Zingerettha incre={incre} decre={decre} count={count} Add={Add} items8={items8} />} />


          {/*Ala Carte Combos routes */}
          <Route exact path='/Twister' element={<Twister incre={incre} decre={decre} count={count} Add={Add} items14={items14} />} />
          <Route exact path='/ZingerBurger' element={<ZingerBurger incre={incre} decre={decre} count={count} Add={Add} items15={items15} />} />
          <Route exact path='/ZingerStackerCombo' element={<ZingerStacker incre={incre} decre={decre} count={count} Add={Add} items16={items16} />} />
          <Route exact path='/KentuckyBurger' element={<KentuckyBurger incre={incre} decre={decre} count={count} Add={Add} items17={items17} />} />


          {/*Sharing routes */}
          <Route exact path='/ValueBucket' element={<ValueBucket incre={incre} decre={decre} count={count} Add={Add} items4={items4} />} />
          <Route exact path='/FamilyFestival1' element={<FFONE incre={incre} decre={decre} count={count} Add={Add} items1={items1} />} />
          <Route exact path='/FamilyFestival2' element={<FFTWO incre={incre} decre={decre} count={count} Add={Add} items2={items2} />} />
          <Route exact path='/FamilyFestival3' element={<FFTHREE incre={incre} decre={decre} count={count} Add={Add} items3={items3} />} />


          {/*Bevrages routes */}
          <Route exact path='/CrispyBox' element={<CrispyBox incre={incre} decre={decre} count={count} Add={Add} items12={items12} />} />
          <Route exact path='/BonelessMealBox' element={<Boneless incre={incre} decre={decre} count={count} Add={Add} items11={items11} />} />
          <Route exact path='/WowMealBox' element={<Wow incre={incre} decre={decre} count={count} Add={Add} items13={items13} />} />
          <Route exact path='/CrispyDuoBox' element={<Duo incre={incre} decre={decre} count={count} Add={Add} items10={items10} />} />
          <Route exact path='/Bucket' element={<Bucket Num={num} num={num} itemPrice={itemPrice} onRemove={onRemove} onremove={onremove} Add={Add} />} />

        </Routes>

        <Footer />

      </BrowserRouter>

    </div>

  );

}

export default App;
