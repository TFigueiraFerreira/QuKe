// posts.component.ts
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Define o limite de visibilidade para o Intersection Observer
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Aqui você pode chamar uma função para carregar mais posts
        console.log('Carregar mais posts!');
      }
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }
}
