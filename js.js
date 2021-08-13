let bd = document.getElementById('body');
bd.addEventListener('click', function(){
	aud.play();
});
let bx = document.getElementById('sa');
setInterval( function(){
	bx.style.transform = 'scale(-1, 1)';
}, 100);
setInterval( function(){
	bx.style.transform = 'scale(1, 1)';
}, 200);
let pla = document.getElementById('pl');
pla.addEventListener('click', function(){
let po = document.getElementById('menu');
po.style.display = 'none';
let vb = document.getElementById('k');
vb.style.display = 'block';
let s = document.getElementById('s');
let x = 0;
setInterval( function(){
	s.style.transform = 'scale(-1, 1)';
}, 100);
setInterval( function(){
	s.style.transform = 'scale(1, 1)';
}, 200);
let aud = document.getElementById('aud');
document.addEventListener('click', function(){
	s.style.animation = 'wr 0.8s linear';
	x = 10;
	aud.play();

	s.style.transform = 'scale(1, 1)';
	setTimeout( function(){
		s.style.animation = 'none';
		x = 0;
	}, 800);
});

let h1 = document.getElementById('sc');
let count = 0;
setInterval( function(){
	count+=1;
	h1.innerHTML = 'Score: '+ count;

if (count == 300) {
	count=300;
	h1.innerHTML = 'Score: 300';
	q.style.display = 'none';
	let j = document.getElementById('tr');
	j.style.display = 'none';
	let gg = document.getElementById('ho');
	gg.style.display = 'block';
	s.style.animation = 'q 4s linear';
	f -=1000;
	a-=1000;

	setTimeout( function(){
		let bodsy = document.getElementById('body');
	bodsy.style.animation = 'r 3s linear';
		setTimeout( function(){
		location.reload();
	}, 3000);

	}, 1000);
}

	else if (count == 100) {
		h1.innerHTML = 'love sofia(';
		setTimeout( function(){
			h1.innerHTML = 'Score: ' + count;
		}, 1000);
	}
	else if (count == 50) {
		h1.innerHTML = 'xxnwnx';
		setTimeout( function(){
			h1.innerHTML = 'Score: ' + count;
		}, 1000);
	}

}, 1000);

let g = document.getElementById('tr');
let f = 0;

setInterval( function(){
	f+=25;
	g.style.left = f + 'px';
	if (f == 150 && x == 0) {
		location.reload();
	}
}, 500);
setInterval( function(){
	f-=200;
}, 4000);


let q = document.getElementById('t');
let a = 0;
setInterval( function(){
	a+=25;
	q.style.left = a + 'px';
	if (a == 225 && x == 0) {
		location.reload();
	}
}, 1000);
setInterval( function(){
	a-=250;
}, 10000);
setInterval( function(){
	if (a == 200 && x == 0) {
		location.reload();
	}
}, 30000);

let play = document.getElementById('play');
play.addEventListener('click', function(){
	let k =document.getElementById('k');
	k.style.opacity = '1';
	let b = document.getElementById('pause');
	b.style.display = 'none';
});


let pl = document.getElementById('ps');
pl.addEventListener('click', function(){
	let k =document.getElementById('k');
	k.style.opacity = '0.2';
	let b = document.getElementById('pause');
	b.style.display = 'block';

});
});