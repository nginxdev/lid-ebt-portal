(function () {
    function startFireworks(score = 0, duration = 5000) {
        const canvas = document.createElement('canvas');
        canvas.id = 'fireworksCanvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '9999';
        canvas.style.pointerEvents = 'none';
        canvas.style.background = 'transparent';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawMessage(); // redraw message on resize
        });

        const fireworks = [];

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        class Firework {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.exploded = false;
                this.particles = [];
                this.color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 60%)`;
                setTimeout(() => this.explode(), 100);
            }

            explode() {
                this.exploded = true;
                for (let i = 0; i < 80; i++) {
                    this.particles.push(new Particle(this.x, this.y, this.color));
                }
            }

            update() {
                if (!this.exploded) return;
                this.particles.forEach(p => p.update());
            }

            draw(ctx) {
                if (!this.exploded) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                } else {
                    this.particles.forEach(p => p.draw(ctx));
                }
            }
        }

        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.vx = random(-4, 4);
                this.vy = random(-4, 4);
                this.alpha = 1;
                this.color = color;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= 0.015;
            }

            draw(ctx) {
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        function drawMessage() {
            // Clear just the text layer once
            ctx.save();
            ctx.font = 'bold 48px Arial';
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.shadowColor = 'black';
            ctx.shadowBlur = 10;
            if(score >= 80) {
                ctx.fillText(`🎉 Congratulations! You scored ${score}%`, canvas.width / 2, canvas.height / 2);
            } if(score >= 60) {
                ctx.fillText(`😑 You are almost there! You scored ${score}%`, canvas.width / 2, canvas.height / 2);
            } else {
                ctx.fillText(`🧑🏻‍🏫 Keep practicing, you scored ${score}%`, canvas.width / 2, canvas.height / 2);
            }
            ctx.restore();
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // fireworks only
            fireworks.forEach((fw, i) => {
                fw.update();
                fw.draw(ctx);
                if (fw.exploded && fw.particles.every(p => p.alpha <= 0)) {
                    fireworks.splice(i, 1);
                }
            });

            drawMessage(); // Draw message once per frame but optimized
            animationFrame = requestAnimationFrame(animate);
        }

        let animationFrame;
        let fireworkInterval = setInterval(() => {
            const x = random(100, canvas.width - 100);
            const y = random(100, canvas.height / 2);
            fireworks.push(new Firework(x, y));
        }, 200);

        drawMessage(); // draw once right away
        animate();

        setTimeout(() => {
            clearInterval(fireworkInterval);
            cancelAnimationFrame(animationFrame);
            document.body.removeChild(canvas);
        }, duration);
    }

    window.startFireworks = startFireworks;
})();
