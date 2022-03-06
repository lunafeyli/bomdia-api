export const getHtml = (
	verticle: {
		book: string;
		chapter: number;
		number: number;
		text: string;
	},
	backgroundURL: string
): string => {
	const messages = [
		"Que o dia seja leve, abençoado e iluminado, que nossa fé seja renovada. Bom dia! ☀",
		"Que o seu hoje seja assim como a vontade de Deus; bom, perfeito e agradável. 🙌",
		"Confie no tempo e tenha paciência, Deus age na hora certa e nos dará um bom dia abençoado. 🙏",
		"Bom dia com Deus a frente para nos proteger e nos fazer felizes por onde quer que a gente vá. 🌞",
		"Bom dia com bênçãos do Senhor nos mostrando a importância de perseverar no plantio, pois a colheita é certa. 🙌",
		"Que o Senhor possa ainda nos fortalecer, pois é dEle que vem toda a motivação da qual precisamos para cada momento dessa vida! 🙏",
		"Que possamos nos conectar às boas energias que Deus nos traz e fazer com que elas sejam nossas principais motivadoras, amém!",
		"Que bom é acordar para mais um dia abençoado! ☀",
		"Que possamos enxergar as coisas boas desse dia e ainda sermos gratos, acordar hoje já é uma dádiva.",
		"Que Deus nos conceda um dia abençoado e cheio de vitórias! Bom dia! 😻",
	];

	return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Bom Dia</title>

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap"
				rel="stylesheet"
			/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Handlee&display=swap"
				rel="stylesheet"
			/>
		</head>
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			body {
				position: relative;
				width: 592px;
				height: 592px;
				background-image: url(${backgroundURL});
				background-size: cover;
				background-position: center center;
			}

			h1 {
				font-family: "Merienda", cursive;
				font-size: 64px;
				position: absolute;
				top: 24px;
				left: 32px;
				color: crimson;
			}

			h2 {
				position: absolute;
				left: 32px;
				top: 104px;
				font-size: 28px;
				width: 80%;
				color: #2b2020;
				font-family: "Handlee", cursive;
				font-style: italic;
				text-shadow: 0px 0px 32px #fafbff;
			}

			#versiculo {
				position: absolute;
				bottom: 24px;
				right: 24px;
				width: 50%;
				font-size: 22px;
				color: #cacaca;
				background: #13131380;
				padding: 16px;
			}
		</style>
		<body>
			<h1>Bom Dia${"!".repeat(Math.floor(Math.random() * (3 - 1) + 1))}</h1>
			<h2>
				${messages[Math.floor(Math.random() * (9 - 0) + 0)]}
			</h2>
			<div id="versiculo">
				<p>
					"${verticle.text}"
				</p>
				<span>(${verticle.book} ${verticle.chapter}:${verticle.number})</span>
			</div>
		</body>
	</html>
	`;
};
