import { auth } from "./authenticate";
import { db } from "./init";


export const addData = async(prospectData) =>{
    try{
        await auth.allowAnonymous();
        const dataRef = db.collection("prospects");
        const res = await dataRef.add(prospectData);
        await auth.signOut();
        if (res) return true;
        return false;
    }catch{return false;}
    
}

export const getData = async() =>{
    let records = [];
    try{
        await auth.allowAnonymous();
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

export const addSuggestion = async(prospectData) =>{
    try{
        await auth.allowAnonymous();
        const dataRef = db.collection("suggestions");
        const res = await dataRef.add(prospectData);
        await auth.signOut();
        if (res) return true;
        return false;
    }catch{return false;}
    
}

export const getSuggestion = async() =>{
    let suggestRecords = [];
    try{
        await auth.allowAnonymous();
        const dataRef = db.collection("suggestions");
        const res = await dataRef.get();
        res.forEach((record)=>{
            suggestRecords.push({
                info:record.data(),
                id:record.id
            });
        });
        return suggestRecords;
    }catch{return suggestRecords;}
    
}

export const updateSuggestion = async(id,data) =>{
    try{
        await auth.allowAnonymous();
        const dataRef = db.collection("suggestions");
        await dataRef.doc(id).update(data);
        return true;
    }catch{return false;}
}

export const deleteSuggestion = async(id) =>{
    try{
        await auth.allowAnonymous();
        const dataRef = db.collection("suggestions");
        await dataRef.doc(id).delete();
        return true;
    }catch{return false;}
}

export const deleteData = async(id) =>{
    try{
        await auth.allowAnonymous();
        const dataRef = db.collection("prospects");
        await dataRef.doc(id).delete();
        return true;
    }catch{return false;}
}
