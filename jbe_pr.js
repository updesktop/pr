function fm_pr(id,prno){
  //alert(id+' vs '+prno);  
  var dtl=
    '<div style="margin:0 auto;margin-top:200px;width:800px;height:600px;font-size:12px;background:white;">'+
      //header
      '<div style="width:100%;height:40px;padding:5px;font-size:16px;background:#e9f2f8;">'+
        '<div style="float:left;width:50%;height:100%;padding:5px;">Purchase Request</div>'+      
        '<input type="button" onclick="close_fm_pr()" style="float:right;width:25px;height:25px;cursor:pointer;padding:2px;border-radius:5px;text-align:center;border:1px solid white;color:white;background:black;" value="X" />'+
      '</div>'+

      //items
      '<div style="margin-top:20px;width:100%;height:100px;background:lightgray;">'+
        //head
        '<div style="width:100%;height:25px;padding:5px;text-align:center;background:#e9f2f8;">'+
          '<div style="float:left;width:25%;height:100%;padding:0px;">DESCRIPTION</div>'+
          '<div style="float:left;width:20%;height:100%;padding:0px;">BUDGET</div>'+

          '<div style="float:left;width:10%;height:100%;padding:0px;">QTY</div>'+
          '<div style="float:left;width:15%;height:100%;padding:0px;">TAX</div>'+
          '<div style="float:left;width:15%;height:100%;padding:0px;">UNIT PRICE</div>'+
          '<div style="float:left;width:15%;height:100%;padding:0px;background:red;">GROSS AMOUNT</div>'+
        '</div>'+
        //details
        '<div id="pr_item_dtl" style="width:100%;height:50px;padding:5px;text-align:center;background:white;">'+
        '</div>'+
        //totals
        '<div style="width:100%;height:1px;background:black;"></div>'+
        '<div style="width:100%;height:25px;padding:5px;text-align:left;background:#e9f2f8;">'+
          '<div style="float:left;width:10%;height:100%;padding:0px;">Totals</div>'+
          '<div style="float:right;text-align:right;width:30%;height:100%;padding:0px;">USD 12,354.22</div>'+
        '</div>'+
        //tax
        '<div style="width:100%;height:25px;padding:5px;text-align:left;text-weight:normal;background:none;">'+
          '<div style="float:left;width:10%;height:100%;padding:0px;">Tax Amount</div>'+
          '<div style="float:right;text-align:right;width:30%;height:100%;padding:0px;">USD 12,354.22</div>'+
        '</div>'+
        //amount paid
        '<div style="width:100%;height:1px;background:black;"></div>'+
        '<div style="width:100%;height:25px;padding:5px;text-align:left;text-weight:bold;background:#e9f2f8;">'+                  
          '<div style="float:left;width:10%;height:100%;padding:0px;">Amount Paid</div>'+
          '<div style="float:right;text-align:right;width:30%;height:100%;padding:0px;">USD 12,354.22</div>'+
        '</div>'+
        //
        '<div style="margin-top:0px;width:100%;height:200px;padding:0px;text-align:left;text-weight:bold;background:white;">'+
          //left div
          '<div style="float:left;width:50%;height:100%;text-align:left;border:0px solid black;">'+
          '</div>'+
          //right div
          '<div style="float:right;width:50%;height:100%;text-align:left;padding:10px;border:0px solid black;">'+
            '<input type="button" style="margin-top:10px;width:100%;height:30px;border:1px solid black;color:white;background:#f64720;" value="APPROVE"/>'+
            '<input type="button" style="margin-top:10px;width:100%;height:30px;border:1px solid black;color:white;background:#4f5d7a;" value="REJECT"/>'+
            //comment box
            '<div style="margin-top:20px;width:100%;height:200px;padding:10px;border:0px solid black;background:#e9f2f8;">'+
              '<div style="margin-top:20px;width:100%;">Leave a comment</div>'+
            '</div>'+

          '</div>'+


      '</div>'+

    '</div>';

  document.getElementById('sap_dtl').innerHTML=dtl;
  document.getElementById('sap_modal').style.display='block';
}

function close_fm_pr(){
  document.getElementById('sap_modal').style.display='none';
}

function disp_PR(){
  var aryPR=DB_PR;
  //alert(aryPR.length);
  var dtl='';
  var bg='#bfbfbf';
  for(var i=0;i<aryPR.length;i++){
    var vstat=[];
    if(aryPR[i]['stat']==0){      
      vstat[0]='Pending';
      vstat[1]='black';
    }else if(aryPR[i]['stat']==1){  
      vstat[0]='Approved';
      vstat[1]='blue';
    }else if(aryPR[i]['stat']==2){      
      vstat[0]='Rejected';
      vstat[1]='red';
    }
    dtl+=
      '<div id="pr_dtl_'+i+'" class="cls_dtl_line" onclick="fm_pr(this.id,'+aryPR[i]['prno']+')" style="width:100%;height:40px;background:'+bg+';">'+
        '<div style="float:left;width:10%;height:100%;padding:8px;text-align:center;">'+
          '<img src="gfx/downdoc.png" style="height:100%;" />'+
          '<img src="gfx/paperclip.png" style="margin-left:5px;height:100%;" />'+
        '</div>'+
        '<div class="cls_pr_dtl" style="width:10%;color:'+vstat[1]+'">'+vstat[0]+'</div>'+
        '<div class="cls_pr_dtl" style="width:15%;">'+aryPR[i]['projno']+'</div>'+
        '<div class="cls_pr_dtl" style="width:10%;">'+aryPR[i]['prno']+'</div>'+
        '<div class="cls_pr_dtl" style="width:15%;">'+aryPR[i]['descrp']+'</div>'+
        '<div class="cls_pr_dtl" style="width:10%;">'+mdy(aryPR[i]['date_req'],'-')+'</div>'+
        '<div class="cls_pr_dtl" style="width:10%;">'+mdy(aryPR[i]['date_approved'],'/')+'</div>'+
        '<div class="cls_pr_dtl" style="width:10%;">'+aryPR[i]['pramt']+'</div>'+
        '<div class="cls_pr_dtl" style="width:10%;">'+
          '<input type="checkbox" value='+parseInt(aryPR[i]['arc'])+'/>'+
        '</div>'+
      '</div>';

    if(bg=='#bfbfbf'){
      bg='white';
    }else{
      bg='#bfbfbf';
    }
  }  
  document.getElementById('body_dtl').innerHTML=dtl;
}