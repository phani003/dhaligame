function playerschange(id) {
    let payerid = id;

    if (payerid == "player1") {
        payerid = "player2"
    } else {
        payerid = "player1"
    }

    return payerid;

}



$(document).ready(function () {

    let payerid = $("#hdnplayers").val();

    const payer1imges = [70, 71, 72, 73, 74, 75];
    const payer2imges = [80, 81, 82, 83, 84, 85];

    for (e = 0; e < payer1imges.length; e++) {
        $("#" + payer1imges[e]).show();
        $("#" + payer2imges[e]).show();
    }
    if (payerid == "player2") {

        for (k = 0; k < payer1imges.length; k++) {
            $("#" + payer1imges[k]).hide();
        }


    } else {

        for (l = 0; l < payer2imges.length; l++) {
            $("#" + payer2imges[l]).hide();
        }
    }


    const imagesids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24];

    for (h = 0; h < imagesids.length; h++) {

        $("#" + imagesids[h]).removeAttr("onclick","playerchange(this.id);datamoving(this.id)");
    }
    


    /*onclick = "playerchange(this.id);datamoving(this.id)"*/
})

const imagesids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 17, 19, 20, 21, 22, 23, 24];


///// select balls in rightside bar

function selectball(id) {

    let selectballid = id;

    let ballimg = document.getElementById(selectballid).src;

    const imgname = ballimg.split("/");

    let imageidandname = id + "," + imgname[4];

    $("#hdnimagename").val(imageidandname);

    $("#" + id).css("background-color", "white");

    for (a = 0; a < imagesids.length; a++) {
        let allimg = document.getElementById(imagesids[a]).src;
        let whiteimge = allimg.split("/")[4];
        if (whiteimge == "white.png") {
            $("#" + imagesids[a]).removeAttr("onclick", "onclick");
            $("#" + imagesids[a]).attr("onclick", "playerchange(this.id)");
        } else {
            let playername = $("#hdnmovedata").val();
            $("#" + imagesids[a]).removeAttr("onclick", "onclick");
            if (playername == "player1" && whiteimge == "red.png") {
                
                $("#" + imagesids[a]).attr("onclick", "datamoving(this.id)");

            } else if (playername == "player2" && whiteimge == "yellow.png") {
                
                $("#" + imagesids[a]).attr("onclick", "datamoving(this.id)");

            }


        } 
    }

}




function disableimages(payerid) {

    const payer1imges = [70,71,72,73,74,75];
    const payer2imges = [80,81,82,83,84,85];

    for (e = 0; e < payer1imges.length; e++) {
        $("#" + payer1imges[e]).show();
        $("#" + payer2imges[e]).show();
    }
    if (payerid == "player2") {

        for (k = 0; k < payer2imges.length; k++) {
            $("#" + payer2imges[k]).hide();
        }


    } else {

        for (l = 0; l < payer1imges.length; l++) {
            $("#" + payer1imges[l]).hide();
        }
    }





}

///leftside game chart and selected ball put on specific place 

