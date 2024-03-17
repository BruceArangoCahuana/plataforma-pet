interface data{
    id:number,
    name:string,
    price:any,
    urlImg:string,
    aporte:any[],
    type:string
}

export const dataPlan : data[] = [
    {
        id:1,
        name:'Basico',
        price:10.90,
        urlImg:'/img/plan-basico.png',
        type:'Mens',
        aporte:[
            {
                id:1,
                title:'1.5kg de comida'
            }
        ]
    },
    {
        id:2,
        name:'Medio',
        price:19.90,
        urlImg:'/img/plan-medio.png',
        type:'Mens',
        aporte:[
            {
                id:1,
                title:'3kg de comida'
            },
            {
                id:2,
                title:'Aporte caja chica'
            }
        ]
    },
    {
        id:3,
        name:'Premium',
        price:29.90,
        urlImg:'/img/plan-premium.png',
        type:'Mens',
        aporte:[
            {
                id:1,
                title:'6kg de comida'
            },
            {
                id:2,
                title:'Aporte caja chica'
            }
        ]
    },
   
]