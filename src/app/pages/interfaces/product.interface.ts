export interface ProductRes {
        id: number,
        name: string,
        price: number,
        nuts: boolean,
        image: string,
        vegeterian:boolean,
        spiciness: number,
        categoryId: number
}


export interface ProductFilterData{
        vegeterian:boolean,
        nuts:boolean,
        spiciness:number,
        categoryId:number
}