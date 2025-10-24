import Image from "next/image";
import { ButtonComponent } from "@/atoms/buttonatoms";
import { SearchComponent } from "@/atoms/searchatoms";
import  Wishatoms  from "@/atoms/badge"
import  CartAtom from "@/atoms/cartAtoms"
import { CatagoryAtom } from "@/atoms/catagoryAtom";
import {ProductAtoms} from "@/atoms/productAtoms";
import fruits from "../../public/fruits.png";
import apple from "../../public/apple.png";
import {ButtonAtom } from "@/atoms/button";
export default function Home() {
  return (
    <>
    {/* <h1>paramasivam</h1>
    <ButtonComponent name={"Login"}/>
    <br />
    <ButtonComponent name={"Register"}/>
    <SearchComponent/> */}
    {/* <Wishatoms count={100}/>
    <CartAtom count={10}/> */}
    {/* <CatagoryAtom path={fruits} name={"Fruits & Vegetables"}/> */}
    <ProductAtoms path={apple} name={"100 Percent Apple Juice - 64 fl oz Bottle"} price={"30"} discountPrice={"40"}/>
    
    </>
  );
}
