import Image from "next/image";
import { ButtonComponent } from "@/atoms/buttonatoms";
import { SearchComponent } from "@/atoms/searchatoms";
import  Wishatoms  from "@/atoms/badge"
import  CartAtom from "@/atoms/cartAtoms"
import { CatagoryAtom } from "@/atoms/catagoryAtom";
import {ProductAtoms} from "@/atoms/productAtoms";
import fruits from "../../public/fruits.png";
import apple from "../../public/apple.png";
import fortune from "../../public/fortune.png";
import {ButtonAtom } from "@/atoms/button";
import {YourCardAtoms } from "@/atoms/yourcardatoms";
import {QuantityAtom } from "@/atoms/quantity";
import CardTotal from "@/atoms/cartTotalAtoms"
import YourOrderAtoms from "@/atoms/yourorderAtoms";
import MyProfileAtoms from "@/atoms/myProfileAtoms";
import FullnameInput from "@/atoms/inputFieldAtoms";
import ChagePasswordAtoms from "@/atoms/changePasswordAtoms";
export default function Home() {
  return (
    <>
    {/* <h1>paramasivam</h1>
    <ButtonComponent name={"Login"}/>
    <br />
    <ButtonComponent name={"Register"}/>
    <SearchComponent/>
    <Wishatoms count={100}/>
    <CartAtom count={10}/>
    <CatagoryAtom path={fruits} name={"Fruits & Vegetables"}/>
    <ProductAtoms path={apple} name={"100 Percent Apple Juice - 64 fl oz Bottle"} price={"30"} discountPrice={"40"}/>
    <YourCardAtoms name={"Fortune Sunlite Refined Sunflower Oil 1 L"} Brand={"Fortune"} Quantity={"2"} price={"20"} discount={"14"} discountPrice={"10"} path={fortune}/> 
     */}
    {/* <CardTotal/> */}
    {/* <YourOrderAtoms path={fortune}/> */}
    {/* <MyProfileAtoms/> */}
    {/* <ChagePasswordAtoms/> */}

    </>
  );
}
