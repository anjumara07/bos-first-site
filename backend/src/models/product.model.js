const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:{type:'String',required:true},
    name:{type: 'String',required: true},
    city:{type: 'String',required: true},
    address:{type: 'String',required: true},
    capacity:{type: 'String',required: true},
    cost_per_day:{type: 'String',required: true},
    image:{type: 'String',required:true},
    verified:{type: 'String',required: true},
    rating:{type: 'String',required: true},
    // admin_id : {type: mongoose.Schema.Types.ObjectId, ref: "admin", required: true}
    
},{
    versionKey:false,
    timestamps:true,
}

)

module.exports = mongoose.model("product",productSchema);