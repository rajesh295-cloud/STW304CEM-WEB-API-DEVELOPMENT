// import { Schema, model } from "mongoose";
import mongoose from 'mongoose'
const CartSchema = new Schema(
		{
			userId:{type:String, required:true},
			products:[
				{
					user: {
                        type: mongoose.Schema.Types.ObjectId,
                        required: true,
                        ref: 'User',
                      },
                      name: {
                        type: String,
                        required: true,
                      },
					countInStock: {
                        type: Number,
                        required: true,
                        default: 1,
                      },

				}
			]
		},
		{timestamps:true}	
	);

export default model("Cart",CartSchema);