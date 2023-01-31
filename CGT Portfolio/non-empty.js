function required()
{
var empt = document.forms["form1"]["fname"].value;
var empt1 = document.forms["form1"]["lname"].value;
var empt2 = document.forms["form1"]["email"].value;
var empt3 = document.forms["form1"]["skill"].value;
if (empt == "" || empt1 == "" || empt2 == "" || empt3 == "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}