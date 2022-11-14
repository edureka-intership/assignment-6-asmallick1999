const restaurantData = require('../Models/restaurant')

exports.getDataBylocation = (req, res) => {

    const filter = {

    }
    if(req.body.city){
        if(req.body.name){
            filter.city=req.body.city,
            filter.name=req.body.name
        }
    }


    restaurantData.find(filter)
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
