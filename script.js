		let name = document.getElementById("planetName");
		let dis = document.getElementById("distance");
		let temp = document.getElementById("temp");
		let year = document.getElementById("year");
		let weight = document.getElementById("weight");
		let number;
		let click = 0;

		let apollo = new Audio('apolloStart.mp3');


		function Merkury()
		{
			number = document.getElementById("number").value;

			name.innerHTML = "Merkury"
			dis.innerHTML ="57,740 mln km";
			temp.innerHTML = "−163 °C - 400 °C";
			year.innerHTML = "88 dni";
			weight.innerHTML = Math.round(number * 0.38 * 100) / 100 + " kg";

			click = 0;

		}

		function Wenus()
		{
			number = document.getElementById("number").value;

			name.innerHTML = "Wenus"
			dis.innerHTML ="108,141 mln km";
			temp.innerHTML = "−220 °C - 420 °C";
			year.innerHTML = "225 dni";
			weight.innerHTML = Math.round(number * 0.91 * 100) / 100 + " kg";

			click = 0;
		}

		function Ziemia()
		{
			number = document.getElementById("number").value;

			name.innerHTML = "Ziemia"
			dis.innerHTML ="149,504 mln km";
			temp.innerHTML = "−88 °C - 58 °C";
			year.innerHTML = "365 dni";
			weight.innerHTML = Math.round(number * 1.0 * 100) / 100 + " kg";

			click++;

			if(click == 11)
			{
				console.log(click);
				Apollo11();
			}
		}

		function Mars()
		{
			number = document.getElementById("number").value;

			name.innerHTML = "Mars"
			dis.innerHTML ="227,798 mln km";
			temp.innerHTML = "−140 °C - 20 °C";
			year.innerHTML = "687 dni";
			weight.innerHTML = Math.round(number * 0.38 * 100) / 100 + " kg";

			click = 0;
		}

		function Jowisz()
		{
			number = document.getElementById("number").value;

			name.innerHTML = "Jowisz"
			dis.innerHTML ="777,840 mln km";
			temp.innerHTML = "−108 °C";
			year.innerHTML = "4333 dni";
			weight.innerHTML = Math.round(number * 2.54 * 100) / 100 + " kg";

			click = 0;
		}

		function Saturn()
		{
			number = document.getElementById("number").value;

			name.innerHTML = "Saturn"
			dis.innerHTML ="1426,100 mln km";
			temp.innerHTML = "−139 °C";
			year.innerHTML = "10759 dni";
			weight.innerHTML = Math.round(number * 1.08 * 100) / 100 + " kg";

			click = 0;

		}

		function Uran()
		{
			number = document.getElementById("number").value;

			name.innerHTML = "Uran"
			dis.innerHTML ="2867,830 mln km";
			temp.innerHTML = "−197 °C";
			year.innerHTML = "30687 dni";
			weight.innerHTML = Math.round(number * 0.91 * 100) / 100 + " kg";

			click = 0;
		}

		function Neptun()
		{
			number = document.getElementById("number").value;

			name.innerHTML = "Neptun"
			dis.innerHTML ="4493,650 mln km";
			temp.innerHTML = "−201 °C";
			year.innerHTML = "60190 dni";
			weight.innerHTML = Math.round(number * 1.19 * 100) / 100 + " kg";

			click = 0;
		}

		function Apollo11()
		{
			click = 0;
			apollo.play();

			setTimeout(Anim1, 67000);
			// Anim1();

			// document.getElementById("rocket").src = "merkury.png"
		}

		function Anim1()
		{
    		document.getElementById('rocket').className ='rocket1';
  		}