const RestaurentData = require('../Models/restaurant')


exports.getRestaurentsData = (req, res) => {
    RestaurentData.find()
    .then(
        result=>
            res.status(200).json({
                message: "Successfully fatching restaurent all data",
                data: result
            })
    )
    .catch(
        error=>
            res.status(500).json({
                message:'DB error occured',
                error:error
            })
    )
    
}

exports.getRestaurentsDataByName = (req,res) =>{
    
    const citeriaByName = {
        name:req.params.name
    }

    RestaurentData.find(citeriaByName)
    .then(
        result =>
            res.status(200).json({
                message:"Showing restatuant by name",
                data:result
            })
    )
    .catch(
        error=>
            res.status(500).json({
                message:'DB error occured',
                error:error
            })
    )
}


exports.getRestaurentsDataFilter = (req, res) => {

    
    let filter ={

    }
    //filter using city
    if(req.body.city){
        filter.city= req.body.city
        console.log("inside cityID");
    }

    //filter using Select restaurent
    if(req.body.cuisine && req.body.cuisine.length>0){
        filter['Cuisine.name']={$in:req.body.cuisine}
    } 

    //for filetr using Cost
    if(req.body.lcost && req.body.hcost){
        filter.cost={
            $lt:req.body.hcost,
            $gt:req.body.lcost
        }
    }
    
    RestaurentData.find(filter).limit(2).skip(2*(req.params.pageNo-1)).sort({cost:req.body.sort})
    .then(
        result=>
            res.status(200).json({
                message: "Successfully fatching restaurant all data",
                data: result
            })
    )
    .catch(
        error=>
            res.status(500).json({
                message:'DB error occured',
                error:error
            })
    )

    
}



exports.putRestaurant = (req, res) => {

    console.log("put restaurant");
    
    
    RestaurentData.find(filter)
    .then(
        result=>
            res.status(200).json({
                message: "Successfully fatching restaurant all data",
                data: result
            })
    )
    .catch(
        error=>
            res.status(500).json({
                message:'DB error occured',
                error:error
            })
    )

    
}

