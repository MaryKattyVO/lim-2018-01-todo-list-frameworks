import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    template: `
    <h2>Componente de videojuegos{{nombre}}</h2>
    `
})
export class VideojuegosComponent {
    public nombre = 'Videojuegos';
}