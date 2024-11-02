const password=document.getElementById("password");



let num_arr=[0,1,2,3,4,5,6,7,8,9];
let al_arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let sp_arr=["@","!","$","%","^","&","#"];


function generate(){
	const lenval=document.getElementById("numofchars");
	if(!(document.getElementById("al").checked || document.getElementById("num").checked || document.getElementById("sp").checked ))
	{
		password.textContent="please tick atleast one box!";
		return;
	}
	if(lenval.value==0)
	{	
		password.textContent="password must be atleast 1 character long!";
		return;
	}
	
	let pass_arr=[];
	if(document.getElementById("al").checked)
	pass_arr=pass_arr.concat(al_arr);
	if(document.getElementById("num").checked)
	pass_arr=pass_arr.concat(num_arr);
	if(document.getElementById("sp").checked)
	pass_arr=pass_arr.concat(sp_arr);
	
	
	let randpas="";
	for(let i=1;i<=lenval.value;i++)
	randpas=randpas+pass_arr[Math.floor(Math.random()*(pass_arr.length))];
	password.textContent=randpas;
}


