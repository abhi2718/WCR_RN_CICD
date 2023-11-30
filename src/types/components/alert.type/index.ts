export type AlertScreenType = {
    showModal:boolean,
    setShowModal:(state:boolean)=>void,
    title:string,
    description:string,
    onPress:()=> void
}