import {create} from "zustand"


export const useTyreSizeStore=create((set)=>({
    width:'',
    profile:'',
    rim:'',
    setwidth:(data)=>set({width:data}),
    setprofile:(data)=>set({profile:data}),
    setrim:(data)=>set({rim:data})

}))