const mongoose = require('mongoose')

const blogScheme = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    coverImg: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
}
)

const blog = mongoose.model("blog", blogScheme);
module.exports = blog