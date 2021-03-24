const express = require('express');

const request = require('request-promise');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

app.set('json spaces', 2)


app.get('/shipping/:invc_no', async (req,res) => {


    try{

        const url = "https://www.doortodoor.co.kr/parcel/ \
        doortodoor.do?fsp_action=PARC_ACT_002&fsp_cmd=retrieveInvNoACT&invc_no=" + req.params.invc_no ;
        let result = [];

        const html = await request(url);
        const $ = cheerio.load( html ,
            { decodeEntities: false }
        );

        const tdElements = $(".board_area").find("table.mb15 tbody tr td"); //td의 데이터를 전부 긁어온다

        console.log(tdElements)

        var temp = {};
        for( let i=0 ; i<tdElements.length ; i++ ){//크롤링 한 데이터를 가공

            if(i%4===0){
                temp = {};
                temp["step"] = tdElements[i].children[0].data.trim();

            }else if(i%4===1){
                temp["date"] = tdElements[i].children[0].data;
            }else if(i%4===2){

                temp["status"] = tdElements[i].children[0].data;
                if(tdElements[i].children.length>1){
                    temp["status"] += tdElements[i].children[2].data;
                }

            }else if(i%4===3){
                temp["location"] = tdElements[i].children[1].children[0].data;
                result.push(temp);
        }


        res.json(result);


    }catch(e){
        console.log(e)
    }
});

app.listen( port, function(){
    console.log('Express listening on port', port);
});
