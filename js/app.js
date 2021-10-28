/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
{
	"particles":
	{
		"number":{
			"value": 20
		},

		"shape":{
			"type":"image",
			"image":{
				"src": "../assets/images/petal.png",
				"width":200
			}
		},
		
		"size": {
			"value": 10,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 80,
				"size_min": 0.1,
				"sync": false
			}
		},
		
		"line_linked": {
			"enable": false
		},
		
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "bottom",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": true,
				"rotateX": 100
			}
		},

		"interactivity": {
			"detect_on": "windows",
			"events": {
				"onclick": {
				"enable": true,
				"mode": "bubble"
				},
				"resize": true
			}
		},
		
		"modes": {
			"bubble": {
				"distance": 10,
				"size": 10,
				"duration": 2,
				"opacity": 0.6,
				"speed": 1
			}
		}
	}
}

);