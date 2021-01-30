function fm_pr(id){
  alert(id);
}

function disp_PR(){
  var aryPR=DB_PR;
  //alert(aryPR.length);
  var dtl='';
  var bg='lightgray';
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
      '<div id="pr_dtl_'+i+'" class="cls_dtl_line" onclick="fm_pr(this.id)" style="width:100%;height:40px;background:'+bg+';">'+
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

    if(bg=='lightgray'){
      bg='white';
    }else{
      bg='lightgray';
    }
  }  
  document.getElementById('body_dtl').innerHTML=dtl;
}