const axios = require("axios")

let createMeme=async function(req, res){
    try{
        let {template_id,text0,text1,username,password}=req.query
        console.log(template_id,text0,text1,username,password)

        let options={
            method:'post',
            url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        };
        const result=await axios(options);
        console.log(result)
        res.status(200).send(result.data)
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}

module.exports.createMeme=createMeme