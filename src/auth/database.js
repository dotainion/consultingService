import { allowAuthentication } from "./authenticate";
import { db } from "./init";


export const addData = async(prospectData) =>{
    try{
        await allowAuthentication();
        const dataRef = db.collection("prospects");
        const res = await dataRef.add(prospectData);
        if (res) return true;
        return false;
    }catch{return false;}
    
}

export const getData = async() =>{
    let records = [];
    try{
        await allowAuthentication();
        const dataRef = db.collection("prospects");
        const data = await dataRef.get();
        data.forEach((record)=>{
            records.push({
                info:record.data(),
                id:record.id
            });
        })
        return records;
    }catch{return records;}
}
