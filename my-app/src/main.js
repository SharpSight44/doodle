import React from "react";
import { Navbar } from "./navbar";
import { Socials } from "./social";
import Litter from "./litter.jpg"



export const Main = () => {
  return (
    <div style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2020/08/21/15/45/golden-doodle-5506492_960_720.png")`, backgroundRepeat:"no-repeat"}}>
    <div style={{background:"rgba(195, 232, 232, .5)"}}>
       <h2 style={{fontWeight:"bolder", textAlign:"center", fontSize:"50px", paddingTop:"2%"}}> Loving, Healthy <br/> Well Trained Puppies</h2>
        
       <div style={{ display:"flex", justifyContent:"center"}}> <img style={{width:"650px", height:"400px", objectFit:"cover", border:"2px solid rgb(50, 64, 64)", borderRadius:"5%"}}src={Litter}></img></div>
       

       <div style={{width:"400px", fontSize:"20px", fontWeight:"bold", textAlign:"left", marginLeft:"3%"}}>
      <b style={{fontSize:"40px"}}> Welcome To ..<br/>
Mount Doodles Fam <br/></b>
 
OUR GOAL WILL ALWAYS BE TO PROVIDE QUALITY, HEALTHY, OUTSTANDING TEMPERAMENT, & TRAINED PUPPIES TO THE AMAZING FAMILIES OF OUR FUTURE LITTERS.
       </div>
       <div style={{display:"flex", justifyContent:"center"}}>
       <a href="https://www.gooddog.com/breeders/mount-doodles-fam-florida#breed_id=124" target="_blank"> <img style={{width:"100px"}} src="https://www.gooddog.com/assets/packs/media/src/assets/breeder_badge-a941acd55ce40c92d77a49e4568cc9f2.svg" /> </a>
       </div>
       </div>
       
      
    </div>
  );
};