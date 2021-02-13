import { IonIcon, IonImg, IonThumbnail } from '@ionic/react';
import React, { useRef, useState } from 'react';
import './SeeVission.css';
import image from './images/woodenHouse.jpg';
import { closeOutline } from 'ionicons/icons';


export const SeeVission = ({onClose, state}:any) =>{
    const scrollRef = useRef<HTMLDivElement>() as any;
    const [tabs, setTabs] = useState({
        material: {
            state: true,
            bg: "black"
        },
        model: {
            state: false,
            bg: ""
        }
    });
    const changeTab = (cmd: string) =>{
        scrollRef.current.scrollTop = 0;
        if (cmd === "material"){
            setTabs({material: {state: true, bg: "black"}, model: {state: false, bg: ""}});
        }else if (cmd === "model"){
            setTabs({material: {state: false, bg: ""}, model: {state: true, bg: "black"}});
        }
    }
    return(
        <div hidden={!state} ref={scrollRef} className="see-vission-backdrop">
            <IonIcon class="see-vission-close see-vission-close-hover" onClick={()=>{
                if (onClose) onClose();
            }} icon={closeOutline}/>
            <div className="see-vission-tool-bar">
                <div onClick={()=>{
                    changeTab("material");
                }} style={{backgroundColor:tabs.material.bg}}>Material</div>
                <div onClick={()=>{
                    changeTab("model");
                }} style={{backgroundColor:tabs.model.bg}}>Model</div>
            </div>
            <div className="see-vission-container">
                <IonThumbnail className="see-vission-image">
                    <IonImg src={image}/>
                </IonThumbnail>
                <div hidden={!tabs.material.state}>
                    <div>
                        HARDWOOD DESCRIPTION &amp; SUPPLIER CONTACT US FOR ANY PROJECT THAT
                        INVOLVES WOOD
                    </div>
                    <div>
                        Cabbage Bark and Bullet Tree are comparable to Purple Heart in terms of hardness.
                    </div>
                    <p>
                        <b>CABBAGE BARK...</b>a tree that reaches heights up to 100ft with 2 to 4ft thick
                        trunks. Pricewise... Cabbage Bark is on the higher end of woods. The
                        heartwood is usually dark reddish brown with a sharp demarcation from the
                        yellowish sapwood. The heartwood often has very attractive lighter
                        laminations. The wood has no pronounced odor. It is also quite heavy and
                        durable with good impact resistance. Very versatile wood that is used for
                        flooring, furniture components, handicrafts and general construction as well.
                        It needs to dry slowly to avoid excessive distortion. Even though it is quite
                        hard, it is not particularly hard to work with. It has very good resistance to
                        most fungal rot and resistance to termites.
                    </p>
                    <p>
                        <b>MY LADY...</b>a large canopy tree growing up to 120ft high with trunks to 3ft
                        thick. The heartwood is often bright red later turning a light pinkish brown
                        after drying. A fairly inexpensive wood. The wood has no pronounced odor
                        when dry. Often used for interior applications, furniture, flooring, boatframes
                        and general heavy construction. The wood machines well and responds well
                        to most finishing tools. It is also able to be highly polished. The heartwood is
                        very resistant to most fungal rot.
                    </p>
                    <p>
                        <b>SAPODILLA...</b>a slow growing long lived tree that usually grows to around
                        60ft but up to 100ft when crowded in the forest. Also known as the Chicle
                        tree...famous for its gummy sap. A fairly inexpensive lumber. The heartwood
                        is usually reddish brown and the sapwood a pale brown. The wood is dense,
                        hard and quite heavy. It is routinely used in furniture, flooring, cabinetry,
                        boat frames, pilings/posts and of course railroad ties. The wood is very
                        durable in outdoor applications. It is very resistant to almost all fungal rot as
                        well as termites.
                    </p>
                    <p>
                        <b>BULLET TREE...</b>usually a medium sized tree 30 to 60ft high with 3ft trunks,
                        sometimes reaching up to 110ft with 5ft trunks. The heartwood is yellowish
                        to green-brown and the sapwood is yellowish to light brown. Green wood
                        has a tarry odor, seasoned much less so. Primarily used for posts, pilings,
                        crossties, heavy flooring and structural members. The wood can also be
                        polished almost as beautifully as Zericote. It&#39;s the closest thing to a perfect
                        outdoor wood. The wood has great strength both bending and crush. It is

                        also extremely heavy and very hard to work with. You will bend some nails.
                        It is resistant to most fungi and termites and quite durable in ground contact
                    </p>
                    <p>
                        <b>SANTA MARIA...</b>large tree reaching up to 150ft with trunks of 6ft. Usually one of
                        the least expensive woods. The heartwood varies from pink to red to reddish
                        brown. Sapwood is lighter and the the wood has little odor. It is used for primarily
                        as a general construction wood. Belizean wooden sailboats use the wood
                        extensively. Mennonite cabins often use the wood for siding and framing lumber.
                        Can also be used for furniture, cabinetry and is excellent for flooring. The wood is
                        fairly easy to work and can yield smooth surfaces.
                    </p>
                </div>
                <div className="see-vission-model-container" hidden={!tabs.model.state}>
                    <div>Sky Tropical International</div>
                    <h1>MODEL: 3 BEDROOM + 1 BATHROOM</h1>
                    <h1>SIZE: 600 SQUARE FEET</h1>
                    <h1>DIMENSIONS: 20'X30'</h1>
                    <b>EXTERIOR KIT inclues:</b>
                    <ul>
                        <li>UNASSEMPLED 20'X30' HARDWOOD HOUSE</li>
                        <li>15 HARDWOOD POSTS (FOR FOUNDATION) 6"X6"X8'</li>
                        <li>4'X6' PATIO</li>
                        <li>WHITE WATERPROOF HARDBOARD/CELITEX CEILING ON PATIO</li>
                        <li>RAILING FOR PATIO AND STAIRS</li>
                        <li>2 SETS OF 3' STAIRS</li>
                        <li>2 HARDWOOD DOORS</li>
                        <li>WHITE/BLACK FRAMED, TINTED GLASS SLIDING WINDOWS WITH SCREENING</li>
                        <li>RED/BLUE/SAND COLOR METAL PANEL ROOFING (28 GAUGE)</li>
                        <li>1 BUCKET + 3 GALLONS OF PAINT (BUYER'S COLOR OF CHOICE)</li>
                    </ul>
                    <b>INTERIOR KIT includes:</b>
                    <ul>
                        <li>1/8" WHITE HARDBOARD CELITEX FOR INTERIOR CEILING</li>
                        <li>1/8" HONEY BIRCH PANELING FOR INTERIOR WALLS</li>
                        <li>4 INTERIOR HOLLOW PLYWOOD DOORS</li>
                        <li>TRIMMINGS FOR INTERIOR WINDOWS/DOORS/WALLS</li>
                    </ul>
                    <b>FINISHING KIT includes:</b>
                    <ul>
                        <li>1 TOILET (WHITE)</li>
                        <li>1 WASH BASIN (17")</li>
                        <li>1 SHOWER STALL (32")</li>
                        <li>{"9 LIGHT BULBS & SWITCHES"}</li>
                        <li>1 BREAKER BOX</li>
                        <li>18 ELECTRICAL OUTLETS</li>
                        <li>2 X 250FT ROLL OF ELECTRICAL WIRE</li>
                    </ul>
                    <h2>Providing our region with affordable prefabricated housing!</h2>
                </div>
            </div>
        </div>
    )
}