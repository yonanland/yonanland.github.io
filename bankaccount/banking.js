
window.onload= function(){  
    let accountInfoList=[];
    var bankingModule= (function(){
        function createAccount(){
           let acctName= document.getElementById("acctName").value;
           let acctDeposit=document.getElementById("acctDeposit").value;
                if(acctName=="" || acctDeposit==""){
                return null;
                }
                return{
                acctName,
                acctDeposit
                }      
        }
    
      return {
        account: function(){  
          return createAccount();          
        }
      }
    
    }());
  
  
    var createAcct= document.getElementById("createAcct");
    createAcct.onclick= updateList;
    
    function updateList(){
  
      var ac= bankingModule.account();
      if (ac==null){
        alert("Please enter account name and deposit ");
        return;}
  
      accountInfoList[accountInfoList.length]=ac;
      
      showAccounts();
  
    }
  
    function showAccounts(){
      var allAcc="";
      accountInfoList.forEach(function(item, index, array) {
        allAcc+= "Account Name: "+ item["acctName"] + "   Balance: "+ item["acctDeposit"]+"\n";
      })
    
      document.getElementById("txt").innerHTML= allAcc;
  
    }
    
  } 
    
    
  
  