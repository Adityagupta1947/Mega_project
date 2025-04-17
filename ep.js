// db.pipeline_practice.aggregate([
//     {
//         $match:{date:{$gte: new ISODate("2020-01-30"), $lt: new ISODate("2022-01-30")}}
//     },
//     {
//         $group:{
//             _id:{$dateToString:{format:"%Y-%m-%d",date:"$date"}},
//             totalOrderValue:{$sum:{$multiply:["$quantity","$price"]}},
//             avgQuantity:{$avg:"$quantity"}
//         }
//     },
//     {
//        $sort:{totalOrderValue:-1} 
//     }
// ])

