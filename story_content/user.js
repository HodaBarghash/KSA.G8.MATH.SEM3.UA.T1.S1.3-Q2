function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6M1YgeIXFpC":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyW2mFux8JUo92YbYozfLC9yZ8Lhuety3QOs-RxwM6OshC8fEwvBc_TGV3hI98qMvFR/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

