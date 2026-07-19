const ImageKit = require("@imagekit/nodejs");


const imagekit = new ImageKit({
    privateKey: process.env.image_kit
})

async function uploadFile(buffer){
    console.log(buffer);
    console.log(process.env.image_kit);

    const result = await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName: "image.jpg"
    })
    return result;
}

module.exports = uploadFile