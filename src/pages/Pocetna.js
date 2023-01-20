import { useState } from "react"
import Nakit from "../components/Nakit"
import Kategorije from "../components/Kategorije"
import items from '../data'

const allCategories =['sve',...new Set(items.map((item)=>item.category))]
function Pocetna(){
    const [products,setProducts]= useState(items);
    const[categories]= useState(allCategories);

    
    const filterItems=(category)=>{
      if(category==='sve'){
    setProducts(items);
     return;
    }
      const newItems = items.filter((item)=>item.category === category);
      setProducts(newItems);
    };
    return <main>
      <section className='product section'>
        <Kategorije categories={categories} filterItems={filterItems}/>
        <Nakit items = {products}/>
      </section>
    </main>;
}

export default Pocetna