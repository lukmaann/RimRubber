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
    setUser:(data)=>set({user:data}),
    addcart:({id})=>set((state)=>({user:{...state.user,cart:[...state.user.cart,id]}})),
    removefromcart:({id})=>set((state)=>({user:{...state.user,cart:state.user.cart.filter((item)=>item!==id)}}))

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
    setOffers:(data)=>set({offers:data}),
    filterOffers:({id,postId})=>set((state)=>({offers:state.offers.map((item)=>item._id===postId ? {...item,offers:item.offers.filter((offer)=>offer._id===id)}:item)})),
    
    updateStatus:({id,postId,status})=>{
        set((state)=>({
            offers:state.offers.map((post)=>{
                if(post._id===postId){
                    const updatedOffer= post.offers.map((offer)=>{
                        
                        if(offer._id===id){
                            
                            return {...offer,status:status}
                            

                        }
                        return offer

                    })
                    return {...post,offers:updatedOffer}

                }
                return post
            })
        }))
    }

}),{name:"offers i got"}))

