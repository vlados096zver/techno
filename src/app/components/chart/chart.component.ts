import {Component, HostListener, OnInit} from '@angular/core';
const COLOURS = ['#999', '#f00', '#0c5adb'];
const MAX_PARTICLES = 200;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent  {
  _particles: any[] = [];
  _ctx: any;
  _canvasWidth: number = 0;
  _canvasHeight: number = 0;

  @HostListener('window:resize', ['$event'])
   _initResize(canvas: any) {
       this._canvasWidth = canvas.width = window.innerWidth;
       this._canvasHeight = canvas.height = window.innerHeight;
   }


  ngOnInit() {
    const canvas = document.getElementById(
      'intro__canvas'
    ) as HTMLCanvasElement;

    if (canvas) {
      this._ctx = canvas.getContext('2d');

      this._initResize(canvas);
      this._initParticles();
      this._loop();
    }
  }

  _initParticles() {
    for (let i = 0; i < MAX_PARTICLES; i++) {
      setTimeout(() => {
        const particle = new Particle(this._canvasWidth, this._canvasHeight);

        this._particles.push(particle);
      }, 10 * i);
    }
  }

  _loop() {
    if (this._ctx) {
      this._ctx.clearRect(0, 0, this._canvasWidth, this._canvasHeight);

      for (const particle of this._particles) {
        particle.move(this._canvasWidth, this._canvasHeight);
        particle.draw(this._ctx);
      }

      requestAnimationFrame(() => this._loop());
    }
  }

}

export class Particle {
  x;
  y;
  vx;
  vy;
  radius;
  colour;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.floor(Math.random() * canvasWidth);
    this.y = Math.floor(Math.random() * canvasHeight);
    this.vx = 1.5 + Math.random() * -3;
    this.vy = 1.5 + Math.random() * -3;
    this.radius = 1 + Math.random();
    this.colour = COLOURS[Math.floor(Math.random() * COLOURS.length)];
  }

  move(canvasWidth: number, canvasHeight: number) {
    // Reset particle if it goes off screen
    if (
      this.y > canvasHeight ||
      this.y < 0 ||
      this.x > canvasWidth ||
      this.x < 0
    ) {
      this.reset(canvasWidth, canvasHeight);
    }
    // Move particles with respect to velocity vectors
    this.x += this.vx;
    this.y += this.vy;
  }

  reset(canvasWidth: number, canvasHeight: number) {
    this.x = canvasWidth / 2;
    this.y = canvasHeight / 2;
    this.vx = 2 + Math.random() * -4;
    this.vy = 2 + Math.random() * -4;
    this.radius = 1 + Math.random() * 3;
  }

  draw(ctx: any) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.colour;
    ctx.fill();
  }
}
