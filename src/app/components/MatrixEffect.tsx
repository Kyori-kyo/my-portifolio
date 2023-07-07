// "use client"
// import {useRef, useEffect} from "react";

// type Props = {}

// const MatrixEffect = (props: Props) => {
// 	const canvas = useRef<HTMLCanvasElement>(null);

// 	useEffect(() => {
// 		if (canvas.current == null) {
// 			return;
// 		}

// 		const context : any = canvas.current.getContext('2d');
	
// 		canvas.current.width = window.innerWidth;
// 		canvas.current.height = window.innerHeight;
	
// 		const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
// 		const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 		const nums = '0123456789';
	
// 		const alphabet = katakana + latin + nums;
	
// 		const fontSize = 16;
// 		const columns = canvas.current.width/fontSize;
	
// 		const rainDrops : any = Array.from({ length: columns }).fill(canvas.current.height);
	
// 		for( let x = 0; x < columns; x++ ) {
// 			rainDrops[x] = 1;
// 		}
	
// 		const draw = () => {
// 			context.fillStyle = '#FFF';
// 			context.fillRect(0, 0, canvas.current.width, canvas.current.height);
	
// 			context.fillStyle = '#FFF';
// 			context.font = fontSize + 'px monospace';
	
// 			for(let i = 0; i < rainDrops.length; i++)
// 			{
// 				const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
// 				context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
	
// 				if(rainDrops[i]*fontSize > canvas.current.height && Math.random() > 0.975){
// 					rainDrops[i] = 0;
// 				}
// 				rainDrops[i]++;
// 			}
// 		};
	
// 		const interval =  setInterval(draw, 3);
		
// 		return () => {
// 			clearInterval(interval);
// 		}
	
// 	}, []);

// 	return (
// 		<div className={'bg-black h-10 overflow-hidden z-20'}>
// 			<canvas ref={canvas} id="Matrix"></canvas>
// 		</div>
// 	)
// }

// export default MatrixEffect;