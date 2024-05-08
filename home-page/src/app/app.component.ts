import { Component } from "@angular/core";

@Component({
  selector: "app",
  template: `
    <div
      class="feed"
      infiniteScroll
      [infiniteScrollDistance]="2"
      [infiniteScrollThrottle]="50"
      (scrolled)="onScroll()"
    >
      <!-- Aqui vão seus posts -->
      <div class="post" *ngFor="let post of posts">{{ post.content }}</div>
      <!-- Certifique-se de adicionar novos posts aqui conforme você os carrega -->
    </div>
  `,
})
export class AppComponent {
  posts: any[] = []; // Variável para armazenar os posts

  // Função chamada quando o usuário rola para baixo
  onScroll() {
    console.log("Rolou!!");
    // Simulando a carga de mais posts
    for (let i = 0; i < 5; i++) {
      this.posts.push({ content: "Novo post" });
    }
  }
}
