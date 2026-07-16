const {ImageKit} = require("@imagekit/node.js")

const imagekit = new ImageKit({
    privateKey: process.env.image_kit
})

async function uploadFile(buffer){
    console.log(buffer);

    const result = await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName: "image.jpg"
    })
    return result;
}