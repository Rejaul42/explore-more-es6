const data ={
    data:[
        {
            bookId: 1,
            bookDetails:{
                name: 'Habluder Adda',
                category: 'XYZ',
                price: '20$'
            },
            bookCategory: 'Basic',
        },
        {
            bookId: 2,
            bookDetails:{
                name: 'Gabluder Adda',
                category: 'Abc',
                price: '40$'
            },
            bookCategory: 'Advance',
             
        }
    ]
}

console.log(data.data[1].bookDetails.name)