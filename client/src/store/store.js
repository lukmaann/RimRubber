import {create} from "zustand"


export const useTyreSizeStore=create((set)=>({
    width:'',
    profile:'',
    rim:'',
    setwidth:(data)=>set({width:data}),
    setprofile:(data)=>set({profile:data}),
    setrim:(data)=>set({rim:data})

}))


export const useUserStore=create((set)=>({
    user:null,
    setUser:(data)=>set({user:data})
}))

export const myAdsStore=create((set)=>({
    ads:[],
    setAds:(data)=>set({ads:data}),
    removeAds:(id)=>set((state)=>({ads:state.ads.filter((ad)=>ad._id!==id)}))
    
}))


