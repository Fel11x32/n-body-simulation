const canvas = document.getElementById('simulation');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const G = 1; // Гравитационная постоянная
const bodies = [];
const numBodies = 20;

class Body {
	constructor(x, y, mass, vx = 0, vy = 0) {
		this.x = x;
		this.y = y;
		this.mass = mass;
		this.radius = Math.max(2, Math.cbrt(this.mass)); // Радиус зависит от массы
		this.vx = vx;
		this.vy = vy;
		this.ax = 0;
		this.ay = 0;
	}

	update() {
		this.vx += this.ax; // Обновляем скорость
		this.vy += this.ay;
		this.x += this.vx;  // Обновляем позицию
		this.y += this.vy;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI); // Рисуем тело
		ctx.fillStyle = 'white';
		ctx.fill();
		ctx.closePath();
	}
}

// Центральный массивный объект
const centerBody = new Body(canvas.width / 2, canvas.height / 2, 20000);
bodies.push(centerBody);

// Создаем вращающиеся тела
for (let i = 0; i < numBodies; i++) {
	const angle = Math.random() * 2 * Math.PI;
	const distance = Math.random() * 200 + 200;
	const x = centerBody.x + Math.cos(angle) * distance;
	const y = centerBody.y + Math.sin(angle) * distance;
	const mass = Math.random() * 20 + 5; // Меньшая масса

	// Скорость для кругового движения
	const orbitalSpeed = Math.sqrt((G * centerBody.mass) / distance);
	const vx = -Math.sin(angle) * orbitalSpeed;
	const vy = Math.cos(angle) * orbitalSpeed;

	bodies.push(new Body(x, y, mass, vx, vy));
}

// Расчет гравитационных сил
function computeForces() {
	for (let i = 0; i < bodies.length; i++) {
		const b1 = bodies[i];
		b1.ax = 0;
		b1.ay = 0;

		for (let j = 0; j < bodies.length; j++) {
			if (i === j) continue;

			const b2 = bodies[j];
			const dx = b2.x - b1.x;
			const dy = b2.y - b1.y;
			const dist = Math.sqrt(dx * dx + dy * dy) + 1;
			const force = (G * b1.mass * b2.mass) / (dist * dist);
			b1.ax += (force * dx) / dist / b1.mass;
			b1.ay += (force * dy) / dist / b1.mass;
		}
	}
}

// Главный цикл анимации
function loop() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем экран

	computeForces(); // Вычисляем силы
	bodies.forEach(body => {
		body.update(); // Обновляем положение
		body.draw();   // Рисуем тело
	});

	requestAnimationFrame(loop); // Следующий кадр
}

loop(); // Запуск симуляции