function playerchange(id) {

    let payerid = $("#hdnplayers").val();
    const imagedata = $("#hdnimagename").val().split(",");
    let imageid = imagedata[0];
    let imagename = imagedata[1];
    let whiteimage = document.getElementById(id).src;
    const whiteimagedata = whiteimage.split("/");
    let whiteimagename = whiteimagedata[4];


    if (imagedata != "") {
 
        if ((payerid == "player1") && (whiteimagename == "white.png") && (imagedata != "" )) {

            $("#player1,#player2").css("background-color", "aqua");
            $("#player1,#player2").css("color", "black");

            $("#hdnplayers").val("player2");

            $("#" + id).removeAttr("src", "src");
            $("#" + id).attr("src", "images/" + imagename);

            disableimages(payerid);
            $("#player2").focus();
            $("#player2").css("background-color", "white");
            $("#player2").css("color", "red");
            $("#" + imageid).hide();
            $("#hdnimagename").val("");
            $("#hdnmovedata").val("player2");
            ///remove onclick event
            for (k = 0; k < imagesids.length; k++) {
                let allimg = document.getElementById(imagesids[k]).src;
                let whiteimge = allimg.split("/")[4];
                if (whiteimge == "white.png" || whiteimge == "red.png" || whiteimge == "yellow.png") {
                    $("#" + imagesids[k]).removeAttr("onclick", "playerchange(this.id)");
                }
            }

            for (a = 0; a < imagesids.length; a++) {
                let allimg = document.getElementById(imagesids[a]).src;
                let whiteimge = allimg.split("/")[4];
                if (whiteimge == "white.png") {
                    $("#" + imagesids[a]).removeAttr("onclick", "onclick");
                    /*$("#" + imagesids[a]).attr("onclick", "playerchange(this.id)");*/
                } else {
                    let playername = $("#hdnmovedata").val();

                    $("#" + imagesids[a]).removeAttr("onclick", "onclick");

                    if (playername == "player1" && whiteimge == "red.png") {

                        $("#" + imagesids[a]).attr("onclick", "datamoving(this.id)");

                    } else if (playername == "player2" && whiteimge == "yellow.png") {

                        $("#" + imagesids[a]).attr("onclick", "datamoving(this.id)");

                    }


                }
            }




        } else if ((payerid == "player2") && (whiteimagename == "white.png") && (imagedata != "") ) {

            $("#player1,#player2").css("background-color", "aqua");
            $("#player1,#player2").css("color", "black");

            $("#hdnplayers").val("player1");

            $("#" + id).removeAttr("src", "src");
            $("#" + id).attr("src", "images/" + imagename);

            disableimages(payerid);
            $("#player1").focus();
            $("#player1").css("background-color", "white");
            $("#player1").css("color", "red");
            $("#" + imageid).hide();
            $("#hdnimagename").val("");
            $("#hdnmovedata").val("player1");

            ///remove onclick event
            for (k = 0; k < imagesids.length; k++) {
                let allimg = document.getElementById(imagesids[k]).src;
                let whiteimge = allimg.split("/")[4];
                if (whiteimge == "white.png" || whiteimge == "red.png" || whiteimge == "yellow.png") {
                    $("#" + imagesids[k]).removeAttr("onclick", "playerchange(this.id)");
                }
            }

            for (a = 0; a < imagesids.length; a++) {
                let allimg = document.getElementById(imagesids[a]).src;
                let whiteimge = allimg.split("/")[4];
                if (whiteimge == "white.png") {

                    $("#" + imagesids[a]).removeAttr("onclick", "onclick");

                    /*$("#" + imagesids[a]).attr("onclick", "playerchange(this.id)");*/
                } else {
                    let playername = $("#hdnmovedata").val();

                    $("#" + imagesids[a]).removeAttr("onclick", "onclick");

                    if (playername == "player1" && whiteimge == "red.png") {

                        $("#" + imagesids[a]).attr("onclick", "datamoving(this.id)");

                    } else if (playername == "player2" && whiteimge == "yellow.png") {

                        $("#" + imagesids[a]).attr("onclick", "datamoving(this.id)");

                    }


                }
            }
        }

    } else {

        document.getElementById(id).src = "images/" + whiteimagename;
    }
     
}

function movedatachange() {

    for (a = 0; a < imagesids.length; a++) {
        let allimg = document.getElementById(imagesids[a]).src;
        let whiteimge = allimg.split("/")[4];
        if (whiteimge == "white.png") {

            $("#" + imagesids[a]).removeAttr("onclick", "onclick");

            /*$("#" + imagesids[a]).attr("onclick", "playerchange(this.id)");*/
        } else {
            let playername = $("#hdnmovedata").val();

            $("#" + imagesids[a]).removeAttr("onclick", "onclick");

            if (playername == "player1" && whiteimge == "red.png") {

                $("#" + imagesids[a]).attr("onclick", "datamoving(this.id)");

            } else if (playername == "player2" && whiteimge == "yellow.png") {

                $("#" + imagesids[a]).attr("onclick", "datamoving(this.id)");

            }


        }
    }
}


