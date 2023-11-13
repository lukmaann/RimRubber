import {create} from "zustand"
import {persist} from "zustand/middleware"


export const useTyreSizeStore=create((set)=>({
    width:'',
    profile:'',
    rim:'',
    setwidth:(data)=>set({width:data}),
    setprofile:(data)=>set({profile:data}),
    setrim:(data)=>set({rim:data})

}))


export const authStore=create(persist((set)=>({
    auth:false,
    setAuth:(data)=>set({auth:data})
        

}),{name:"auth"}))

export const useUserStore=create(persist((set)=>({
    user:null,
    setUser:(data)=>set({user:data})
}),{name:"user"}))

export const myAdsStore=create(persist((set)=>({
    ads:[],
    setAds:(data)=>set({ads:data}),
    removeAds:(id)=>set((state)=>({ads:state.ads.filter((ad)=>ad._id!==id)})),
    updateAdStatus:({id,status})=>set((state)=>({ads:state.ads.map((item)=>item._id===id ? {...item,status:status}:item)}))
    
}),{name:"my ads"}))


export const buyItemstore=create(persist((set)=>({
    ads:[],
    
    setAds:(data)=>set({ads:data}),
}),{
    name:"find ads"
}))


export const myOffers=create(persist((set)=>({
    offers:[],
    setOffers:(data)=>set({offers:data}),
    withdraw:(id)=>set((state)=>({offers:state.offers.filter((offer)=>offer._id!==id)}))
}),{name:"my offers"}))


export const offersIgot=create(persist((set)=>({
    offers:[],
    setOffers:(data)=>set({offers:data})
}),{name:"offers i got"}))