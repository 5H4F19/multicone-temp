import capitalize from "../utils/capitalize.js"

const data = (modelName) => {
      const name = capitalize(modelName)
return `import mongoose from 'mongoose'

const ${modelName}Schema = mongoose.Schema({

/* 
 @@  Add field and their spefication like following:
    
   fieldName: {
        type:String,    // String, Boolean, Number, Date, Buffer, Mixed, ObjectId, Array, Decimal128, Map
        default:'value',
        required: true, // true, false
        select: true,   // true, false
      }   

*/ 
    
})


//   @ MIDDLEWARES
/*
userSchema.pre('save', async function (next) {   // save, validate, remove, updateOne, deleteOne
    // your code
})

*/

//   @ BINDING METHOD TO MODEL
/*
userSchema.methods.methodName = async function (params) {
     // your code
}
*/

const ${name} = mongoose.model(${name}, ${modelName}Schema)
export default ${name}` 
    
}
export default data