function datamoving(id) {

    let imagedata = document.getElementById(id).src;
    let imageid = id;
    let imagename = imagedata.split("/")[4];

    let playername = $("#hdnmovedata").val();
    for (o = 0; o < imagesids.length; o++) {
        $("#" + imagesids[o]).css("background-color", "blue");
    }

    if ((playername == "player1") && (imagename == "red.png")) {

        $("#" + imageid).css("background-color", "white");

        let movingdata = imageid + "," + imagename;

        $("#hdnmovedatatonearplace").val(movingdata);


    } else if ((playername == "player2") && (imagename == "yellow.png")) {

        $("#" + imageid).css("background-color", "white");

        let movingdata = imageid + "," + imagename;
        $("#hdnmovedatatonearplace").val(movingdata);
    } else {

        
    }



    

    if (($("#hdnimageids").val() == "") && ((imagename == "red.png") || (imagename == "yellow.png"))) {
        
        let postid = moingdataspecific(id);
        const movidsdatas = postid.split(",");
        for (j = 0; j < movidsdatas.length; j++) {
            let specpoid = movidsdatas[j];
            let imagecolor = $("#" + specpoid).attr('src');
            const imagecolors = imagecolor.split("/");
            if (imagecolors[1] == "white.png") {
                $("#" + specpoid).attr("onclick", "datamoving(this.id)");
            } else {

                $("#" + specpoid).removeAttr("onclick", "datamoving(this.id)");

                if (playername == "player1" && imagename == "red.png") {

                    $("#" + specpoid).attr("onclick", "datamoving(this.id)");

                } else if (playername == "player2" && imagename == "yellow.png") {

                    $("#" + specpoid).attr("onclick", "datamoving(this.id)");

                }

                
            }
            
        }

        $("#hdnimageids").val(postid);
        $("#hdnstorids").val(postid);
    }

    let info3 = $("#hdnimageids").val();
    /*$("#hdnimageids").val().split(",").length >= 2) &&*/

    if ((imagename == "white.png")) {

        const movidsdata = $("#hdnstorids").val().split(",");

        for (m = 0; m < movidsdata.length; m++) {
            if ((movidsdata[m] == imageid) && (imagename == "white.png")) {

                $("#hdntrueorfalls").val("true");
            }

        }

    }
    
    let info1 = $("#hdnmovedatatonearplace").val();
    let info2 = $("#hdntrueorfalls").val();

    if ((playername == "player1") && (imagename == "white.png") && ($("#hdnmovedatatonearplace").val() != "") && ($("#hdntrueorfalls").val() == "true")) { 

        $("#player1,#player2").css("background-color", "aqua");
        $("#player1,#player2").css("color", "black");
        if (imagename == "white.png") {

            const movingdata = $("#hdnmovedatatonearplace").val().split(",");
            let movieimageid = movingdata[0];
            let movieimagename = movingdata[1];
            document.getElementById(imageid).src = "images/" + movieimagename;
            document.getElementById(movieimageid).src = "images/white.png";
            $("#" + movieimageid).css("background-color", "blue");
            $("#hdnmovedatatonearplace").val("");

            disableimages(playername);
            $("#player2").focus();
            $("#player2").css("background-color", "white");
            $("#player2").css("color", "red");
            $("#" + imageid).hide();
            $("#hdnimagename").val("");
            $("#hdnmovedata").val("player2");
            $("#hdnplayers").val("player2");
            //selectball(imageid)
            //playerchange(imageid);
            $("#" + imageid).show();
            $("#" + imageid).css("background-color", "blue");
            $("#hdnimageids").val("");
            $("#hdnstorids").val("");
            $("#hdntrueorfalls").val("");
            movedatachange();
            
        }
    } else if ((playername == "player2") && (imagename == "white.png") && ($("#hdnmovedatatonearplace").val() != "") && ($("#hdntrueorfalls").val() == "true")) {

        $("#player1,#player2").css("background-color", "aqua");
        $("#player1,#player2").css("color", "black");

        if (imagename == "white.png") {

            const movingdata = $("#hdnmovedatatonearplace").val().split(",");
            let movieimageid = movingdata[0];
            let movieimagename = movingdata[1];
            document.getElementById(imageid).src = "images/" + movieimagename;
            document.getElementById(movieimageid).src = "images/white.png";
            $("#" + movieimageid).css("background-color", "blue");
            $("#hdnmovedatatonearplace").val("");

            disableimages(playername);
            $("#player1").focus();
            $("#player1").css("background-color", "white");
            $("#player1").css("color", "red");
            $("#" + imageid).hide();
            $("#hdnimagename").val("");
            $("#hdnmovedata").val("player1");
            $("#hdnplayers").val("player1");
            //selectball(imageid)
            //playerchange(imageid);
            $("#" + imageid).show();
            $("#" + imageid).css("background-color", "blue");
            $("#hdnimageids").val("");
            $("#hdnstorids").val("");
            $("#hdntrueorfalls").val("");
            movedatachange();
            
        }
        
    }


    $("#hdnimageids").val("");
    
}

/// moving data specific positions

function moingdataspecific(id) {

    const ids = ["2,10", "1,3,5", "2,15", "5,11", "2,4,6,8", "5,14", "8,12", "5,7,9", "8,13", "1,11,22", "4,10,12,19", "7,11,16", "9,14,18", "6,13,15,21", "3,14,24", "12,17", "16,18,20", "13,17", "11,20", "17,19,21,23", "14,20", "10,23", "20,22,24", "15,23"];

    //id1 = "2,10";      id11 = "4,10,12,19";           id21 = "14,20";
    //id2 = "1,3,5";     id12 = "7,11,16";              id22 = "10,23";
    //id3 = "2,15";      id13 = "9,14,18";              id23 = "20,22,24";
    //id4 = "5,11";      id14 = "6,13,15,21";           id24 = "15,23";
    //id5 = "2,4,6,8";   id15 = "3,14,24";
    //id6 = "5,14";      id16 = "12,17";
    //id7 = "8,12";      id17 = "16,18,20";
    //id8 = "5,7,9";     id18 = "13,17";
    //id9 = "8,13";      id19 = "11,20";
    //id10 = "1,11,22"; id20 = "17,19,21,23";

    return ids[id - 1];
}

$(document).ready(function () {

    const ids = ["2,10", "1,3,5", "2,15", "5,11", "2,4,6,8", "5,14", "8,12", "5,7,9", "8,13", "1,11,22", "4,10,12,19", "7,11,16", "9,14,18", "6,13,15,21", "3,14,24", "12,17", "16,18,20", "13,17", "11,20", "17,19,21,23", "14,20", "10,23", "20,22,24", "15,23"];


    $("#1").click(function () { 

        let payerid = $("#hdnplayers").val();

        //let img1 = document.getElementById("1").src.split("/")[4];

        //if (img1 == "red.png" || img1 == "yellow.png") {
        //    const id1move = ids[0].split(",");
        //    for (i1 = 0; i1 < id1move.length; i1++) {
        //        let s1img = $("#" + id1move[i1]).attr('src');
        //        const su = s1img.split("/");
        //        if (su[1] == "white.png") {
        //            $("#" + i1).attr("onclick", "datamoving(this.id)");
        //        }


        //    }

        //}

        const dadi = ["1,2,3", "1,10,22"];

        //for (h = 0; h < dadi.length; h++) {
        //    let checking = dadi[h].split(",");


        //    let pos1 = $("#" + checking[0]).attr('src');
        //    let pos2 = $("#" + checking[1]).attr('src');                                     
        //    let pos3 = $("#" + checking[2]).attr('src');
        //    if ((payerid == "player1") && (pos1 == "images/red.png") && (pos2 == "images/red.png") && (pos3 == "images/red.png")) {

        //        alert(" player 1 dadi");

        //    } else if ((payerid == "player2") && (pos1 == "images/yellow.png") && (pos2 == "images/yellow.png") && (pos3 == "images/yellow.png")) {

        //        alert(" player 2 dadi");
        //    }

        //}


       
        


    });

    $("#2").click(function () {
        let payerid = $("#hdnplayers").val();


    });
    $("#3").click(function () {
        let payerid = $("#hdnplayers").val();


    });
    $("#4").click(function () {
        let payerid = $("#hdnplayers").val();


    });
    $("#5").click(function () {
        let payerid = $("#hdnplayers").val();


    });
    $("#6").click(function () {
        let payerid = $("#hdnplayers").val();


    });
    $("#7").click(function () {
        let payerid = $("#hdnplayers").val();


    });
    $("#8").click(function () {
        let payerid = $("#hdnplayers").val();


    });
    $("#9").click(function () {
        let payerid = $("#hdnplayers").val();


    });
    $("#10").click(function () {
        let payerid = $("#hdnplayers").val();


    });














});

